<template>
  <header class="bg-transparent py-4">
    <div class="max-w-4xl mx-auto px-4 flex items-center justify-between">
      
      <!-- LOGO + TEXTO -->
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-white card">
          <span class="text-2xl">🦉</span>
        </div>
        <div>
          <div class="text-lg font-extrabold leading-none" style="color:var(--accent)">ApoyoEduca</div>
          <div class="text-xs text-gray-500">Educación — Acceso libre</div>
        </div>
      </div>

      <!-- NAV PRINCIPAL -->
      <nav class="flex items-center gap-10" ref="navRef">

        <router-link to="/" class="text-sm text-gray-700 hover:underline">Inicio</router-link>
     

          <!-- MENU PRIMARIA -->
          <div
            class="relative inline-block"
            @mouseenter="openMenu('primaria')"
            @mouseleave="closeMenuWithDelay"
          >
            <button
              class="text-sm text-gray-700 hover:text-orange-600 flex items-center gap-1 transition"
              @click.prevent="toggleMenu('primaria')"
            >
              Primaria
              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <div
              v-show="activeMenu === 'primaria'"
              class="absolute bg-white shadow-md rounded-md mt-1 min-w-[90px] z-50 divide-y"
              @mouseenter="openMenu('primaria')"
              @mouseleave="closeMenuWithDelay"
            >
              <router-link
                to="/nivel/5"
                class="block px-4 py-2 text-sm hover:bg-red-500 hover:text-white transition"
                @click="closeMenu"
              >
                5º
              </router-link>

              <router-link
                to="/nivel/6"
                class="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white transition"
                @click="closeMenu"
              >
                6º
              </router-link>
            </div>
          </div>

          <!-- MENU JUEGOS -->
          <div
            class="relative inline-block"
            @mouseenter="openMenu('juegos')"
            @mouseleave="closeMenuWithDelay"
          >
            <button
              class="text-sm text-gray-700 hover:text-orange-600 flex items-center gap-1 transition"
              @click.prevent="toggleMenu('juegos')"
            >
              Juegos
              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <div
              v-show="activeMenu === 'juegos'"
              class="absolute bg-white shadow-md rounded-md mt-1 min-w-[140px] z-50 divide-y"
              @mouseenter="openMenu('juegos')"
              @mouseleave="closeMenuWithDelay"
            >
              <router-link
                to="/quiz/construccion-de-palabras"
                class="block px-4 py-2 text-sm hover:bg-red-500 hover:text-white transition"
                @click="closeMenu"
              >
                Construcción de palabras
              </router-link>

              <router-link
                to="/quiz/tilde-diacritica"
                class="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white transition"
                @click="closeMenu"
              >
                Tilde diacrítica
              </router-link>

              <router-link
                to="/quiz/detectives-del-calculo"
                class="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white transition"
                @click="closeMenu"
              >
                Detectives del cálculo
              </router-link>            
              <router-link
                to="/quiz/unidade-o-mapa"
                class="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white transition"
                @click="closeMenu"
              >
                Mapa do España-Europa
              </router-link>
              <router-link
                to="/quiz/reproduccion-drag-drop"
                class="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white transition"
                @click="closeMenu"
                >
                Reprodución
              </router-link>
            </div>        
            
        </div>
            <router-link to="/contacto" class="text-sm text-gray-700 hover:underline">Contacto</router-link>  
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const activeMenu = ref(null)
let closeTimeout = null

const openMenu = (menu) => {
  clearTimeout(closeTimeout)
  activeMenu.value = menu
}

const closeMenuWithDelay = () => {
  closeTimeout = setTimeout(() => {
    activeMenu.value = null
  }, 200)
}

const toggleMenu = (menu) => {
  activeMenu.value = activeMenu.value === menu ? null : menu
}

const closeMenu = () => {
  activeMenu.value = null
}
</script>

<style scoped>
.card { padding: 0.5rem; }
</style>

