<template>
  <div class="max-w-6xl mx-auto p-4">
    <!-- TÍTULO -->
    <h2 class="text-2xl font-bold text-center mb-1">
      {{ gameData.unit }} · TEST
    </h2>

    <p class="text-center text-gray-600 mb-4 capitalize">
      {{ current?.scope }} · {{ current?.category }}
    </p>

    <!-- CONTENEDOR PRINCIPAL -->
    <div class="flex flex-col lg:flex-row gap-6">
      <!-- MAPA -->
      <div class="flex-1 flex justify-center">
        <img
          v-if="current"
          :src="`/images/${current.image}`"
          class="max-h-[520px] w-auto rounded-xl border shadow"
          alt="Mapa test"
        />
      </div>

      <!-- ZONAS (LISTA DE NOMBRES) -->
      <div class="flex-1">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="place in places"
            :key="place.id"
            class="border rounded-lg p-3 bg-gray-50"
          >
            <strong class="block">{{ place.name }}</strong>
            <span class="text-sm text-gray-400">
              Nº esperado: {{ place.number }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- NÚMEROS (DRAG – SOLO VISUAL PARA TEST) -->
    <div class="mt-8 flex flex-wrap justify-center gap-3">
      <div
        v-for="place in places"
        :key="`num-${place.id}`"
        class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold
               flex items-center justify-center"
      >
        {{ place.number }}
      </div>
    </div>

    <!-- BOTONES DE CONTROL -->
    <div class="flex justify-center gap-4 mt-10">
      <button
        @click="prevMapTest"
        class="px-5 py-2 rounded bg-gray-300 hover:bg-gray-400"
      >
        ◀ Anterior
      </button>

      <button
        @click="nextMapTest"
        class="px-6 py-3 rounded-xl bg-purple-600 text-white
               font-semibold shadow hover:bg-purple-700 transition"
      >
        ➜ Seguinte (TEST)
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gameData from '../../data/ccss_6_tema2_juego.json'

/* ===============================
   ESTADO BASE
================================ */
const maps = computed(() => gameData.maps)

const currentMapIndex = ref(0)
const current = ref(null)
const places = ref([])

/* ===============================
   CARGA DE MAPA
================================ */
function loadCurrentMap() {
  const map = maps.value[currentMapIndex.value]
  if (!map) return

  current.value = map

  // Clon limpio para pruebas
  places.value = map.items.map(item => ({
    id: item.id,
    number: item.number,
    name: item.name,
    level: item.level
  }))
}

/* ===============================
   NAVEGACIÓN TEST
================================ */
function nextMapTest() {
  if (currentMapIndex.value < maps.value.length - 1) {
    currentMapIndex.value++
  } else {
    currentMapIndex.value = 0
  }
  loadCurrentMap()
}

function prevMapTest() {
  if (currentMapIndex.value > 0) {
    currentMapIndex.value--
  } else {
    currentMapIndex.value = maps.value.length - 1
  }
  loadCurrentMap()
}

/* ===============================
   INIT
================================ */
onMounted(loadCurrentMap)
</script>

<style scoped>
/* Nada crítico: solo test visual */
</style>
