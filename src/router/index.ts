import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'about',
      component: AboutView
    }
  ]
});

export default router;

