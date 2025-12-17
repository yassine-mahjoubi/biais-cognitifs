import { createRouter, createWebHistory } from 'vue-router'

import ListeView from '@/components/views/ListeView.vue'
import RandomView from '@/components/views/RandomView.vue'

const routes = [
  { path: '/', component: RandomView },
  { path: '/liste', component: ListeView },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
