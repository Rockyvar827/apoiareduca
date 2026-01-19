<script setup>
import { ref, computed } from 'vue'
import gameData from '../../data/ccss_6_tema2_juego.json'

/* =====================================================
   NORMALIZACIÓN DE DATOS
   (admite 1 mapa o maps[])
===================================================== */
const maps = computed(() => {
  if (Array.isArray(gameData.maps)) return gameData.maps
  if (Array.isArray(gameData.items)) return [gameData]
  return []
})

/* =====================================================
   ESTADO
===================================================== */
const mapIndex = ref(0)
const feedback = ref('')

/* =====================================================
   MAPA ACTUAL
===================================================== */
const currentMap = computed(() => maps.value[mapIndex.value] ?? null)

/* =====================================================
   MODELO DE JUEGO (DIRECTO DESDE JSON)
===================================================== */
const places = computed(() => {
  if (!currentMap.value) return []

  return currentMap.value.items.map(item => ({
    id: item.id,
    number: item.number,
    name: item.name,
    state: 'idle' // idle | ok | error
  }))
})

/* =====================================================
   DRAG & DROP REAL (HTML5)
===================================================== */
function onDragStart(place, event) {
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('text/plain', place.id)
}

function onDrop(target, event) {
  event.preventDefault()

  const draggedId = event.dataTransfer.getData('text/plain')
  if (!draggedId) return

  const draggedPlace = places.value.find(p => p.id === draggedId)
  if (!draggedPlace || draggedPlace.state === 'ok') return

  const ok = draggedPlace.id === target.id
  draggedPlace.state = ok ? 'ok' : 'error'
  target.state = draggedPlace.state

  feedback.value = ok
    ? `✅ ${target.number} → ${target.name}`
    : '❌ Non é correcto. Inténtao de novo.'
}

/* =====================================================
   CONTROL DE AVANCE
===================================================== */
const activityCompleted = computed(() =>
  places.value.length > 0 &&
  places.value.every(p => p.state === 'ok')
)

function nextActivity() {
  if (mapIndex.value < maps.value.length - 1) {
    mapIndex.value++
    feedback.value = ''
  } else {
    feedback.value = '🎉 Actividade completada'
  }
}
</script>

<template>
  <!-- CARGA SEGURA -->
  <div v-if="currentMap" class="max-w-4xl mx-auto p-4">
    <!-- TÍTULO -->
    <h2 class="text-xl font-semibold text-center mb-2">
      {{ currentMap.category }} · {{ currentMap.scope }}
    </h2>

    <!-- MAPA NUMERADO -->
    <div class="flex justify-center mb-6">
      <img
        :src="`/images/${currentMap.image}`"
        class="w-full max-w-5xl max-h-[70vh] object-contain
               rounded-xl border shadow"
        alt="Mapa numerado"
      />
    </div>
<!-- ZONAS + NÚMEROS -->
<div class="grid grid-cols-1 lg:grid-cols-[1fr_120px] gap-6 mb-6 max-w-5xl mx-auto">

  <!-- ZONAS -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div
      v-for="zone in places"
      :key="zone.id"
      @dragover.prevent
      @drop="onDrop(zone, $event)"
      class="border rounded-lg p-4 text-center bg-gray-50 transition"
      :class="{ 'bg-green-100 border-green-500': zone.state === 'ok' }"
    >
      <strong>{{ zone.name }}</strong>

      <p v-if="zone.state === 'ok'" class="text-green-700 mt-1">
        ✔ {{ zone.number }}
      </p>

      <p v-else class="text-gray-400 italic mt-1">
        Arrastra aquí
      </p>
    </div>
  </div>

  <!-- NÚMEROS -->
  <div
    class="flex flex-col items-center gap-2
           max-h-[60vh] overflow-y-auto
           border rounded-lg p-3 bg-gray-50"
  >
    <button
      v-for="place in places"
      :key="place.id"
      draggable="true"
      @dragstart="onDragStart(place, $event)"
      class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold
             flex items-center justify-center cursor-grab transition"
      :class="{ 'opacity-40 cursor-not-allowed': place.state === 'ok' }"
    >
      {{ place.number }}
    </button>
  </div>

</div>

    <!-- FEEDBACK -->
    <p v-if="feedback" class="text-center font-medium mb-4">
      {{ feedback }}
    </p>

    <!-- CONTROLES -->
    <div class="flex flex-col items-center gap-2">
      <button
        class="px-5 py-2 rounded bg-blue-600 text-white font-semibold
               hover:bg-blue-700 transition disabled:opacity-40"
        :disabled="!activityCompleted"
        @click="nextActivity"
      >
        ➜ Seguinte
      </button>

      <p v-if="!activityCompleted" class="text-sm text-gray-400 italic">
        🧩 Completa todas as partes para continuar
      </p>
    </div>
  </div>

  <!-- FALLBACK -->
  <div v-else class="text-center p-6 text-gray-400">
    Cargando xogo…
  </div>
  
</template>
