import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ItemList from './views/itemList.vue'
import About from './views/About.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
    { path: '/', component: ItemList },
    { path: '/about', component: About }
]

const router = createRouter({
    history:createMemoryHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount("#app")
