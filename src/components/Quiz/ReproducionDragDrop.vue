<script setup>
import { ref, computed } from "vue";

const results = ref([]);
const showFinalFeedback = ref(false);
const activityCompleted = computed(() => labels.value.length === 0);

const activities = [

  /* =====================================================
   1️⃣ APARATO REPRODUCTOR MASCULINO – VISTA FRONTAL
  ===================================================== */
  {
    id: "masculino_frontal",
    title: "Aparato reprodutor masculino (vista frontal)",
    image: "/images/aparato_masculino_frontal_num.png",
    labels: [
      { id: 1, text: "1", target: "conduto_esq" },
      { id: 2, text: "2", target: "testiculos" },
      { id: 3, text: "3", target: "prostata" },
      { id: 4, text: "4", target: "uretra" },
      { id: 5, text: "5", target: "pene" }
    ],
    zones: [
      { id: "conduto_esq", label: "Conduto deferente" },
      { id: "testiculos", label: "Testículos" },
      { id: "prostata", label: "Próstata" },
      { id: "uretra", label: "Uretra" },
      { id: "pene", label: "Pene" }
    ]
  },

  /* =====================================================
   2️⃣ APARATO REPRODUCTOR MASCULINO – VISTA LATERAL
  ===================================================== */
  {
    id: "masculino_lateral",
    title: "Aparato reprodutor masculino (vista lateral)",
    image: "/images/aparato_masculino_lateral_num.png",
    labels: [
      { id: 1, text: "1", target: "vexiga" },
      { id: 2, text: "2", target: "conduto" },
      { id: 3, text: "3", target: "prostata" },
      { id: 4, text: "4", target: "uretra" },
      { id: 5, text: "5", target: "testiculo" },
      { id: 6, text: "6", target: "pene" }
    ],
    zones: [
      { id: "vexiga", label: "Vexiga da urina" },
      { id: "conduto", label: "Conduto deferente" },
      { id: "prostata", label: "Próstata" },
      { id: "uretra", label: "Uretra" },
      { id: "testiculo", label: "Testículo" },
      { id: "pene", label: "Pene" }
     
    ]
  },



  /* =====================================================
   3️⃣ APARATO REPRODUCTOR FEMININO – VISTA FRONTAL
  ===================================================== */
  {
    id: "feminino_frontal",
    title: "Aparato reprodutor feminino (vista frontal)",
    image: "/images/aparato_femenino_frontal_num.png",
    labels: [
      { id: 1, text: "1", target: "trompa_esq" },
      { id: 2, text: "2", target: "ovario_esq" },
      { id: 3, text: "3", target: "utero" },
      { id: 4, text: "4", target: "vaxina" },
      { id: 5, text: "5", target: "vulva" }
    ],
    zones: [
      { id: "trompa_esq", label: "Trompa de Falopio" },
      { id: "ovario_esq", label: "Ovario" },
      { id: "utero", label: "Útero" },
      { id: "vaxina", label: "Vaxina" },
      { id: "vulva", label: "Vulva" }
    ]
  },

  /* =====================================================
   4️⃣ APARATO REPRODUCTOR FEMININO – VISTA LATERAL
  ===================================================== */
  {
    id: "feminino_lateral",
    title: "Aparato reprodutor feminino (vista lateral)",
    image: "/images/aparato_femenino_lateral_num.png",
    labels: [
      { id: 1, text: "1", target: "ovario" },
      { id: 2, text: "2", target: "trompa" },
      { id: 3, text: "3", target: "utero" },
      { id: 4, text: "4", target: "vaxina" },
      { id: 5, text: "5", target: "vulva" },
      { id: 6, text: "6", target: "uretra" },
      { id: 7, text: "7", target: "vexiga" }
    ],
    zones: [
      { id: "ovario", label: "Ovario" },
      { id: "trompa", label: "Trompa de Falopio" },
      { id: "utero", label: "Útero" },
      { id: "vaxina", label: "Vaxina" },
      { id: "vulva", label: "Vulva" },
      { id: "uretra", label: "Uretra" },
      { id: "vexiga", label: "Vexiga da urina" }
    ]
  },

  /* =====================================================
   5️⃣ FECUNDACIÓN: DO CIGOTO AO EMBRIÓN
  ===================================================== */
  {
    id: "fecundacion",
    title: "Da fecundación ao embrión",
    image: "/images/fecundacion_cigoto_num.png",
    labels: [
      { id: 1, text: "1", target: "espermatozoides" },
      { id: 2, text: "2", target: "trompas" },
      { id: 3, text: "3", target: "fecundacion" },
      { id: 4, text: "4", target: "embrión" },
      { id: 5, text: "5", target: "implantacion" }
    ],
    zones: [
      { id: "espermatozoides", label: "Entrada dos espermatozoides" },
      { id: "trompas", label: "Trompas de Falopio" },
      { id: "fecundacion", label: "Fecundación (cigoto)" },
      { id: "embrión", label: "Formación do embrión" },
      { id: "implantacion", label: "Implantación no útero" }
    ]
  }

];


