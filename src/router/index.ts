import { createRouter, createWebHistory } from 'vue-router'

import ListeView from '@/components/views/ListeView.vue'
import RandomView from '@/components/views/RandomView.vue'
import BiasDetail from '@/components/views/BiasDetail.vue'
import CategoriesVIew from '@/components/views/CategoriesVIew.vue'

const routes = [
  { path: '/', component: RandomView },
  { path: '/liste', component: ListeView },
  { path: '/categories', component: CategoriesVIew },
  { path: '/:slug', name: 'bias-detail', component: BiasDetail, props: true },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
