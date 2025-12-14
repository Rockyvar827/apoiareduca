<!-- src/views/Home.vue (versión ajustada) -->
<template>
  <section class="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 to-white">
    <!-- HERO -->
    <header class="w-full">
      <div class="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20 flex flex-col-reverse lg:flex-row items-center gap-8">
        <!-- Left: copy -->
        <div class="flex-1 text-center lg:text-left">
          <div class="inline-flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-orange-100 shadow-sm ring-1 ring-orange-50">
              <span class="text-2xl" aria-hidden>🧑‍🏫</span>
            </div>
            <span class="text-sm font-semibold text-gray-500">Primaria · Acceso libre</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Aprender jugando. <span class="text-orange-600">rápido, seguro y divertido.</span>
          </h1>

          <p class="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
            Cuestionarios cortos por materia y unidad pensados para 5.º y 6.º de Primaria.
            Preguntas renovadas cada vez, sin registros — ideal para clase o en casa.
          </p>

          <div class="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3 justify-center lg:justify-start">
            <router-link to="/nivel/5" class="inline-flex items-center gap-3 px-5 py-3 rounded-lg shadow-md bg-orange-600 hover:bg-orange-700 text-white font-semibold">
              <span class="text-sm">5.º de Primaria</span>
            </router-link>

            <router-link to="/nivel/6" class="mt-3 sm:mt-0 inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-gray-200 text-gray-700 bg-white hover:shadow">
              <span class="text-sm">6.º de Primaria</span>
            </router-link>
          </div>

          <ul class="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start text-xs text-gray-500">
            <li class="inline-flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-orange-300" /> Actividades cortas</li>
            <li class="inline-flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-amber-300" /> Feedback inmediato</li>
            <li class="inline-flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gray-300" /> Compatible tablet</li>
          </ul>
        </div>

        <!-- Right: illustrative card (keeps visual weight similar to happylearning) -->
        <div class="w-full lg:w-1/3">
          <div class="rounded-2xl bg-white p-5 shadow-2xl" style="border:1px solid rgba(15,23,42,0.04)">
            <!-- Replace emoji with an SVG illustration if you have one -->
            <div class="flex flex-col items-center gap-4">
              <div class="w-28 h-28 rounded-xl flex items-center justify-center bg-gradient-to-tr from-orange-50 to-white text-5xl">🎒</div>

              <div class="text-center">
                <div class="text-lg font-semibold text-gray-800">Listo para empezar</div>
                <p class="text-sm text-gray-600 mt-1">Accede a cuestionarios por materia y unidad — sin registro.</p>
              </div>

            </div>
          </div>
        </div>
      </div> <!-- /container -->
    </header>
     

    <!-- CATEGORIES -->
    <main class="flex-1">
      <div class="max-w-6xl mx-auto px-4 py-10">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold text-gray-900">Materias</h2>
          <p class="text-sm text-gray-500 hidden sm:block">Selecciona nivel y unidad para comenzar</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Reusable card: CCNN -->
          <article class="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-orange-100 text-2xl">🔬</div>
              <div class="flex-1">
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-semibold text-gray-900">Ciencias Naturales</h3>
                  <span class="text-xs text-gray-500">5.º</span>
                </div>
                <p class="mt-2 text-sm text-gray-600">Fauna, clima y ecosistemas con preguntas claras y visuales.</p>
              </div>
            </div>

            <div class="mt-4 grid grid-cols-1 gap-2">
             <router-link
              to="/nivel/5/materia/CCNN/unidad/1"
              class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md bg-green-400 text-white text-sm"
            >
              Unidad-Plantas
            </router-link>

            <router-link
              to="/nivel/5/materia/CCNN/unidad/2"
              class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md bg-blue-400 text-white text-sm"
            >
              Unidad-Ecosistemas
            </router-link>

            <router-link
              to="/nivel/5/materia/CCNN/unidad/3"
              class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md bg-purple-400 text-white text-sm"
            >
              Unidad-Clima
            </router-link>

            <router-link
              to="/nivel/5/materia/CCNN/unidad/4"
              class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md bg-orange-400 text-white text-sm"
            >
              Unidad-Naturais
            </router-link>

            <router-link
              to="/nivel/5/materia/CCNN/unidad/5"
              class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md bg-pink-400 text-white text-sm"
            >
              Unidad 5
            </router-link>
            </div>
          </article>

          <!-- CCSS -->
          <article class="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-orange-100 text-2xl">🌍</div>
              <div class="flex-1">
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-semibold text-gray-900">Ciencias Sociales</h3>
                  <span class="text-xs text-gray-500">5.º</span>
                </div>
                <p class="mt-2 text-sm text-gray-600">Historia y sociedad explicado con ejemplos y preguntas.</p>
              </div>
            </div>

            <div class="mt-4 grid grid-cols-1 gap-2">
              <router-link to="/nivel/5/materia/CCSS/unidad/3"
                class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md bg-red-600 text-white text-sm"
              >
                Unidad 1
              </router-link>

              <router-link to="/nivel/5/materia/CCSS/unidad/4"
                class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm"
              >
                Unidad 2
              </router-link>

              <router-link to="/nivel/5/materia/CCSS/unidad/6"
                class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md bg-yellow-400 text-gray-900 text-sm"
              >
                Unidad 3
              </router-link>
            </div>
          </article>

          <!-- Gallego -->
          <article class="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-lg flex items-center justify-center bg-orange-100 text-2xl">📚</div>
              <div class="flex-1">
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-semibold text-gray-900">Gallego</h3>
                  <span class="text-xs text-gray-500">5.º</span>
                </div>
                <p class="mt-2 text-sm text-gray-600">Gramática y vocabulario con explicaciones simples.</p>
              </div>
            </div>

            <div class="mt-4 grid grid-cols-1 gap-2">
              <router-link :to="`/nivel/5/materia/${encodeURIComponent('Lingua Galega')}/unidad/1`" class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md bg-orange-600 text-white text-sm">
                Gramática
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </main>

    <!-- FOOTER -->
   <footer class="bg-gray-50">
   <div class="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col gap-6">

    <!-- 🔶 SECCIÓN DE DOAZÓNS -->
    <div class="flex flex-col items-start sm:items-center text-center sm:text-left">
      <h3 class="text-lg font-semibold text-gray-800">Donación</h3>

      <p class="mt-1">Se queres apoiar o proxecto, podes facelo por <strong>Bizum</strong>.</p>

      <div class="flex flex-col sm:flex-row items-center gap-3 mt-2">
        <span class="font-mono text-base text-gray-900 bg-white border rounded-md px-3 py-1 shadow-sm">
          +34 611 787 267
        </span>

        <button
          @click="copiarBizum"
          class="px-3 py-1.5 rounded-md bg-orange-600 hover:bg-orange-700 text-white transition text-sm shadow-sm"
        >
          Copiar código
        </button>
      </div>

      <p class="text-gray-500 text-xs mt-2">¡Grazas polo teu apoio!</p>
    </div>
  </div>
</footer>
</section>
</template>

<script setup>
import { useHead } from '@vueuse/head'
useHead({
  title: 'App educativa de niveles y preguntas',
  meta: [
    {
      name: 'description',
      content: 'Aplicación educativa con cuestionarios por niveles para practicar y aprender.'
    }
  ]
})  
/* función mínima para copiar el Bizum al portapapeles y notificar */
function copiarBizum() {
  try {
    const code = '+34 611 787 267'
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code)
        .then(() => {
          // notificación mínima; puedes sustituir por un toast
          alert('Código Bizum copiado')
        })
    } else {
      // fallback
      const ta = document.createElement('textarea')
      ta.value = code
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      alert('Código Bizum copiado')
    }
  } catch (e) {
    // no bloqueamos la app por este fallo
    console.warn('No se pudo copiar', e)
    alert('No se pudo copiar el código automáticamente; cópialo manualmente: +34 611 787 267')
  }
}
</script>

<style scoped>
/* Slight tune: ensures cards are vertically aligned and spacing similar to reference */
.card { border-radius: 14px; }
.group:hover { transform: translateY(-4px); transition: transform .18s ease; }
@media (min-width: 1024px) {
  header > div { align-items: center; }
}
</style>
