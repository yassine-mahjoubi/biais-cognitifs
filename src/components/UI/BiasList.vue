<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref, computed } from 'vue'

import type { Bias } from '../../type/Bias'
import BiasItem from './BiasItem.vue'
import SkeletonCard from './SkeletonCard.vue'

const propos = defineProps<{
  biases: Bias[]
  loading: boolean
}>()
const totalPages = computed(() => Math.ceil(propos.biases.length / 10))
const currentPage = ref<number>(1)
const paginateBy = 10
const nextPage = () => {
  currentPage.value++
}
const previousPage = () => {
  currentPage.value--
}
const displayedPages = computed(() => {
  const start = (currentPage.value - 1) * paginateBy
  const end = start + paginateBy
  return propos.biases.slice(start, end)
})
</script>
<template>
  total pages: {{ totalPages }}
  <nav aria-label="paginaation" aria-labelledby="pagination">
    <h2 class="sr-only" id="pagination">pagination</h2>
    <ul class="mb-5 flex justify-center">
      <li>
        <a
          v-if="currentPage > 1"
          @click="previousPage()"
          class="bg-heavy-metal-950 text-heavy-metal-200 rounded-2xl cursor-pointer px-4 py-2 inline-flex group"
        >
          <i aria-hidden="true" class="group-hover:-translate-x-1 transition-transform">←</i>
          <span> {{ t('buttons.previous') }} </span>
        </a>
      </li>
      <li v-for="page in totalPages" :key="`id-${page}`">
        <a
          href=""
          :aria-current="currentPage === page ? 'page' : undefined"
          class="bg-amber-700 text-shadow-heavy-metal-300 border cursor-pointer"
          :class="currentPage === page ? 'bg-black text-white' : ''"
          >{{ page }}
        </a>
      </li>

      <li>
        <a
          v-if="currentPage < totalPages"
          @click="nextPage()"
          class="bg-heavy-metal-950 text-heavy-metal-200 rounded-2xl cursor-pointer px-4 py-2 inline-flex items-center gap-1 group"
        >
          <span> {{ t('buttons.next') }} </span>
          <i aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</i>
        </a>
      </li>
    </ul>
  </nav>
  <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <template v-if="loading">
      <div v-for="n in 10" :key="`skeleton-${n}`">
        <SkeletonCard />
      </div>
    </template>
    <template v-else>
      <li v-for="(bias, index) in displayedPages" :key="bias.id" :id="bias.id">
        <BiasItem :bias="bias" :index="index + (currentPage - 1) * paginateBy" />
      </li>
    </template>
  </ul>
</template>
