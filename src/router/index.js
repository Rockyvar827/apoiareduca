
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LevelMenu from '../views/LevelMenu.vue'
import SubjectView from '../views/SubjectView.vue'
import UnitQuiz from '../views/UnitQuiz.vue'
import Contact from '../views/Contact.vue'
import Donation from '../views/Donation.vue'
import RSSView from '../views/RSSView.vue'


const routes = [
{ path: '/', name: 'Home', component: Home },
{ path: '/nivel/:nivel', name: 'Level', component: LevelMenu, props: true },
{ path: '/nivel/:nivel/materia/:materia', name: 'Subject', component: SubjectView, props: true },
{ path: '/nivel/:nivel/materia/:materia/unidad/:unidad', name: 'UnitQuiz', component: UnitQuiz, props: true },
{ path: '/contacto', name: 'Contacto', component: Contact },
{ path: '/donar', name: 'Donacion', component: Donation },
{ path: '/rss.xml', name: 'RSS', component: RSSView }
]


const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes
})


export default router
