<template>
  <section class="max-w-4xl mx-auto p-4">
    <div class="mb-4">
      <div class="text-sm text-gray-500">
        Estás en: <span class="font-semibold">Nivel {{ nivel }}º</span>
      </div>
      <h2 class="text-2xl font-bold mt-2">Selecciona materia</h2>
    </div>

    <div class="grid md:grid-cols-3 gap-4">
      <article
        v-for="(mat, key) in materiasData"
        :key="key"
        class="card p-4 flex flex-col justify-between"
      >
        <div>
          <h3 class="font-semibold text-lg">{{ mat.title }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ mat.description }}</p>
        </div>

        <div class="mt-4 grid grid-cols-1 gap-2">
          <router-link
            v-for="u in mat.units"
            :key="u.id"
            :to="`/nivel/${nivel}/materia/${encodeURIComponent(key)}/unidad/${u.id}`"
            class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md text-white text-sm"
            :class="u.colorClass"
          >
            {{ u.label }}
          </router-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
// importa tus funciones reales
// import { loadQuestionsOnce, parseQuestionsData } from '@/composables/useQuestionsCache'

const route = useRoute()
const nivel = computed(() => route.params.nivel || '5')

const rawQuestions = ref(null)

onMounted(async () => {
  try {
    rawQuestions.value = await loadQuestionsOnce()
    // si parseQuestionsData necesita el nivel, pásaselo también
    parseQuestionsData(rawQuestions.value)
  } catch (e) {
    console.error('Error cargando preguntas:', e)
  }
})

watch(nivel, () => {
  if (rawQuestions.value) {
    parseQuestionsData(rawQuestions.value)
  }
})


// meta dinámico

useHead({
  title: `Nivel ${nivel} - Cuestionario`,
  meta: [
    {
      name: 'description',
      content: `Cuestionario interactivo del nivel ${nivel} con preguntas educativas para practicar.`
    }
  ]
})
/**
 * Mapea manualmente materias y unidades por nivel.
 * - key: materia id (se usará en la URL)
 * - title: título para mostrar
 * - description: texto debajo del título
 * - units: array de { id, label, colorClass }
 *
 * Para añadir un nuevo nivel, copia la estructura y añade la clave '7' (por ejemplo).
 */
const levelsData = {
  '5': {
    // clave usada en URL: "CCNN"
    CCNN: {
      title: 'Ciencias Naturales',
      description: 'Fauna, clima y ecosistemas con preguntas claras y visuales.',
      units: [
        { id: 1, label: 'Unidad-Plantas', colorClass: 'bg-green-400' },
        { id: 2, label: 'Unidad-Ecosistemas', colorClass: 'bg-blue-400' },
        { id: 3, label: 'Unidad-Clima', colorClass: 'bg-purple-400' },
        { id: 4, label: 'Unidad-Naturais', colorClass: 'bg-orange-400' },
        { id: 5, label: 'Unidad 5', colorClass: 'bg-pink-400' }
      ]
    },
    CCSS: {
      title: 'Ciencias Sociales',
      description: 'Historia y sociedad explicado con ejemplos y preguntas.',
      units: [
        { id: 3, label: 'Unidad 1', colorClass: 'bg-red-600' },
        { id: 4, label: 'Unidad 2', colorClass: 'bg-blue-600' },
        { id: 6, label: 'Unidad 3', colorClass: 'bg-yellow-400 text-gray-900' }
      ]
    },
    'Lingua Galega': {
      title: 'Gallego',
      description: 'Gramática y vocabulario con explicaciones simples.',
      units: [
        { id: 1, label: 'Gramática', colorClass: 'bg-orange-600' }
      ]
    }
  },

  // ejemplo de otro nivel (6), puedes editar o ampliar
  '6': {
    CCNN: {
      title: 'Ciencias Naturales (6.º)',
      description: 'Temas avanzados de naturaleza para 6.º',
      units: [
        { id: 1, label: 'Unidad 1', colorClass: 'bg-green-500' },
        { id: 2, label: 'Unidad 2', colorClass: 'bg-teal-400' }
      ]
    },
    CCSS: {
      title: 'Ciencias Sociales (6.º)',
      description: 'Historia y sociedad para 6.º',
      units: [
        { id: 1, label: 'Unidad 1', colorClass: 'bg-red-500' }
      ]
    }
  }
}

// computed: obtener las materias para el nivel actual (o fallback)
const materiasData = computed(() => {
  const key = String(nivel.value)
  if (levelsData[key]) return levelsData[key]
  // fallback: devolver el nivel 5 por defecto si no existe el nivel
  return levelsData['5']
})

/** helper displayName opcional (no usado directamente, pero lo dejo por compatibilidad) */
function displayName(m) {
  if (!m) return ''
  if (m === 'CCNN') return 'Ciencias Naturales'
  if (m === 'CCSS') return 'Ciencias Sociales'
  if (m.toLowerCase().includes('gallego')) return 'Gallego'
  return String(m).replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}
</script>

<style scoped>
.card { border-radius: 14px; }

/* seguridad: si un color incluye text-gray-900 como clase compuesta, asegurar contraste */
.bg-yellow-400.text-gray-900 { color: #1f2937; }
</style>
