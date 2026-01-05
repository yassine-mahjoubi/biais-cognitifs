<script lang="ts" setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useBiasStore } from '@/stores/bias'
import BiasList from '@/components/UI/BiasList.vue'
import MenuFilter from '../UI/MenuFilter.vue'

const store = useBiasStore()
//storeToRefs keep recativity alive
const { loading, filteredAndSortedBiases } = storeToRefs(store)
const { fetchBias } = store

onMounted(async () => {
  setTimeout(async () => {
    await fetchBias()
    console.log('loading: ', loading.value)
  }, 2000)
})
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <menu-filter />
    <BiasList :biases="filteredAndSortedBiases" :loading="loading" />
  </div>
</template>
