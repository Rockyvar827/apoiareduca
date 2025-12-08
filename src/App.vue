<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-sky-50">
    <HeaderBar />

    <main class="p-4 max-w-4xl mx-auto">
      <!-- Aquí se carga la página dinámica según la ruta -->
      <router-view />
    </main>

    <FooterBar />
  </div>
</template>

<script setup>
/*
  Ajusta las rutas si colocaste HeaderBar/FooterBar en otra carpeta.
  En tu proyecto actual esos componentes están en: src/components/Quiz/
*/
import HeaderBar from './components/Quiz/HeaderBar.vue'
import FooterBar from './components/Quiz/FooterBar.vue'
</script>

<style scoped>
/* Estilos muy simples para evitar interferencias; puedes ampliarlos más tarde */
.min-h-screen { min-height: 100vh; }
main { padding-top: 1rem; padding-bottom: 2rem; }
</style>
