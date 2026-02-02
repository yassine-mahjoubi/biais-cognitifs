<script lang="ts" setup>
import { ref, computed, watch } from 'vue'

import type { Bias } from '../../type/Bias'
import BiasItem from './BiasItem.vue'
import SkeletonCard from './SkeletonCard.vue'
import NavPagination from './NavPagination.vue'

const props = defineProps<{
  biases: Bias[]
  loading: boolean
}>()
const paginateBy = 30
const currentPage = ref<number>(1)
const displayedPages = computed(() => {
  const start = (currentPage.value - 1) * paginateBy
  const end = start + paginateBy
  return props.biases.slice(start, end)
})

const handleCurrentPage = (page: number) => {
  currentPage.value = page
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
//force pour la recherche
watch(
  () => props.biases.length,
  () => {
    currentPage.value = 1
  },
)
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
  <NavPagination
    :biases="biases"
    :paginate-by="paginateBy"
    :current-page="currentPage"
    @current-page="handleCurrentPage"
  />
</template>
