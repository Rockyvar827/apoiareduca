<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-white px-4"
  >
    <div class="max-w-xl w-full text-center bg-white rounded-3xl shadow-md p-8 border">

      <h1 class="text-3xl font-bold text-sky-800 mb-4">
        Página no encontrada
      </h1>

      <p class="text-gray-600 mb-6">
        La página que estás buscando no existe, ha cambiado de dirección
        o el enlace no es correcto.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link
          to="/"
          class="px-6 py-3 rounded-xl bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
        >
          Ir al inicio
        </router-link>

        <router-link
          to="/nivel/1"
          class="px-6 py-3 rounded-xl border border-sky-600 text-sky-700 font-medium hover:bg-sky-50 transition"
        >
          Ver niveles
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Página no encontrada – ApoyoEduca',
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://apoyoeduca.net/'
    }
  ]
})
</script>
