<template>
  <teleport to="body">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="kidconfirm-title"
      @keydown.esc.prevent="onCancel"
    >
      <!-- fondo -->
      <div class="absolute inset-0 bg-black/40" @click="onCancel" />

      <!-- modal -->
      <div
        class="relative bg-white max-w-md w-full rounded-2xl shadow-2xl p-6 ring-1 ring-black/5"
        @click.stop
      >
        <header class="flex items-start gap-4">
          <div class="flex-shrink-0 w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center text-4xl">
            <span aria-hidden>{{ emoji }}</span>
          </div>
          <div>
            <h2 id="kidconfirm-title" class="text-lg font-bold text-gray-900">
              {{ title }}
            </h2>
            <p class="mt-1 text-sm text-gray-600">
              {{ description }}
            </p>
          </div>
        </header>

        <!-- opciones extra (mostrar sugerencias / emojis) -->
        <div v-if="hint" class="mt-4 text-sm text-gray-700">
          {{ hint }}
        </div>

        <!-- botones -->
        <footer class="mt-6 flex gap-3">
          <button
            ref="cancelBtn"
            @click="onCancel"
            class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800"
          >
            <span class="text-2xl">❌</span>
            <span class="text-sm font-medium">No, seguir</span>
          </button>

          <button
            @click="onConfirm"
            class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow"
          >
            <span class="text-2xl">🔁</span>
            <span class="text-sm font-medium">Reiniciar</span>
          </button>
        </footer>

        <!-- nota pequeña -->
        <p class="mt-3 text-xs text-gray-400">No se guardarán respuestas anteriores en el mismo intento.</p>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  title: { type: String, default: '¿Reiniciar el cuestionario?' },
  description: { type: String, default: 'Se generará un nuevo conjunto de preguntas para practicar.' },
  hint: { type: String, default: '' },
  emoji: { type: String, default: '🎉' }
})

const emit = defineEmits(['confirm', 'cancel'])

const cancelBtn = ref(null)

function onConfirm() {
  emit('confirm')
}

function onCancel() {
  emit('cancel')
}

onMounted(() => {
  // Focus en el botón cancelar para no activar por error
  cancelBtn.value?.focus()
})
</script>

<style scoped>
/* nada crítico, todo estilo con Tailwind */
</style>
