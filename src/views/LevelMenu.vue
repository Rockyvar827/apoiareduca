<template>
  <section class="max-w-4xl mx-auto p-4">
    <div class="mb-4">
      <div class="text-sm text-gray-500">
        Estás en: <span class="font-semibold">Nivel {{ nivel }}º</span>
      </div>
      <h2 class="text-2xl font-bold mt-2">Selecciona materia</h2>
    </div>

    <div class="grid md:grid-cols-3 gap-4">
      <article
        v-for="(mat, key) in materiasData"
        :key="key"
        class="card p-4 flex flex-col justify-between"
      >
        <div>
          <h3 class="font-semibold text-lg">{{ mat.title }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ mat.description }}</p>
        </div>

        <div class="mt-4 grid grid-cols-1 gap-2">
          <!--
            Soporte categorías por unidad SIN cambiar nombres:
            - Si u.categories existe y tiene elementos -> varios links (una categoría por link).
            - Si no existe u.categories -> mismo comportamiento de antes (un único link).
          -->
          <div
            v-for="u in mat.units"
            :key="u.id"
            class="space-y-1"
          >
            <!-- Caso con categorías: misma unidad, varias categorías -->
            <template v-if="u.categories && u.categories.length">
              <!-- Título de la unidad -->
              <div class="text-sm font-medium">
                {{ u.label }}
              </div>

              <!-- Un enlace por categoría -->
              <router-link
                v-for="c in u.categories"
                :key="c.id ?? c.label"
                :to="`/nivel/${nivel}/materia/${encodeURIComponent(key)}/unidad/${u.id}?categoria=${encodeURIComponent(c.id ?? c.label)}`"
                class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md text-white text-sm w-full"
                :class="c.colorClass || u.colorClass"
              >
                {{ c.label }}
              </router-link>
            </template>

            <!-- Caso sin categorías: comportamiento original -->
            <template v-else>
              <router-link
                :to="`/nivel/${nivel}/materia/${encodeURIComponent(key)}/unidad/${u.id}`"
                class="inline-flex flex-1 items-center justify-center px-3 py-2 rounded-md text-white text-sm w-full"
                :class="u.colorClass"
              >
                {{ u.label }}
              </router-link>
            </template>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const nivel = computed(() => route.params.nivel || '5')

//const rawQuestions = ref(null)

