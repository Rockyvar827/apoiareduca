<template>
  <section class="max-w-4xl mx-auto p-4 sm:p-6">

    <!-- CABECEIRA -->
    <header class="text-center mb-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-sky-800">
        🌍 Xogo Xeográfico – Unidade 2
      </h2>
      <p class="text-sky-600 mt-2">
        Preme no emoji correcto no mapa
      </p>
    </header>
    <!-- SELECTOR DE ÁMBITO -->
    <div class="flex justify-center gap-3 mb-6">
      <button
        v-for="s in scopes"
        :key="s.id"
        class="px-4 py-2 rounded-full font-semibold transition"
        :class="scope === s.id
          ? 'bg-sky-600 text-white'
          : 'bg-sky-100 text-sky-700 hover:bg-sky-200'"
        @click="changeScope(s.id)"
      >
        {{ s.label }}
      </button>
    </div>


    <!-- TARXETA -->
    <div v-if="current" class="bg-white rounded-3xl shadow-md p-6 border">

      <!-- CONSIGNA -->
      <h3 class="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
        📍 Localiza:
        <span class="text-sky-700">{{ current.target.name }}</span>
      </h3>

      <!-- MAPA + EMOJIS -->
      <div class="relative flex justify-center mb-4">
        <img
          :src="`/images/${current.mapImage}`"
          class="max-h-80 rounded-xl border"
          alt="Mapa xeográfico"
        />

        <button
          v-for="item in emojisForCurrentMap"
          :key="item.id"
          class="absolute text-3xl transition hover:scale-125"
          :style="emojiStyle(item)"
          @click="checkEmoji(item)"
        >
          {{ item.emoji }}
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
      <h3 class="text-2xl font-bold text-green-700">
        🎉 Xogo completado!
      </h3>
      <button class="btn-primary mt-4" @click="reset">
        Xogar de novo
      </button>
    </div>

  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import data from '../../data/ccss_6_tema2_juego.json'

const scopes = [
  { id: 'espana', label: '🇪🇸 España' },
  { id: 'europa', label: '🇪🇺 Europa' },
  { id: 'galicia', label: '🌿 Galicia' }
]

const scope = ref('galicia')


/* ============================
   ESTADO
============================ */
const filteredMaps = computed(() => {
  return data.maps.filter(m => m.scope === scope.value)
})

const challenges = ref(generateChallenges(filteredMaps.value))
const index = ref(0)
const feedback = ref(null)

/* ============================
   COMPUTED
============================ */
const current = computed(() => challenges.value[index.value])

/* Índice estable de mapas → emojis */
const mapsByImage = computed(() => {
  const result = {}
  filteredMaps.value.forEach(map => {
    result[map.image] = map.items
  })
  return result
})


/* Emojis do mapa actual (SIN DUPLICADOS) */
const emojisForCurrentMap = computed(() => {
  if (!current.value) return []
  return mapsByImage.value[current.value.mapImage] || []
})

/* ============================
   XERADOR DE RETOS
============================ */
function generateChallenges(maps) {
  const list = []
  maps.forEach(map => {
    map.items.forEach(item => {
      list.push({
        mapImage: map.image,
        target: item
      })
    })
  })
  return list
}

/* ============================
   ESTILO EMOJI
============================ */
function emojiStyle(item) {
  return {
    left: `${item.emojiPos.x * 100}%`,
    top: `${item.emojiPos.y * 100}%`,
    transform: 'translate(-50%, -50%)'
  }
}

/* ============================
   VALIDACIÓN
============================ */
function checkEmoji(item) {
  if (feedback.value) return

  const ok = item.id === current.value.target.id

  feedback.value = {
    ok,
    msg: ok
      ? '🎉 Correcto! Moi ben!'
      : buildErrorMessage(current.value.target)
  }
}

function buildErrorMessage(target) {
  if (target.hints && target.hints.length) {
    return `❌ Non é correcto. Pista: ${target.hints[0]}`
  }
  return '❌ Non é correcto. Proba outro emoji.'
}

/* ============================
   FLUXO
============================ */
function next() {
  feedback.value = null
  index.value++
}

function reset() {
  index.value = 0
  feedback.value = null
}

watch(scope, () => {
  challenges.value = generateChallenges(filteredMaps.value)
  index.value = 0
  feedback.value = null
})

function changeScope(newScope) {
  scope.value = newScope
}


</script>

<style scoped>
.btn-primary {
  padding: 0.75rem 1.25rem;
  border-radius: 1rem;
  background: #0284c7;
  color: white;
  font-weight: 600;
}
.btn-primary:hover {
  background: #0369a1;
}
</style>
