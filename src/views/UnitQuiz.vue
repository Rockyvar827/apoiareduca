<!-- src/views/UnitQuiz.vue -->
<template>
  <section class="max-w-3xl mx-auto p-4">
    <header class="mb-4">
      <h1 class="text-2xl font-extrabold"> {{ title }}</h1>
      <p class="text-sm text-gray-600">Responde las preguntas. No hace falta registro.</p>
    </header>

    <div v-if="!questions.length" class="p-6 bg-yellow-50 rounded-lg text-center">
      <p class="mb-2">No hay preguntas disponibles para esta selección.</p>
      <router-link :to="`/nivel/${nivel}`" class="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded">Volver</router-link>
    </div>

    <div v-else>
      <transition name="fade" mode="out-in">
        <div v-if="stage === 'quiz'" :key="currentIndex" class="space-y-4">
          <QuestionCard
            :question="currentQuestion"
            :index="currentIndex"
            :total="questions.length"
            @answer="onAnswer"
            :show-audio="true"
          />
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-600">Pregunta {{ currentIndex + 1 }} / {{ questions.length }}</div>
            <button class="px-3 py-2 text-sm bg-gray-200 rounded" @click="restartConfirm">Reiniciar</button>
          </div>
        </div>

        <Result v-else-if="stage === 'result'" :answers="answers" :questions="questions" @restart="restart" />
      </transition>
    </div>
    <!-- KidConfirmModal: aparece cuando showRestartConfirm === true -->
  <KidConfirmModal
    v-if="showRestartConfirm"
    :title="'¿Reiniciar el cuestionario?'"
    :description="'Se generará un nuevo conjunto de preguntas. ¿Estás seguro? Puedes volver después para practicar más.'"
    :hint="'Si quieres, pide ayuda a un adulto antes de reiniciar.'"
    emoji="🎯"
    @confirm="onKidConfirm"
    @cancel="onKidCancel"
  /> 
  </section>
</template>
<script setup>
/* --- conserva tus imports existentes --- */
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getQuestionsFor } from '../data/questions'
import QuestionCard from '../components/Quiz/QuestionCard.vue'
import Result from '../components/Quiz/Result.vue'

/* NUEVO: importa el modal */
import KidConfirmModal from '../components/Quiz/KidConfirmModal.vue'

/* --- mantiene tu código existente --- */
const route = useRoute()

const nivel = route.params.nivel || route.query.nivel || ''
const materia = (route.params.materia || route.query.materia || '').toLowerCase()
const unidad = route.params.unidad || route.query.unidad || ''
const category = route.query.category || undefined

// 2. Mapa de nombres legibles (añade los que uses)
const materiaNames = {
  ccnn: 'Ciencias Naturales',
  ccss: 'Ciencias Sociales',
  mate: 'Matemáticas',
  leng: 'Lengua',
  ingl: 'Inglés'
}
const nivelNames = {
  '1': '1º Primaria', '2': '2º Primaria', '3': '3º Primaria',
  '4': '4º Primaria', '5': '5º Primaria', '6': '6º Primaria'
}

// 3. Título del <head> — separado del title que ya usas en el template
const seoTitle = computed(() => {
  const m = materiaNames[materia] || materia
  const n = nivelNames[nivel] || `Nivel ${nivel}`
  if (category) return `${category} - Unidad ${unidad} | ApoyoEduca`
  if (materia && nivel && unidad) return `${m} ${n} - Unidad ${unidad} | ApoyoEduca`
  return 'Cuestionario | ApoyoEduca'
})

const seoDescription = computed(() => {
  const m = materiaNames[materia] || materia
  const n = nivelNames[nivel] || `Nivel ${nivel}`
  if (materia && nivel && unidad)
    return `Preguntas interactivas de ${m} para ${n}, unidad ${unidad}. Repaso educativo para niños sin registro.`
  return 'Cuestionario interactivo de apoyo educativo para primaria.'
})

// 4. Aplica al <head> cuando carguen las preguntas
function applySEO() {
  document.title = seoTitle.value

  let desc = document.querySelector('meta[name="description"]')
  if (!desc) {
    desc = document.createElement('meta')
    desc.setAttribute('name', 'description')
    document.head.appendChild(desc)
  }
  desc.setAttribute('content', seoDescription.value)

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', `https://apoyoeduca.net${window.location.pathname}`)
}

const title = computed(() => {
  if (category) return `${category} — Unidad ${unidad || '1'}`
  if (materia) return `${materia} — Unidad ${unidad || '1'} (Nivel ${nivel || '—'})`
  return 'Cuestionario'
})

const questions = ref([])
const currentIndex = ref(0)
const answers = ref([])
const stage = ref('quiz')

function loadQuestions() {
  const q = getQuestionsFor({ nivel: nivel || undefined, materia: materia || undefined, unidad: unidad || undefined, category, count: 12 })
  questions.value = q
  currentIndex.value = 0
  answers.value = []
  stage.value = q.length ? 'quiz' : 'empty'
}

onMounted(loadQuestions)

const currentQuestion = computed(() => questions.value[currentIndex.value] || null)

function onAnswer({ correct, selected }) {
  answers.value.push({
    question: currentQuestion.value,
    selected,
    correct
  })
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++
  } else {
    stage.value = 'result'
    saveResultLocal()
  }
}

function restart() {
  loadQuestions()
}

/* ---------- REEMPLAZAR restartConfirm para usar modal ---------- */
const showRestartConfirm = ref(false)

function restartConfirm() {
  // abre modal en vez de confirm()
  showRestartConfirm.value = true
}

function onKidConfirm() {
  // el usuario confirma reiniciar
  showRestartConfirm.value = false
  loadQuestions()
}

function onKidCancel() {
  showRestartConfirm.value = false
}


// 5. Llama a applySEO cuando las preguntas estén listas
watch(questions, (val) => {
  if (val.length) {
    applySEO({
      title: seoTitle.value,
      description: seoDescription.value,
      path: route.path
    })

    // Schema Quiz — se añade cuando ya hay preguntas cargadas
    const existing = document.querySelector('script[data-schema="quiz"]')
    if (existing) existing.remove() // evita duplicados al reiniciar

    const schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.setAttribute('data-schema', 'quiz')
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Quiz",
      "name": seoTitle.value,
      "educationalLevel": nivelNames[nivel] || `${nivel}º Primaria`,
      "about": {
        "@type": "Thing",
        "name": materiaNames[materia] || materia
      },
      "inLanguage": "es"
    })
    document.head.appendChild(schema)
  }
}, { immediate: true })
</script>


<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
