<script lang="ts" setup>
import BiasList from '@/components/UI/BiasList.vue'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useBiasStore } from '@/stores/bias'

const store = useBiasStore()
//storeToRefs keep recativity alive
const { biases, loading } = storeToRefs(store)
const { fetchBias } = store
onMounted(async () => {
  await fetchBias()
})
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <p v-if="loading">Loading..</p>
    <template v-else>
      <BiasList :biases="biases" />
    </template>
  </div>
</template>
