<template>
  <section class="max-w-3xl mx-auto p-4">
    <h2 class="text-2xl font-bold mb-3">Contacto</h2>

    <!-- INFORMACIÓN DIRECTA DE CONTACTO -->
    <div class="text-gray-700 mb-3">
      <p class="mt-1 text-gray-700">Rosana Guibert</p>
      <p class="text-gray-700">
        <a href="mailto:rllilart@gmail.com" class="text-blue-600 hover:underline">
          rllilart@gmail.com
        </a>
      </p>
    </div>

    <p class="text-gray-700 mb-3">
      Si prefieres, también puedes enviarnos un mensaje a través de este formulario:
    </p>

    <!-- FORMULARIO MEJORADO -->
    <form class="space-y-4 max-w-lg">

      <!-- NOMBRE -->
      <div>
        <label for="nombre" class="block text-sm font-medium text-gray-700">
          Nombre completo
        </label>

        <input 
          id="nombre"
          type="text"
          aria-label="Introduce tu nombre completo"
          required
          placeholder="Escribe tu nombre..."
          class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                 transition"
        />
      </div>

      <!-- EMAIL -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>

        <input 
          id="email"
          type="email"
          aria-label="Introduce tu correo electrónico"
          required
          placeholder="nombre@ejemplo.com"
          class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                 transition"
        />
      </div>

      <!-- MENSAJE -->
      <div>
        <label for="mensaje" class="block text-sm font-medium text-gray-700">
          Mensaje
        </label>

        <textarea 
          id="mensaje"
          aria-label="Escribe tu mensaje"
          rows="4"
          required
          placeholder="Cuéntanos en qué podemos ayudarte..."
          class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                 transition"
        ></textarea>
      </div>

      <!-- BOTÓN ENVIAR (con nuevo color de fondo) -->
      <button 
        type="submit"
        class="mt-2 w-full bg-orange-600 text-white font-semibold py-2.5 rounded-lg 
               hover:bg-orange-700 transition"
      >
        Enviar mensaje
      </button>
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
    </form>
 
    
    
  
  </section>
</template>
