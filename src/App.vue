<template>
  <div id="app" class="min-h-screen flex flex-col">
    <HeaderBar />

    <main class="flex-1">
      <router-view />
    </main>

    <FooterBar />
  </div>
</template>

<script setup>
import HeaderBar from './components/Quiz/HeaderBar.vue'
import FooterBar from './components/Quiz/FooterBar.vue'
</script>
<style scoped>
.min-h-screen { min-height: 100vh; }
main { padding-top: 1rem; padding-bottom: 2rem; }
</style>
