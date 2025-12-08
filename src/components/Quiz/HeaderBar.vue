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
      <nav class="flex items-center gap-3" ref="navRef">

        <router-link to="/" class="text-sm text-gray-700 hover:underline">Inicio</router-link>

        <!-- MENU PRIMARIA CON DELAY -->
        <div 
          class="relative inline-block"
          @mouseenter="openMenu"
          @mouseleave="closeMenuWithDelay"
        >
          <button 
            class="text-sm text-gray-700 hover:text-orange-600 flex items-center gap-1 transition"
            @click.prevent="toggleMenu"
          >
            Primaria
            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- SUBMENÚ -->
          <div 
            v-show="menuOpen"
            class="absolute bg-white border shadow-md rounded-md mt-1 min-w-[120px] z-50 divide-y transition-opacity duration-150"
            @mouseenter="openMenu"
            @mouseleave="closeMenuWithDelay"
          >
            <router-link
              to="/nivel/5"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white transition"
              @click="closeMenu"
            >
              5º
            </router-link>

            <router-link
              to="/nivel/6"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white transition"
              @click="closeMenu"
            >
              6º
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

const menuOpen = ref(false)
let closeTimeout = null

function openMenu() {
  clearTimeout(closeTimeout)
  menuOpen.value = true
}

function closeMenuWithDelay() {
  clearTimeout(closeTimeout)
  closeTimeout = setTimeout(() => {
    menuOpen.value = false
  }, 200) // <-- RETARDO PARA QUE NO DESAPAREZCA AL MOVER EL RATÓN
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
.card { padding: 0.5rem; }
</style>