const currentIndex = ref(0);
const dragged = ref(null);
const message = ref("");

const current = computed(() => activities[currentIndex.value]);

const labels = ref([]);
const zones = ref([]);

function loadActivity() {
  labels.value = current.value.labels.map(l => ({ ...l }));
  zones.value = current.value.zones.map(z => ({ ...z, placed: null }));
  message.value = "";
}

loadActivity();

function onDragStart(label) {
  dragged.value = label;
}
function onDrop(zone) {
  if (!dragged.value || zone.placed) return;

  const isCorrect = dragged.value.target === zone.id;

  results.value.push({
    activity: current.value.id,
    label: zone.label,
    correct: isCorrect
  });

  if (isCorrect) {
    zone.placed = dragged.value.text;
    labels.value = labels.value.filter(l => l.id !== dragged.value.id);
    message.value = "✅ Moi ben!";
  } else {
    message.value = "❌ Case! Próbao outra vez 🙂";
  }

  dragged.value = null;
}

function nextActivity() {
  if (currentIndex.value < activities.length - 1) {
    currentIndex.value++;
    loadActivity();
  } else {
    showFinalFeedback.value = true;
  }
}

const correctAnswers = computed(() =>
  results.value.filter(r => r.correct)
);

const wrongAnswers = computed(() =>
  results.value.filter(r => !r.correct)
);

const correctCount = computed(() =>
  correctAnswers.value.length
);

function restart() {
  currentIndex.value = 0;
  results.value = [];
  showFinalFeedback.value = false;
  loadActivity();
}


</script>

<template>
<div class="max-w-4xl mx-auto p-4">
  <!-- TÍTULO -->
  <h2 class="text-xl font-semibold text-center mb-1">
    {{ current.title }}
  </h2>

  <!-- MAPA -->
  <div class="flex justify-center mb-6">
   <img
    :src="current.image"
    class="w-full max-w-6xl max-h-[70vh] object-contain
          rounded-xl border shadow-lg"
    alt="Xogo de identificación"
/>


  </div>

  <!-- ZONAS (DROP) -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-3xl mx-auto">
    <div
      v-for="zone in zones"
      :key="zone.id"
      @dragover.prevent
      @drop="onDrop(zone)"
      class="border rounded-lg p-4 text-center bg-gray-50 transition"
      :class="{
        'bg-green-100 border-green-500': zone.placed,
        'hover:bg-gray-100': !zone.placed
      }"
    >
      <strong class="block mb-2">{{ zone.label }}</strong>

      <p v-if="zone.placed" class="font-semibold text-green-700">
        {{ zone.placed }}
      </p>

      <p v-else class="text-gray-400 italic">
        Arrastra aquí
      </p>
    </div>
  </div>

  <!-- ETIQUETAS (DRAG) -->
  <div class="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-6">
    <div
      v-for="label in labels"
      :key="label.id"
      draggable="true"
      @dragstart="onDragStart(label)"
      class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold
             flex items-center justify-center cursor-grab
             hover:bg-blue-700 transition"
    >
      {{ label.text }}
    </div>
  </div>

  <!-- MENSAJE -->
  <p
    v-if="message"
    class="text-center font-medium mb-4"
    :class="messageType === 'success'
      ? 'text-green-600'
      : 'text-red-600'"
  >
    {{ message }}
  </p>

  <!-- CONTROLES -->
  <div class="flex flex-col items-center gap-2">
    <button
      class="px-5 py-2 rounded bg-blue-600 text-white font-semibold
             hover:bg-blue-700 transition disabled:opacity-40"
      :disabled="!activityCompleted"
      @click="nextActivity"
    >
      ➜ Seguinte
    </button>

    <p
      v-if="!activityCompleted"
      class="text-sm text-gray-400 italic"
    >
      🧩 Completa todas as partes para continuar
    </p>
  </div>
