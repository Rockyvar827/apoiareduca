<script setup>
import { ref, onMounted} from "vue";
import ReproducionDragDrop from '@/components/ReproducionDragDrop.vue'
import { applySEO } from '@/utils/seo.js' // importa la utilidad compartida

// ... xogos y pasoActual sin tocar ...

/*
  Definición dos mini-xogos da unidade.
  Cada paso reutiliza o MESMO compoñente,
  só cambia o contido.
*/
const xogos = [
  {
    id: 1,
    title: "Aparello reprodutor masculino",
    image: "/src/assets/aparato_masculino_frontal.png",
    labels: [
      { id: 1, text: "Testículos", target: "testiculos" },
      { id: 2, text: "Pene", target: "pene" },
      { id: 3, text: "Próstata", target: "prostata" },
      { id: 4, text: "Uretra", target: "uretra" },
      { id: 5, text: "Condutos deferentes", target: "condutos" }
    ],
    zones: [
      { id: "testiculos", label: "Testículos" },
      { id: "pene", label: "Pene" },
      { id: "prostata", label: "Próstata" },
      { id: "uretra", label: "Uretra" },
      { id: "condutos", label: "Condutos deferentes" }
    ]
  },
  {
    id: 2,
    title: "Aparello reprodutor feminino",
    image: "/src/assets/aparato_feminino_frontal.png",
    labels: [
      { id: 1, text: "Ovarios", target: "ovarios" },
      { id: 2, text: "Útero", target: "utero" },
      { id: 3, text: "Vaxina", target: "vaxina" },
      { id: 4, text: "Vulva", target: "vulva" },
      { id: 5, text: "Trompas de Falopio", target: "trompas" }
    ],
    zones: [
      { id: "ovarios", label: "Ovarios" },
      { id: "utero", label: "Útero" },
      { id: "vaxina", label: "Vaxina" },
      { id: "vulva", label: "Vulva" },
      { id: "trompas", label: "Trompas de Falopio" }
    ]
  }
];

const pasoActual = ref(0);

/* Avanza ao seguinte xogo */
function seguintePaso() {
  if (pasoActual.value < xogos.length - 1) {
    pasoActual.value++;
  }
}


onMounted(() => {
  applySEO({
    title: 'A Reprodución - Ciencias Naturales 6º Primaria | ApoyoEduca',
    description: 'Aprende as partes dos aparellos reprodutores masculino e feminino con exercicios de arrastrar e soltar. Ciencias Naturais para 6º de Primaria.',
    path: '/quiz/reproduccion-drag-drop'
  })
})
</script>

<template>
  <section class="unit">
    <header class="unit-header">
      <h1>Unidade 3 · A reprodución</h1>
      <p>
        Arrastra cada nome á parte correcta do debuxo.
      </p>
      <p class="progress">
        Xogo {{ pasoActual + 1 }} de {{ xogos.length }}
      </p>
    </header>

    <!-- Mini-xogo -->
    <ReproducionDragDrop
      :title="xogos[pasoActual].title"
      :image-src="xogos[pasoActual].image"
      :labels="xogos[pasoActual].labels"
      :zones="xogos[pasoActual].zones"
      @completed="seguintePaso"
    />

    <!-- Mensaxe final -->
    <div v-if="pasoActual === xogos.length - 1" class="end">
      <h2>🎉 Moi ben!</h2>
      <p>Completaches os xogos da Unidade 3.</p>
    </div>
  </section>
</template>

<style scoped>
.unit {
  max-width: 1000px;
  margin: auto;
  padding: 24px;
  font-family: system-ui, sans-serif;
}

.unit-header {
  text-align: center;
  margin-bottom: 20px;
}

.progress {
  font-weight: bold;
  color: #4caf50;
}

.end {
  margin-top: 30px;
  padding: 20px;
  background: #e8f5e9;
  border-radius: 12px;
  text-align: center;
}
</style>
