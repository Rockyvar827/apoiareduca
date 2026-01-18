
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


export default router
