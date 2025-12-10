<template>
  <section
    class="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-sky-100 via-white to-pink-100 rounded-3xl shadow-md border border-sky-100"
  >
    <!-- Cabecera del juego -->
    <header class="text-center mb-6">
      <h2 class="text-2xl sm:text-3xl font-extrabold mb-2 text-sky-800 tracking-tight">
        🎯 Juego de la Tilde Diacrítica
      </h2>
      <p class="text-sm sm:text-base text-sky-700">
        Elige la opción correcta y aprende jugando con las tildes mágicas ✨
      </p>
    </header>

    <!-- Lista de preguntas -->
    <div
      v-for="(q, index) in preguntas"
      :key="index"
      class="mb-6 p-4 sm:p-5 rounded-2xl bg-white shadow-sm border border-sky-100 hover:shadow-md hover:-translate-y-0.5 transition transform"
    >
      <!-- Etiqueta de número de pregunta -->
      <div class="flex items-center justify-between mb-2">
        <span
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800"
        >
          Pregunta {{ index + 1 }} de {{ preguntas.length }}
        </span>
      </div>

      <!-- Enunciado -->
      <p class="mb-3 text-lg font-semibold text-gray-800">
        {{ q.text }}
      </p>

      <!-- Opciones -->
      <div class="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mt-2">
        <button
          v-for="(opt, i) in q.options"
          :key="i"
          @click="responder(index, i)"
          class="w-full sm:w-auto px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
          :class="[
            respuestas[index] === i && i === q.correctIndex
              ? 'bg-emerald-500 text-white'
              : respuestas[index] === i && i !== q.correctIndex
              ? 'bg-rose-500 text-white'
              : 'bg-white text-sky-700 border border-sky-200 hover:bg-sky-50'
          ]"
        >
          {{ opt }}
        </button>
      </div>

      <!-- Feedback / explicación -->
      <div v-if="respuestas[index] !== null" class="mt-3">
        <p
          class="inline-flex items-start gap-2 text-sm sm:text-base px-3 py-2 rounded-xl bg-sky-50 text-sky-900 border border-sky-100"
        >
          <span class="text-lg">
            {{ respuestas[index] === q.correctIndex ? '✅' : '💡' }}
          </span>
          <span>{{ q.explanation }}</span>
        </p>
      </div>
    </div>

    <!-- Mensaje final opcional -->
    <footer
      v-if="respuestas.every(r => r !== null)"
      class="mt-4 text-center text-sm sm:text-base font-semibold text-sky-800"
    >
      🥳 ¡Has respondido todas las preguntas! ¿Jugamos otra vez?
    </footer>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import preguntasTildeJson from '../../data/preguntasTilde.json' with { type: 'json' }

const preguntas = preguntasTildeJson
const respuestas = ref(Array(preguntas.length).fill(null))

function responder(pIndex, optIndex) {
  respuestas.value[pIndex] = optIndex
}
</script>

<style scoped>
button {
  transition: all 0.2s ease;
}
button:hover {
  transform: scale(1.05);
}
</style>
