<template>
  <section class="max-w-3xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Juego: Construye la palabra 🧩</h2>

    <div v-for="(q, index) in questions" :key="index" class="mb-8 p-4 border rounded-lg shadow-sm">
      <!-- Objetivo del reto -->
      <p class="mb-3 text-lg font-semibold">{{ q.goal }}</p>

      <!-- Piezas disponibles -->
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div>
          <h4 class="font-bold text-blue-600">Prefijos</h4>
          <button
            v-for="(p, i) in q.pieces.prefijos"
            :key="i"
            @click="selectPiece(index, 'prefijo', p)"
            class="block w-full px-3 py-2 mt-1 rounded bg-blue-100 hover:bg-blue-300"
          >
            {{ p || '(vacío)' }}
          </button>
        </div>
        <div>
          <h4 class="font-bold text-green-600">Lexemas</h4>
          <button
            v-for="(l, i) in q.pieces.lexemas"
            :key="i"
            @click="selectPiece(index, 'lexema', l)"
            class="block w-full px-3 py-2 mt-1 rounded bg-green-100 hover:bg-green-300"
          >
            {{ l }}
          </button>
        </div>
        <div>
          <h4 class="font-bold text-orange-600">Sufijos</h4>
          <button
            v-for="(s, i) in q.pieces.sufijos"
            :key="i"
            @click="selectPiece(index, 'sufijo', s)"
            class="block w-full px-3 py-2 mt-1 rounded bg-orange-100 hover:bg-orange-300"
          >
            {{ s }}
          </button>
        </div>
      </div>

      <!-- Resultado construido -->
      <div class="mb-2">
        <span class="font-semibold">Tu palabra:</span>
        <span class="ml-2 text-lg">
          {{ selections[index]?.prefijo || '' }}{{ selections[index]?.lexema || '' }}{{ selections[index]?.sufijo || '' }}
        </span>
      </div>

      <!-- Botón comprobar -->
      <button
        @click="checkAnswer(index)"
        class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        Comprobar
      </button>

      <!-- Feedback -->
      <p v-if="feedback[index]" class="mt-2 text-sm" :class="feedback[index].correct ? 'text-green-600' : 'text-red-600'">
        {{ feedback[index].message }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import wordQuestions from '../../data/wordBuilder.json' with { type: 'json' }

const questions = wordQuestions
const selections = ref(Array(questions.length).fill({}))
const feedback = ref(Array(questions.length).fill(null))

function selectPiece(qIndex, type, piece) {
  selections.value[qIndex] = {
    ...selections.value[qIndex],
    [type]: piece
  }
}

function checkAnswer(qIndex) {
  const combo = [
    selections.value[qIndex]?.prefijo || '',
    selections.value[qIndex]?.lexema || '',
    selections.value[qIndex]?.sufijo || ''
  ]
  const correct = combo.join('') === questions[qIndex].correctCombo.join('')
  feedback.value[qIndex] = {
    correct,
    message: correct ? questions[qIndex].explanation : "❌ Intenta otra combinación."
  }
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
