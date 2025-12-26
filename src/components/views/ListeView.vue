<script lang="ts" setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useBiasStore } from '@/stores/bias'
import BiasList from '@/components/UI/BiasList.vue'
import MenuFilter from '../UI/MenuFilter.vue'

const store = useBiasStore()
//storeToRefs keep recativity alive
const { loading, sortedBiases } = storeToRefs(store)
const { fetchBias } = store

onMounted(async () => {
  await fetchBias()
})
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <menu-filter />
    <p v-if="loading">Loading..</p>
    <template v-else>
      <BiasList :biases="sortedBiases" />
    </template>
  </div>
</template>
