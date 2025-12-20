<template>
  <section class="max-w-4xl mx-auto p-4 sm:p-6">

    <!-- CABECEIRA -->
    <header class="text-center mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-sky-800">
        🌍 Xogo Xeográfico – Unidade 2
      </h2>
      <p class="text-sky-600 mt-2">
        Aprende xogando con mapas e retos
      </p>
    </header>

    <!-- CARGA -->
    <div v-if="loading" class="text-center text-sky-600">
      ⏳ Cargando preguntas...
    </div>

    <!-- TARXETA -->
    <div v-else-if="current" class="bg-white rounded-3xl shadow-md p-6 border">

      <!-- IMAXE -->
      <div v-if="current.image" class="mb-4 flex justify-center">
        <img
          :src="`/images/${current.image}`"
          class="max-h-64 rounded-xl border"
          alt="Mapa ou pista visual"
        />
      </div>

      <!-- TEXTO -->
      <h3 class="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
        {{ current.text }}
      </h3>

      <!-- VERDADEIRO / FALSO -->
      <div v-if="current.gameType === 'verdadeiro_falso'" class="flex gap-4">
        <button class="btn" @click="checkBoolean(true)">✔ Verdadeiro</button>
        <button class="btn" @click="checkBoolean(false)">✖ Falso</button>
      </div>

      <!-- OPCIÓNS -->
      <div v-else class="grid gap-3">
        <button
          v-for="(opt, i) in current.options"
          :key="i"
          class="btn text-left"
          @click="checkOption(i)"
        >
          {{ opt }}
        </button>
      </div>

      <!-- FEEDBACK -->
      <div
        v-if="feedback"
        class="mt-4 p-4 rounded-xl"
        :class="feedback.ok ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
      >
        {{ feedback.msg }}
      </div>

      <!-- SEGUINTE -->
      <div v-if="feedback" class="mt-4 text-right">
        <button class="btn-primary" @click="next">
          Seguinte →
        </button>
      </div>

    </div>

    <!-- FINAL -->
    <div v-else class="text-center p-8 bg-green-50 rounded-3xl">
      <h3 class="text-2xl font-bold text-green-700">🎉 Xogo completado!</h3>
      <button class="btn-primary mt-4" @click="reset">
        Xogar de novo
      </button>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import questionsData from '../../data/ccss_6_tema2_juego.json'

/* ============================
   ESTADO
   ============================ */
const questions = ref(questionsData)
const index = ref(0)
const feedback = ref(null)

/* ============================
   COMPUTED
   ============================ */
const current = computed(() => questions.value[index.value])

/* ============================
   MÉTODOS
   ============================ */
function checkOption(i) {
  const ok = i === current.value.correctIndex
  feedback.value = {
    ok,
    msg: ok ? '🎉 Correcto!' : current.value.explanation
  }
}

function checkBoolean(val) {
  const ok = val === current.value.correctAnswer
  feedback.value = {
    ok,
    msg: ok ? '🎉 Correcto!' : current.value.explanation
  }
}

function next() {
  feedback.value = null
  index.value++
}

function reset() {
  index.value = 0
  feedback.value = null
}
</script>


<style scoped>
.btn {
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  border: 1px solid #bae6fd;
  background: #f0f9ff;
  transition: 0.2s;
  font-weight: 500;
}
.btn:hover {
  background: #e0f2fe;
}
.btn-primary {
  padding: 0.75rem 1.25rem;
  border-radius: 1rem;
  background: #0284c7;
  color: white;
}
.btn-primary:hover {
  background: #0369a1;
}
</style>
