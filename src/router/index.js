import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  },
  {
    path: '/lista-manutencao',
    name: 'ListManutencao',
    component: () => import('../views/ListManutencao.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',

  routes
})

export default router
