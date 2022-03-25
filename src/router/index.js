import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import clienteView from '../views/clienteView.vue'
import saboresView from '../views/saboresView.vue'

const routes = [
  {
    path: '/2',
    name: 'home2',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: clienteView
  },
  {
    path: '/sabores',
    name: 'sabores',
    component: saboresView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
