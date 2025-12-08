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
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getQuestionsFor } from '../data/questions'
import QuestionCard from '../components/Quiz/QuestionCard.vue'
import Result from '../components/Quiz/Result.vue'

/* NUEVO: importa el modal */
import KidConfirmModal from '../components/Quiz/KidConfirmModal.vue'

/* --- mantiene tu código existente --- */
const route = useRoute()

const nivel = route.params.nivel || route.query.nivel || ''
const materia = route.params.materia || route.query.materia || ''
const unidad = route.params.unidad || route.query.unidad || ''
const category = route.query.category || undefined

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
</script>


<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