// meta dinámico
useHead({
  title: `Nivel ${nivel.value} - Cuestionario`,
  meta: [
    {
      name: 'description',
      content: `Cuestionario interactivo del nivel ${nivel.value} con preguntas educativas para practicar.`
    }
  ]
})
const levelsData = {
  '5': {
    CCNN: {
      title: 'Ciencias Naturales',
      description: 'Fauna, clima y ecosistemas con preguntas claras y visuales.',
      units: [
        { id: 1, label: 'Unidad-Plantas', colorClass: 'bg-green-400' },
        { id: 2, label: 'Unidad-Ecosistemas', colorClass: 'bg-blue-400' },
        { id: 3, label: 'Unidad-Clima', colorClass: 'bg-purple-400' },
        { id: 4, label: 'Unidad-Naturais', colorClass: 'bg-orange-400' },
        { id: 5, label: 'Unidad 5', colorClass: 'bg-pink-400' }
      ]
    },
    CCSS: {
      title: 'Ciencias Sociales',
      description: 'Historia y sociedad explicado con ejemplos y preguntas.',
      units: [
        { id: 3, label: 'Unidad 1', colorClass: 'bg-red-600' },
        { id: 4, label: 'Unidad 2', colorClass: 'bg-blue-600' },
        { id: 6, label: 'Unidad 3', colorClass: 'bg-yellow-400 text-gray-900' }
      ]
    },
    'Lingua Galega': {
      title: 'Gallego',
      description: 'Gramática y vocabulario con explicaciones simples.',
      units: [
        { id: 1, label: 'Gramática', colorClass: 'bg-orange-600' }
      ]
    }
  },

  '6': {
    CCNN: {
      title: 'Ciencias Naturales (6.º)',
      description: 'Temas avanzados de naturaleza para 6.º',
      units: [
        { id: 1, label: 'Unidad 1', colorClass: 'bg-green-500' },
        { id: 2, label: 'Unidad 2', colorClass: 'bg-teal-400' },
        { id: 3, label: 'Unidad 3', colorClass: 'bg-teal-600' }
      ]
    },
    CCSS: {
      title: 'Ciencias Sociales (6.º)',
      description: 'Historia y sociedad para 6.º',
      units: [
        { id: 1, label: 'Unidad 1', colorClass: 'bg-red-500' },
        { id: 2, label: 'Unidad 2', colorClass: 'bg-blue-500' },
        { id: 3, label: 'Unidad 3', colorClass: 'bg-yellow-400 text-gray-900' }
      ]
    },
    'Lengua Castellana': {
      title: 'Lengua Castellana-Unidad 1',
      description: 'Gramática y vocabulario en español para 6.º',
      units: [
        { id: 1,  label: 'Unidad 1', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'determinantes', label: 'Determinantes', colorClass: 'bg-red-600'  },
          { id: 'formacion de palabras', label: 'Formacion de palabras', colorClass: 'bg-blue-600'  },
          { id: 'tilde diacrítica', label: 'Tilde diacrítica', colorClass: 'bg-yellow-600'  },
          { id: 'lexemas y morfemas', label: 'Lexemas y morfemas', colorClass: 'bg-blue-300'  },
          { id: 'acentuación', label: 'Acentuación', colorClass: 'bg-green-300'  }
        ]
    }
  ]
  },
  'LC2': {
      title: 'Lengua Castellana-Unidad 2',
      description: 'Gramática y vocabulario en español para 6.º',
      units: [
        { id: 2 ,  label: 'Unidad 2', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'diptongos e hiatos', label: 'Diptongos e hiatos', colorClass: 'bg-red-400'  }
        ]
    }
      ]
  },
  'LC3': {
      title: 'Lengua Castellana-Unidad 3',
      description: 'Gramática y vocabulario en español para 6.º',
      units: [
        { id: 3 ,  label: 'Unidad 3', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'siglas y abreviaturas', label: 'Siglas y abreviaturas', colorClass: 'bg-purple-400'  }
        ]
    }
      ]
  },
  'LC5': {
      title: 'Lengua Castellana-Unidad 5',
      description: 'Gramática y vocabulario en español para 6.º',
      units: [
        { id: 5 ,  label: 'Unidad 5', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'pronombres personales', label: 'PRONOMBRES PERSONALES', colorClass: 'bg-blue-300'  },
          { id: 'pronombres relativos', label: 'PRONOMBRES RELATIVOS', colorClass: 'bg-red-500'  },
          { id: 'sinonimos y antonimos', label: 'SINÓNIMOS Y ANTÓNIMOS', colorClass: 'bg-yellow-600'  },
          { id: 'palabras juntas y separadas', label: 'PALABRAS JUNTAS Y SEPARADAS', colorClass: 'bg-green-400'}
        ]
    }
      ]
  },
  'LC6': {
      title: 'Lengua Castellana-Unidad 6',
      description: 'Gramática y vocabulario en español para 6.º',
      units: [
        { id: 6 ,  label: 'Unidad 6', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'neologismos y arcaismos', label: 'NEOLOGISMOS Y ARCAÍSMOS', colorClass: 'bg-blue-300'  },
          { id: 'verbos', label: 'VERBOS', colorClass: 'bg-green-500'  }
        ]
    }
      ]
  },
  'Lingua Galega': {
      title: 'Lingua Galega-Unidad 1',
      description: 'Gramática y vocabulario en gallego para 6.º',
      units: [
        { id: 1 ,  label: 'Unidad 1', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'elementos da comunicación', label: 'Elementos da comunicación', colorClass: 'bg-green-400'  },
          { id: 'lexemas e morfemas', label: 'Lexemas e morfemas', colorClass: 'bg-blue-400'  },
          { id: 'acentuación', label: 'Acentuación', colorClass: 'bg-purple-400'},
          { id: 'variantes dialectais galegas', label: 'variantes dialectais', colorClass: 'bg-orange-400'}
        ]
    }
      ]
  },
  'Lingua-Galega-2': {
      title: 'Lingua Galega-Unidad 2',
      description: 'Gramática y vocabulario en gallego para 6.º',
      units: [
        { id: 2 ,  label: 'Unidad 2', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'lexemas e morfemas', label: 'Lexemas e morfemas', colorClass: 'bg-blue-400'  }
        ]
    }
      ]
  },
  'Lingua-Galega-3': {
      title: 'Lingua Galega-Unidad 3',
      description: 'Gramática y vocabulario en gallego para 6.º',
      units: [
        { id: 3 ,  label: 'Unidad 3', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'determinantes', label: 'Determinantes', colorClass: 'bg-blue-400'  },
          { id: 'palabras primitivas, derivadas e compostas', label: 'Palabras primitivas, derivadas e compostas', colorClass: 'bg-green-400'  },
          { id: 'acento diacrítico', label: 'Acento diacrítico', colorClass: 'bg-orange-400'}
        ]
    }
      ]
  },
  'Lingua-Galega-5': {
      title: 'Lingua Galega-Unidad 5',
      description: 'Gramática y vocabulario en gallego para 6.º',
      units: [
        { id: 5 ,  label: 'Unidad 5', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'as figuras literarias', label: 'AS FIGURAS LITERARIAS', colorClass: 'bg-blue-400'  },
          { id: 'memorias e diarios', label: 'MEMORIAS E DIARIOS', colorClass: 'bg-green-400'  },
          { id: 'os puntos e os parenteses', label: 'OS PUNTOS SUSPENSIVOS E OS PARÉNTESES', colorClass: 'bg-orange-400'},
          { id: 'pronomes persoaís', label: 'PRONOMES PERSOAIS', colorClass: 'bg-red-400'}
        ]
    }
      ]
  },
  'Lingua-Galega-6': {
      title: 'Lingua Galega-Unidad 6',
      description: 'Gramática y vocabulario en gallego para 6.º',
      units: [
        { id: 6 ,  label: 'Unidad 6', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'a raia e as comiñas', label: 'A RAIA E AS COMIÑAS', colorClass: 'bg-blue-400'  },
          { id: 'adverbios', label: 'ADVERBIOS', colorClass: 'bg-green-400'  },
          { id: 'preposición e conxuncions', label: 'PREPOSICIÓNS E CONXUNCIÓNS', colorClass: 'bg-orange-400'}
        ]
    }
      ]
  },
  'Matemáticas': {
      title: 'Matemáticas',
      description: 'Matemáticas para 6.º',
      units: [
        { id: 1 ,  label: 'Unidad 1', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'descomposición', label: 'Descomposición', colorClass: 'bg-blue-400'  },
          { id: 'multiplicaciones', label: 'Multiplicaciones', colorClass: 'bg-green-400'  },
          { id: 'divisiones', label: 'Divisiones', colorClass: 'bg-orange-400'},
          { id: 'operaciones-combinadas', label: 'Operaciones combinadas', colorClass: 'bg-purple-400'},
          { id: 'problemas', label: 'Problemas', colorClass: 'bg-red-400'},
          { id: 'sumas-restas', label: 'Sumas y restas', colorClass: 'bg-pink-400'  }
        ]
    }
      ]
  },
  'Matemáticas-2': {
      title: 'Matemáticas',
      description: 'Matemáticas para 6.º',
      units: [
        { id: 2 ,  label: 'Unidad 2', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'potencias', label: 'Potencias', colorClass: 'bg-blue-400'  },
          { id: 'potencias-base10', label: 'Potencias-base10', colorClass: 'bg-green-400'  },
          { id: 'raices-cuadradas', label: 'Raices-cuadradas', colorClass: 'bg-orange-400'}
        ]
    }
      ]
  },
  'Matemáticas-3': {
      title: 'Matemáticas',
      description: 'Matemáticas para 6.º',
      units: [
        { id: 3 ,  label: 'Unidad 3', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'divisibilidad', label: 'Divisibilidad', colorClass: 'bg-blue-400'  },
          { id: 'divisores', label: 'Divisores', colorClass: 'bg-green-400'  },
          { id: 'multiplos', label: 'Multiplos', colorClass: 'bg-orange-400'},
          { id: 'primos-compuestos', label: 'Primos-compuestos', colorClass: 'bg-purple-300'},
          { id: 'mcd', label: 'MCD', colorClass: 'bg-red-400'  },
          { id: 'mcm', label: 'MCM', colorClass: 'bg-pink-400'  }
        ]
    }
      ]
  },
  'Matemáticas-4': {
      title: 'Matemáticas',
      description: 'Matemáticas para 6.º',
      units: [
        { id: 4 ,  label: 'Unidad 4', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'fracciones', label: 'Fracciones', colorClass: 'bg-blue-400'  },
          { id: 'fracciones-mixtas', label: 'Fracciones-mixtas', colorClass: 'bg-green-400'  },
          { id: 'fracciones_equivalentes', label: 'Fracciones_equivalentes', colorClass: 'bg-orange-400'},
          { id: 'multiplicacion_fracciones', label: 'Multiplicacion_fracciones', colorClass: 'bg-purple-300'},
          { id: 'division_fracciones', label: 'Division_fracciones', colorClass: 'bg-red-400'  },
          { id: 'problemas-fracciones', label: 'Problemas-fracciones', colorClass: 'bg-pink-400'  },
          { id: 'comun_denominador', label: 'Comun_denominador', colorClass: 'bg-teal-400'},
          { id: 'ordenacion_fracciones', label: 'Ordenacion_fracciones', colorClass: 'bg-yellow-300'},
          { id: 'suma_fracciones', label: 'Suma_fracciones', colorClass: 'bg-lime-400'},
          { id: 'resta_fracciones', label: 'Resta_fracciones', colorClass: 'bg-cyan-400'  }
        ]
    }
      ]
  },
  'Matemáticas-5': {
      title: 'Matemáticas',
      description: 'Matemáticas para 6.º',
      units: [
        { id: 5 ,  label: 'Unidad 5', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'aproximacion_redondeo', label: 'Aproximación y redondeo', colorClass: 'bg-blue-400'  },
          { id: 'division_decimales', label: 'División de números decimales', colorClass: 'bg-green-400'  },
          { id: 'multiplicaciones_decimales', label: 'Multiplicaciones de números decimales', colorClass: 'bg-orange-400'},
          { id: 'numeros_decimales', label: 'Números decimales', colorClass: 'bg-purple-300'},
          { id: 'ordenacion_redondeo_decimales', label: 'Ordenación y redondeo de números decimales', colorClass: 'bg-red-400'  },
          { id: 'suma_decimales', label: 'Suma de números decimales', colorClass: 'bg-teal-400'},
          {id: 'problemas_decimales', label: 'Problemas de números decimales', colorClass: 'bg-yellow-400'}
      ]
  }
  ]
  },
  'Matemáticas-6': {
      title: 'Matemáticas',
      description: 'Matemáticas para 6.º',
      units: [
        { id: 6 ,  label: 'Unidad 6', colorClass: 'bg-yellow-100 border border-black text-gray-900 text-center',
        categories: [
          { id: 'proporcionalidad', label: 'Proporcionalidad', colorClass: 'bg-blue-400'  },
          { id: 'reglas-de-3', label: 'Reglas de 3', colorClass: 'bg-orange-400'},
          { id: 'porcentajes', label: 'Porcentajes', colorClass: 'bg-purple-300'},
          { id: 'escalas', label: 'Escalas', colorClass: 'bg-red-400'  },
          { id: 'problemas-proporcionalidad', label: 'Problemas de proporcionalidad', colorClass: 'bg-pink-400'  },
          {id: 'directa', label: 'Proporcionalidad directa', colorClass: 'bg-green-400'},
  ]
    }
       ]
  }
}
}

// computed: obtener las materias para el nivel actual (o fallback)
const materiasData = computed(() => {
  const key = String(nivel.value)
  if (levelsData[key]) return levelsData[key]
  return levelsData['5']
})

function displayName(m) {
  if (!m) return ''
  if (m === 'CCNN') return 'Ciencias Naturales'
  if (m === 'CCSS') return 'Ciencias Sociales'
  if (m.toLowerCase().includes('gallego')) return 'Gallego'
  return String(m)
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
}
</script>

<style scoped>
.card {
  border-radius: 14px;
}

/* seguridad: si un color incluye text-gray-900 como clase compuesta, asegurar contraste */
.bg-yellow-400.text-gray-900 {
  color: #1f2937;
}
</style>
