import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'   // tu archivo CSS
import { createHead } from '@vueuse/head'
import NewTabLink from './components/Quiz/NewTabLink.vue';




const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')
app.component('NewTabLink', NewTabLink);
