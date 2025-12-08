<template>
  <section class="max-w-3xl mx-auto p-4">
    <h2 class="text-2xl font-bold mb-3">Contacto</h2>

    <!-- INFORMACIÓN DIRECTA DE CONTACTO -->
    <div class="bg-white shadow-sm border rounded-lg p-4 mb-6">
      <h3 class="text-lg font-semibold">Información directa</h3>
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

    </form>
  </section>
</template>
