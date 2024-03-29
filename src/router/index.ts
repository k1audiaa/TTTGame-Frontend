// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('../views/OverView.vue')
    },
    {
      path: '/game',
      name: 'gameview',
      component: () => import('../views/GameView.vue')
    },
    {
      path: '/win',
      name: 'winview',
      component: () => import('../views/WinView.vue')
    },
    {
      path: '/lost',
      name: 'lostview',
      component: () => import('../views/LostView.vue')
    },
    {
      path: '/draw',
      name: 'drawview',
      component: () => import('../views/DrawView.vue')
    }
  ]
})

export default router
