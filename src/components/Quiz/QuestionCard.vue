<template>
  <div class="card p-4">
    <div class="flex items-center justify-between mb-2">
      <div class="text-sm text-gray-500">Pregunta {{ index + 1 }} / {{ total }}</div>
      <div class="w-36">
        <div class="progress" aria-hidden>
          <span :style="{ width: ((index+1)/total*100) + '%' }"></span>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-bold mb-3 tracking-tight text-gray-900">{{ question.text }}</h3>

    <div class="grid gap-3">
      <button
        v-for="(opt, i) in question.options"
        :key="i"
        :disabled="locked"
        :aria-pressed="selectedIndex === i ? 'true' : 'false'"
        @click="select(i)"
        @keyup.enter="select(i)"
        :class="[
          'p-3 rounded-lg text-left border transition relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange-400',
          baseOptionClass,
          optionClass(i)
        ]"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 font-semibold text-lg"
            :class="{
              'bg-red-100 text-red-700': locked && selectedIndex===i && question.correctIndex !== i,
              'bg-green-100 text-green-700': locked && question.correctIndex === i
            }"
          >
            {{ letters[i] }}
          </div>

          <div class="flex-1 text-sm md:text-base">{{ opt }}</div>

          <!-- pequeño badge emoji junto a la opción si está seleccionada y ya está lockeada -->
          <div v-if="locked && selectedIndex === i" class="ml-2 text-xl" aria-hidden>
            <span v-if="question.correctIndex === i" class="animate-pop">🎉</span>
            <span v-else class="animate-shake">❌</span>
          </div>
        </div>

        <!-- animación visual extra para fallo (outline rojo) -->
        <div v-if="locked && selectedIndex === i && question.correctIndex !== i" class="absolute inset-0 pointer-events-none">
          <!-- capa semi-transparente para hacer la respuesta fallada más evidente -->
          <div class="w-full h-full bg-red-50/60"></div>
        </div>
      </button>
    </div>

    <!-- FEEDBACK INMEDIATO (grande, claro para niños) -->
    <div aria-live="polite" class="mt-3">
      <transition name="fade-scale" mode="out-in">
        <div v-if="locked" :key="selectedIndex" class="p-3 rounded-lg"
             :class="question.correctIndex===selectedIndex ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <div class="flex items-start gap-3">
            <div class="text-2xl">
              <span v-if="question.correctIndex===selectedIndex" class="animate-pop">🎉</span>
              <span v-else class="animate-shake">❌</span>
            </div>
            <div>
              <div class="font-semibold text-sm" v-if="question.correctIndex===selectedIndex">¡Bien hecho! Has acertado.</div>
              <div class="font-semibold text-sm" v-else>Has fallado — intenta la siguiente.</div>

              <!-- Mostrar la respuesta correcta siempre cuando ya haya cerrado -->
              <div class="text-sm text-gray-800 mt-2">
                Respuesta correcta: <strong class="inline-block ml-1">{{ question.options[question.correctIndex] }}</strong>
              </div>

              <!-- Explicación si existe -->
              <div v-if="question.explanation" class="text-sm text-gray-700 mt-2">
                <em>{{ question.explanation }}</em>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: { type: Object, required: true },
  index: { type: Number, required: true },
  total: { type: Number, required: true }
})
const emit = defineEmits(['answer'])

const locked = ref(false)
const selectedIndex = ref(null)
const letters = ['A','B','C','D','E','F']

// clases base para opciones (puedes adaptar para tu tema)
const baseOptionClass = 'bg-white border-gray-200 hover:shadow-sm'

// reproductor de sonido simple
function playTone(type = 'ok') {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    o.connect(g)
    g.connect(ctx.destination)
    if (type === 'ok') {
      o.frequency.value = 880
      g.gain.value = 0.02
    } else {
      o.frequency.value = 220
      g.gain.value = 0.03
    }
    o.start()
    setTimeout(() => {
      o.stop()
      ctx.close()
    }, 120)
  } catch (e) {
    // AudioContext puede fallar en algunos entornos; no es bloqueante
    // console.warn('Audio no disponible', e)
  }
}

function select(i) {
  if (locked.value) return
  locked.value = true
  selectedIndex.value = i

  // reproducir sonido según correcto/falso
  const correct = props.question.correctIndex === i
  playTone(correct ? 'ok' : 'ko')

  // emitimos tras 700ms para permitir ver la animación
  setTimeout(() => {
    emit('answer', { correct, selected: i })
  }, 1200)
}

/** Devuelve clases extra según estado (correcta / incorrecta / no seleccionada) */
function optionClass(i) {
  if (!locked.value) {
    // opción normal antes de seleccionar
    return 'cursor-pointer'
  }

  // ya locked
  if (selectedIndex.value === i) {
    // la seleccionada
    if (props.question.correctIndex === i) {
      // correcta: destacar en verde y pop
      return 'bg-green-100 border-green-300 text-green-800 animate-pop'
    } else {
      // incorrecta: rojo y shake
      return 'bg-red-100 border-red-300 text-red-800 animate-shake'
    }
  }

  // si no es la seleccionada pero es la correcta, marcar suavemente
  if (props.question.correctIndex === i) {
    return 'bg-green-50 border-green-200 text-green-800'
  }

  // resto de opciones no seleccionadas
  return 'bg-white border-gray-200 opacity-80'
}
</script>

<style scoped>
.card { border-radius: 12px; }

/* progreso */
.progress > span { width: 0%; height: 8px; display:block; background: linear-gradient(90deg,var(--accent-2),#34D399); border-radius:999px; transition: width .5s ease; }

/* Animaciones para niños */
@keyframes pop {
  0% { transform: scale(.6); opacity: 0 }
  60% { transform: scale(1.12); opacity: 1 }
  100% { transform: scale(1); opacity: 1 }
}
.animate-pop { animation: pop .35s ease both; }

@keyframes shake {
  0% { transform: translateX(0) }
  25% { transform: translateX(-6px) }
  50% { transform: translateX(6px) }
  75% { transform: translateX(-4px) }
  100% { transform: translateX(0) }
}
.animate-shake { animation: shake .45s ease both; }

/* transition para el panel de feedback */
.fade-scale-enter-active, .fade-scale-leave-active { transition: all .22s ease; }
.fade-scale-enter-from { opacity: 0; transform: translateY(6px) scale(.98); }
.fade-scale-enter-to { opacity: 1; transform: translateY(0) scale(1); }
.fade-scale-leave-from { opacity: 1; transform: translateY(0) scale(1); }
.fade-scale-leave-to { opacity: 0; transform: translateY(6px) scale(.98); }

/* focus visible (accesibilidad teclado) */
button:focus { box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.18); outline: none; }

/* versiones de color */
.bg-red-50 { background-color: #ffefef; }
.bg-green-50 { background-color: #ecfdf5; }

/* pequeñas adaptaciones responsivas */
@media (min-width: 768px) {
  .card { padding: 1.25rem; }
}
</style>
