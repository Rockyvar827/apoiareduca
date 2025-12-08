<template>
  <div class="card">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-bold">Resultados</h2>
        <p class="text-sm text-gray-500">Revisa tus aciertos y preguntas falladas.</p>
      </div>

      <div class="text-right">
        <div class="text-sm text-gray-500">Aciertos</div>
        <div class="text-2xl font-bold text-green-600">{{ score }} / {{ questions.length }}</div>
      </div>
    </div>

    <div v-if="wrong.length" class="mt-4 space-y-3">
      <h3 class="font-semibold">Preguntas falladas</h3>
      <div v-for="(w, idx) in wrong" :key="idx" class="p-3 rounded-lg bg-red-50">
        <div class="font-medium">{{ w.question.text }}</div>
        <div class="text-sm mt-1">Tu respuesta: <span class="font-semibold">{{ w.question.options[w.selected] || '—' }}</span></div>
        <div class="text-sm mt-1">Correcta: <span class="font-semibold text-green-700">{{ w.question.options[w.question.correctIndex] }}</span></div>
      </div>
    </div>
    <div class="mt-4 flex gap-3">
      <button @click="$emit('restart')" class="btn-primary">Volver a empezar</button>
      <router-link to="/" class="btn-soft">Ir a inicio</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ answers: Array, questions: Array })
const score = computed(()=> props.answers.filter(a=>a.correct).length)
const wrong = computed(()=> props.answers.filter(a=>!a.correct))
</script>
