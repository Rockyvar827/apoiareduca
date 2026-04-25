import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

const routes = [
  // Estáticas
  '/contacto',
  '/donar',
  '/quiz/tilde-diacritica',
  '/quiz/construccion-de-palabras',
  '/quiz/detectives-del-calculo',
  '/quiz/unidade-o-mapa',
  '/quiz/reproduccion-drag-drop',

  // Nivel 5 — índices
  '/nivel/5',
  '/nivel/5/materia/CCNN',
  '/nivel/5/materia/CCSS',
  '/nivel/5/materia/Lingua%20Galega',

  // Nivel 5 — CCNN
  '/nivel/5/materia/CCNN/unidad/1',
  '/nivel/5/materia/CCNN/unidad/2',
  '/nivel/5/materia/CCNN/unidad/3',
  '/nivel/5/materia/CCNN/unidad/4',
  '/nivel/5/materia/CCNN/unidad/5',

  // Nivel 5 — CCSS
  '/nivel/5/materia/CCSS/unidad/3',
  '/nivel/5/materia/CCSS/unidad/4',
  '/nivel/5/materia/CCSS/unidad/6',

  // Nivel 5 — Lingua Galega
  '/nivel/5/materia/Lingua%20Galega/unidad/1',

  // Nivel 6 — índices
  '/nivel/6',
  '/nivel/6/materia/CCNN',
  '/nivel/6/materia/CCSS',
  '/nivel/6/materia/Lengua%20Castellana',
  '/nivel/6/materia/Lingua%20Galega',
  '/nivel/6/materia/Matem%C3%A1ticas',
  '/nivel/6/materia/Musica',

  // Nivel 6 — CCNN
  '/nivel/6/materia/CCNN/unidad/1',
  '/nivel/6/materia/CCNN/unidad/2',
  '/nivel/6/materia/CCNN/unidad/3',
  '/nivel/6/materia/CCNN/unidad/4',
  '/nivel/6/materia/CCNN/unidad/5',

  // Nivel 6 — CCSS
  '/nivel/6/materia/CCSS/unidad/1',
  '/nivel/6/materia/CCSS/unidad/2',
  '/nivel/6/materia/CCSS/unidad/3',
  '/nivel/6/materia/CCSS/unidad/4',
  '/nivel/6/materia/CCSS/unidad/5',

  // Nivel 6 — Lengua Castellana
  '/nivel/6/materia/Lengua%20Castellana/unidad/1',
  '/nivel/6/materia/LC2/unidad/2',
  '/nivel/6/materia/LC3/unidad/3',
  '/nivel/6/materia/LC5/unidad/5',
  '/nivel/6/materia/LC6/unidad/6',
  '/nivel/6/materia/LC7/unidad/7',
  '/nivel/6/materia/LC8/unidad/8',

  // Nivel 6 — Lingua Galega
  '/nivel/6/materia/Lingua%20Galega/unidad/1',
  '/nivel/6/materia/Lingua-Galega-2/unidad/2',
  '/nivel/6/materia/Lingua-Galega-3/unidad/3',
  '/nivel/6/materia/Lingua-Galega-5/unidad/5',
  '/nivel/6/materia/Lingua-Galega-6/unidad/6',

  // Nivel 6 — Matemáticas
  '/nivel/6/materia/Matem%C3%A1ticas/unidad/1',
  '/nivel/6/materia/Matem%C3%A1ticas-2/unidad/2',
  '/nivel/6/materia/Matem%C3%A1ticas-3/unidad/3',
  '/nivel/6/materia/Matem%C3%A1ticas-4/unidad/4',
  '/nivel/6/materia/Matem%C3%A1ticas-5/unidad/5',
  '/nivel/6/materia/Matem%C3%A1ticas-6/unidad/6',
  '/nivel/6/materia/Matematicas-7/unidad/7',
  '/nivel/6/materia/Matematicas-8/unidad/8',

  // Nivel 6 — Música
  '/nivel/6/materia/Musica/unidad/1',
]

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    sitemap({
      hostname: 'https://apoyoeduca.net',
      dynamicRoutes: routes,
      changefreq: 'weekly',
      priority: 0.7,
      exclude: ['/googlefc9b444cd0ac3afc', '/rss.xml'] // excluye URLs basura
    })
  ],
  base: '/',
})