</div>



  <div v-if="showFinalFeedback" class="final-feedback">
  <h2>🎉 Parabéns! Remataches o xogo 🎉</h2>

  <p class="summary">
    Fixeches <strong>{{ correctCount }}</strong> respostas ben
    de <strong>{{ results.length }}</strong>.
  </p>

  <div class="feedback-block success">
    <h3>⭐ O fixeches moi ben en:</h3>
    <ul>
      <li v-for="item in correctAnswers" :key="item.label">
        {{ item.label }}
      </li>
    </ul>
  </div>

  <div v-if="wrongAnswers.length" class="feedback-block improve">
    <h3>🔁 Podes mellorar en:</h3>
    <ul>
      <li v-for="item in wrongAnswers" :key="item.label">
        {{ item.label }}
      </li>
    </ul>
    <p class="tip">Non pasa nada, agora xa o sabes 👍</p>
  </div>

  <button class="next" @click="restart">
    🔄 Xogar outra vez
  
  </button>
  
 


</div>

</template>

<style scoped>
.game-container {
  max-width: 900px;
  margin: auto;
}

.game {
  display: flex;
  gap: 20px;
}
.zones {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.zone {
  border: 2px dashed #ccc;
  padding: 10px;
  min-height: 70px;
  border-radius: 8px;
  background: #fafafa;
}

.hint {
  color: #999;
}

.labels {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.label {
  background: #4caf50;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: grab;
}

.message {
  margin-top: 15px;
  font-weight: bold;
}

.next {
  margin-top: 24px;
  padding: 14px 28px;

  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.5px;

  color: #ffffff;
  background: linear-gradient(135deg, #4caf50, #81c784);

  border: none;
  border-radius: 999px;

  cursor: pointer;

  box-shadow: 0 6px 0 #388e3c,
              0 10px 18px rgba(0, 0, 0, 0.2);

  transition: all 0.15s ease;
}

/* Hover: efecto juego */
.next:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 0 #388e3c,
              0 14px 22px rgba(0, 0, 0, 0.25);
}

/* Click: botón “se hunde” */
.next:active {
  transform: translateY(4px);
  box-shadow: 0 2px 0 #388e3c,
              0 6px 10px rgba(0, 0, 0, 0.2);
}

/* Accesibilidad */
.next:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(76, 175, 80, 0.4);
}

.final-feedback {
  margin-top: 40px;
  padding: 24px;
  border-radius: 16px;
  background: #f0fdf4;
  text-align: center;
}

.final-feedback h2 {
  color: #2e7d32;
  font-size: 1.6rem;
}

.summary {
  font-size: 1.2rem;
  margin: 16px 0;
}

.feedback-block {
  margin-top: 20px;
  padding: 16px;
  border-radius: 12px;
}

.feedback-block.success {
  background: #e8f5e9;
}

.feedback-block.improve {
  background: #fff3e0;
}

.feedback-block h3 {
  margin-bottom: 8px;
}

.feedback-block ul {
  list-style: none;
  padding: 0;
}

.feedback-block li {
  font-size: 1.1rem;
}

.tip {
  margin-top: 8px;
  font-style: italic;
}


.next:disabled {
  background: #cfd8dc;
  color: #78909c;
  cursor: not-allowed;

  box-shadow: none;
  transform: none;
}
.helper {
  margin-top: 10px;
  font-size: 0.95rem;
  color: #666;
}


</style>
