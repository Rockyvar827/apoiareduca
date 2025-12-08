<template>
  <section class="max-w-3xl mx-auto p-4 mt-8">
    <h2 class="text-2xl font-bold mb-4">Doazóns</h2>

    <p class="text-gray-700 mb-3">
      Podes facer unha doazón por <strong>Bizum</strong> para apoiar o proxecto.
    </p>

    <!-- CAIXA DESTACADA -->
    <div class="bg-white border shadow-sm rounded-lg p-5 mb-5">
      <p class="text-gray-800 font-semibold text-lg">Código Bizum</p>

      <div class="flex items-center gap-3 mt-2">
        <span 
          id="bizumCode" 
          class="font-mono text-lg text-gray-900"
        >
          +34 611 787 267
        </span>

        <button 
          @click="copiarBizum"
          class="px-3 py-1.5 rounded-md bg-orange-600 hover:bg-orange-700 text-white text-sm transition"
        >
          Copiar
        </button>
      </div>

      <p class="text-sm text-gray-600 mt-3">¡Grazas polo teu apoio!</p>
    </div>

    <!-- INFORMACIÓN DE CONTACTO -->
    <div class="bg-gray-50 border rounded-lg p-4">
      <h3 class="text-lg font-semibold">Contacto</h3>
      <p class="text-gray-700 mt-1">Rosana Guibert</p>
      <p>
        <a 
          href="mailto:rllilart@gmail.com" 
          class="text-blue-600 hover:underline"
        >
          rllilart@gmail.com
        </a>
      </p>
    </div>
  </section>
</template>

<script setup>
function copiarBizum() {
  navigator.clipboard.writeText("+34 611 787 267")
    .then(() => alert("Código Bizum copiado"))
}
</script>
