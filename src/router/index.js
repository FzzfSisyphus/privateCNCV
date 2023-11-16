import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ped from '../pic/PedestrainDetection.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ped',
      name: 'ped',
      component: Ped
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    },
    {
      path: '/otsu',
      name: 'otsu',
      component: () => import('../pic/otsu.vue')
    },
    {
      path: '/zk',
      name: 'zk',
      component: () => import('../pic/Zk.vue')
    },
    {
      path: '/homo',
      name: 'homo',
      component: () => import('../pic/homo.vue')
    },
  ]
})

export default router
