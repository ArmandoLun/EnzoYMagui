import { createRouter, createWebHashHistory } from 'vue-router'
import Datos from './Datos.vue'
import Home from './Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/datos', component: Datos },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;