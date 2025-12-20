<template>
  <section class="max-w-3xl mx-auto p-4 sm:p-6 bg-gradient-to-b from-orange-50 to-white rounded-3xl shadow-md">

    <!-- CABECERA -->
    <header class="text-center mb-6">
      <h2 class="text-2xl font-extrabold text-orange-700">
        🕵️‍♂️ Detectives del Cálculo
      </h2>
      <p class="text-sm text-gray-600 mt-1">
        Arrastra la pista correcta a cada zona
      </p>
    </header>

    <!-- PROGRESO -->
    <div v-if="ejercicio" class="mb-4 text-center text-sm text-gray-500">
      Caso {{ index + 1 }} de {{ ejercicios.length }}
    </div>

    <!-- FIN -->
    <div v-if="!ejercicio" class="bg-white rounded-3xl p-8 shadow text-center">
      <h3 class="text-2xl font-bold text-green-600 mb-3">
        🎉 Caso cerrado
      </h3>
      <button
        @click="restart"
        class="px-6 py-2 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
      >
        Volver a empezar
      </button>
    </div>

    <!-- JUEGO -->
    <div
      v-else
      class="bg-white rounded-2xl p-6 shadow-sm border border-orange-100"
    >
      <!-- ENUNCIADO -->
      <div class="text-center mb-6">
        <p class="text-gray-500 text-sm">Pista matemática</p>
        <p class="text-3xl font-bold tracking-wide text-gray-900">
          {{ ejercicio.text }}
        </p>
      </div>

      <!-- FICHAS -->
      <div class="flex justify-center gap-4 mb-8 flex-wrap">
        <div
          v-for="item in ejercicio.dragItems"
          :key="item"
          draggable="true"
          @dragstart="onDragStart($event, item)"
          class="drag-item"
        >
          {{ item }}
        </div>
      </div>

      <!-- ZONAS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          v-for="zone in ejercicio.dropZones"
          :key="zone"
          @dragover.prevent
          @drop="onDrop($event, zone)"
          class="drop-zone"
          :class="zoneClass(zone)"
        >
          <p class="font-semibold text-gray-700">
            {{ zone }}
          </p>

          <transition name="drop">
          <p
            v-if="answers[zone]"
            class="mt-2 text-lg font-bold cursor-pointer flex items-center gap-2 justify-center"
            title="Haz clic para quitar"
            @click="remove(zone)"
          >
            {{ answers[zone] }}

            <!-- CHECK VERDE -->
            <span
              v-if="isZoneCorrect(zone) === true"
              class="text-green-600 text-xl"
            >
              ✔
            </span>

            <!-- CRUZ ROJA -->
            <span
              v-else-if="isZoneCorrect(zone) === false"
              class="text-red-600 text-xl"
            >
              ✖
            </span>
          </p>
        </transition>

        </div>
      </div>

      <!-- FEEDBACK -->
      <div v-if="feedback" class="mt-6 text-center">
        <p
          class="font-semibold"
          :class="isCorrect ? 'text-green-600' : 'text-red-600'"
        >
          {{ feedback }}
        </p>

        <p
          v-if="isCorrect"
          class="mt-2 text-sm text-gray-600"
        >
          {{ ejercicio.explanation }}
        </p>
      </div>

      <!-- CONTROLES -->
      <div class="mt-6 flex justify-center gap-4">
        <button
          v-if="isComplete && !isCorrect"
          @click="retry"
          class="px-6 py-2 rounded-xl bg-orange-400
                 text-white font-semibold hover:bg-orange-500 transition"
        >
          🔁 Intentar de nuevo
        </button>

        <button
          v-if="isCorrect"
          @click="next"
          class="px-6 py-2 rounded-xl bg-green-500
                 text-white font-semibold hover:bg-green-600 transition"
        >
          Siguiente caso →
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ejercicios from '../../data/adivinaMates.json'

const index = ref(0)
const answers = ref({})
const feedback = ref('')
const isCorrect = ref(false)

const ejercicio = computed(() => ejercicios[index.value] || null)

const isComplete = computed(() => {
  if (!ejercicio.value) return false
  return ejercicio.value.dropZones.every(z => answers.value[z])
})

// DRAG
const onDragStart = (event, item) => {
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('text/plain', item)
}

// DROP
const onDrop = (event, zone) => {
  const item = event.dataTransfer.getData('text/plain')
  if (!item) return

  answers.value[zone] = item
  validate()
}

// QUITAR FICHA
const remove = (zone) => {
  delete answers.value[zone]
  feedback.value = ''
  isCorrect.value = false
}

// VALIDACIÓN
const validate = () => {
  if (!isComplete.value) return

  const soluciones = ejercicio.value.solutions
  const correcto = ejercicio.value.dropZones.every(z => {
  const dragged = answers.value[z]
  const mapped = ejercicio.value.map[dragged]
  return String(mapped) === String(soluciones[z])
})


  isCorrect.value = correcto
  feedback.value = correcto
    ? '✅ Caso resuelto correctamente'
    : '❌ Alguna pista no encaja. Puedes rectificar'
}

// REINTENTAR
const retry = () => {
  answers.value = {}
  feedback.value = ''
  isCorrect.value = false
}

// SIGUIENTE
const next = () => {
  index.value++
  answers.value = {}
  feedback.value = ''
  isCorrect.value = false
}

// REINICIAR
const restart = () => {
  index.value = 0
  answers.value = {}
  feedback.value = ''
  isCorrect.value = false
}

// comprobar zonas correctas individuales
 const isZoneCorrect = (zone) => {
  if (!answers.value[zone]) return null
  if (!ejercicio.value?.map) return null

  const numero = answers.value[zone]
  const significado = ejercicio.value.map[numero]
  const solucion = ejercicio.value.solutions[zone]

  return significado === solucion
}


// CLASES
const zoneClass = (zone) => {
  if (!answers.value[zone]) return 'border-gray-300 bg-gray-50'
  return isCorrect.value
    ? 'border-green-400 bg-green-50'
    : 'border-red-400 bg-red-50'
}
</script>

<style scoped>
.drag-item {
  padding: 0.75rem 1.25rem;
  border-radius: 1rem;
  background: #fed7aa;
  color: #7c2d12;
  font-weight: 700;
  cursor: grab;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.drop-zone {
  min-height: 90px;
  border-width: 2px;
  border-style: dashed;
  border-radius: 1.25rem;
  padding: 1rem;
  text-align: center;
}
.drop-enter-active {
  animation: dropBounce 0.35s ease-out;
}
@keyframes dropBounce {
  0% { transform: scale(0.85); opacity: 0; }
  60% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); }
}
</style>
