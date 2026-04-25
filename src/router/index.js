
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TildeQuiz from '../components/Quiz/TildeQuiz.vue'
import WordBuilder from '../components/Quiz/WordBuilder.vue'
import LevelMenu from '../views/LevelMenu.vue'
import SubjectView from '../views/SubjectView.vue'
import UnitQuiz from '../views/UnitQuiz.vue'
import Contact from '../views/Contact.vue'
import Donation from '../views/Donation.vue'
import RSSView from '../views/RSSView.vue'
import DetectivesDelCalculo from '../components/Quiz/DetectivesDelCalculo.vue'
import GeoGame from '../components/Quiz/GeoGame.vue'
import ReproducionDragDrop from '../components/Quiz/ReproducionDragDrop.vue'


const routes = [
{ path: '/', name: 'Home', component: Home },
{ path: '/nivel/:nivel', name: 'Level', component: LevelMenu, props: true },
{ path: '/nivel/:nivel/materia/:materia', name: 'Subject', component: SubjectView, props: true },
{ path: '/nivel/:nivel/materia/:materia/unidad/:unidad', name: 'UnitQuiz', component: UnitQuiz, props: true },
{ path: '/contacto', name: 'Contacto', component: Contact },
{ path: '/donar', name: 'Donacion', component: Donation },
{ path: '/rss.xml', name: 'RSS', component: RSSView },
{ path: '/quiz/tilde-diacritica', name: 'TildeQuiz', component: TildeQuiz },
{path: '/quiz/construccion-de-palabras', name: 'WordBuilder', component: WordBuilder },
{path: '/quiz/detectives-del-calculo', name: 'DetectivesDelCalculo', component: DetectivesDelCalculo },
{path: '/quiz/unidade-o-mapa', name: 'GeoGame', component: GeoGame },
{path: '/quiz/reproduccion-drag-drop', name: 'ReproducionDragDrop', component: ReproducionDragDrop },
{path: '/:pathMatch(.*)*',  name: 'NotFound',component: () => import('../views/NotFound.vue')},
]


const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes
})



// 🔽 NORMALIZAR URLs A MINÚSCULAS (SEO SAFE)
router.beforeEach((to, from, next) => {
  const normalizedPath = to.path.toLowerCase()

  if (to.path !== normalizedPath) {
    next({
      path: normalizedPath,
      query: to.query,
      hash: to.hash,
      replace: true
    })
  } else {
    next()
  }
})

// Mapas de nombres legibles
const materiaNames = {
  ccnn: 'Ciencias Naturales',
  ccss: 'Ciencias Sociales',
  mate: 'Matemáticas',
  leng: 'Lengua',
  ingl: 'Inglés'
}

const nivelNames = {
  '1': '1º Primaria',
  '2': '2º Primaria',
  '3': '3º Primaria',
  '4': '4º Primaria',
  '5': '5º Primaria',
  '6': '6º Primaria'
}

router.afterEach((to) => {
  const { nivel, materia, unidad } = to.params

  let title = 'Apoyo Educativo | Recursos para Primaria'
  let description = 'Recursos interactivos de apoyo educativo para niños de primaria. Ciencias, Matemáticas, Lengua y más.'

  if (to.name === 'Home') {
    title = 'ApoyoEduca | Recursos educativos interactivos para Primaria'
    description = 'Juegos y cuestionarios educativos para repasar Ciencias, Matemáticas y Lengua en Primaria.'

  } else if (to.name === 'Level') {
    const n = nivelNames[nivel] || `Nivel ${nivel}`
    title = `${n} | Materias y recursos - ApoyoEduca`
    description = `Recursos educativos interactivos para ${n}. Repasa todas las materias de forma divertida.`

  } else if (to.name === 'Subject') {
    const n = nivelNames[nivel] || `Nivel ${nivel}`
    const m = materiaNames[materia] || materia
    title = `${m} - ${n} | ApoyoEduca`
    description = `Unidades y recursos de ${m} para ${n}. Repaso interactivo con preguntas y juegos.`

  } else if (to.name === 'UnitQuiz') {
    const n = nivelNames[nivel] || `Nivel ${nivel}`
    const m = materiaNames[materia] || materia
    title = `${m} ${n} - Unidad ${unidad} | ApoyoEduca`
    description = `Preguntas y ejercicios de ${m} para ${n}, unidad ${unidad}. Repaso interactivo para niños.`

  } else if (to.name === 'TildeQuiz') {
    title = 'Quiz Tilde Diacrítica | Lengua Primaria - ApoyoEduca'
    description = 'Practica la tilde diacrítica con este quiz interactivo para alumnos de primaria.'

  } else if (to.name === 'WordBuilder') {
    title = 'Construcción de Palabras | Lengua Primaria - ApoyoEduca'
    description = 'Ejercicios interactivos de construcción de palabras para niños de primaria.'

  } else if (to.name === 'DetectivesDelCalculo') {
    title = 'Detectives del Cálculo | Matemáticas Primaria - ApoyoEduca'
    description = 'Resuelve operaciones matemáticas como un detective. Juego educativo para primaria.'

  } else if (to.name === 'GeoGame') {
    title = 'El Mapa | Ciencias Sociales Primaria - ApoyoEduca'
    description = 'Aprende geografía con este juego interactivo de mapas para alumnos de primaria.'

  } else if (to.name === 'ReproducionDragDrop') {
    title = 'Reproducción - Drag & Drop | Ciencias Naturales - ApoyoEduca'
    description = 'Aprende la reproducción de los seres vivos con ejercicios arrastrables. Ciencias para primaria.'

  } else if (to.name === 'Contacto') {
    title = 'Contacto | ApoyoEduca'
    description = 'Contacta con ApoyoEduca para sugerencias, colaboraciones o dudas.'

  } else if (to.name === 'Donacion') {
    title = 'Apoya el proyecto | ApoyoEduca'
    description = 'ApoyoEduca es un proyecto educativo gratuito. Si te resulta útil, puedes colaborar.'
  }

  document.title = title

  // Meta description
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    document.head.appendChild(metaDesc)
  }
  metaDesc.setAttribute('content', description)

  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', `https://apoyoeduca.net${to.path}`)
})

export default router
