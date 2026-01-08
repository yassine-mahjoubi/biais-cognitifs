import { createRouter, createWebHistory } from 'vue-router'

import ListeView from '@/components/views/ListeView.vue'
import RandomView from '@/components/views/RandomView.vue'
import BiasDetail from '@/components/views/BiasDetail.vue'
import AboutView from '@/components/views/AboutView.vue'

const routes = [
  { path: '/', component: RandomView },
  { path: '/liste', component: ListeView },
  { path: '/about', component: AboutView },
  { path: '/:slug', name: 'bias-detail', component: BiasDetail, props: true },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
