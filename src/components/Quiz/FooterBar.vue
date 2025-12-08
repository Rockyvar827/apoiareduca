<!-- src/components/Quiz/FooterBar.vue -->
<template>
  <footer class="mt-10 py-6 text-center text-sm text-gray-600">
    <p>© {{ new Date().getFullYear() }} ApoyoEduca — Aprende y juega</p>

    <div class="flex justify-center gap-4 mt-3">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        class="text-blue-700 hover:underline"
      >
        Linkedin
      </a>

      <a
        href="/rss"
        class="text-gray-700 hover:underline"
      >
        RSS
      </a>
    </div>
  </footer>
</template>

<script setup>
// No logic needed for now – pure presentation component
</script>

<style scoped>
footer {
  font-family: system-ui, sans-serif;
}
</style>
