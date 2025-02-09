import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompetitionView from '../views/CompetitionView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/components/pages/NotFound/NotFound.vue'),
    },
    {
      path: '/competition',
      name: 'comp',
      component: CompetitionView,
    },
  ],
})

export default router
