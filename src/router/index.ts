import { createRouter, createWebHistory } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
      name: 'competition',
      component: () => import('../views/CompetitionView.vue'),
    },
    {
      path: '/seminar',
      name: 'seminar',
      component: () => import('../views/SeminarView.vue'),
    },
    {
      path: '/workshop',
      name: 'workshop',
      component: () => import('../views/WorkshopView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  AOS.init()
  next()
})
export default router
