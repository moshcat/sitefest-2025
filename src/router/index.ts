import { createRouter, createWebHistory } from 'vue-router'
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
      path: '/competition/:id',
      name: 'comp',
      component: CompetitionView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
