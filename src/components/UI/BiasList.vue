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
const currentPage = ref<number>(1)
const paginateBy = 20
const totalPages = computed(() => Math.ceil(propos.biases.length / paginateBy))

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
const goToPage = (page: number) => (currentPage.value = page)
</script>
<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <template v-if="loading">
      <div v-for="n in paginateBy" :key="`skeleton-${n}`">
        <SkeletonCard />
      </div>
    </template>
    <template v-else>
      <li v-for="(bias, index) in displayedPages" :key="bias.id" :id="bias.id">
        <BiasItem :bias="bias" :index="index + (currentPage - 1) * paginateBy" />
      </li>
    </template>
  </ul>
  <nav aria-label="pagiaation" role="navigation">
    <ul class="mb-5 flex justify-center mt-5">
      <li>
        <a href="#" v-if="currentPage > 1" @click="previousPage()" class="">
          <i aria-hidden="true" class="group-hover:-translate-x-1 transition-transform">←</i>
          <span> {{ t('buttons.previous') }} </span>
        </a>
      </li>
      <li v-for="page in totalPages" :key="`id-${page}`">
        <a
          :href="`?page=${page}`"
          @click.prevent="goToPage(page)"
          :aria-current="currentPage === page ? 'page' : undefined"
          :title="`page ${page}`"
          class=""
          :class="currentPage === page ? 'bg-heavy-metal-800 text-heavy-metal-100' : ''"
          >{{ page }}
        </a>
      </li>

      <li>
        <a href="#" v-if="currentPage < totalPages" @click="nextPage()" class="">
          <span> {{ t('buttons.next') }} </span>
          <i aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</i>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style lang="css" scoped>
a {
  padding: 5px;
  border: 1px solid var(--bg-heavy-metal-800);
  cursor: pointer;
}
</style>
