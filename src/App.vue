<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import BiasList from './components/UI/BiasList.vue'
import { useBiasStore } from './stores/bias'

const store = useBiasStore()
//storeToRefs keep recativity alive
const { biases, loading, randomBias } = storeToRefs(store)
const { fetchBias, selectRandomBias } = store
onMounted(async () => {
  await fetchBias()
  selectRandomBias()
  console.log('randomBias', randomBias.value)
})
</script>
<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <span v-if="loading">loading...</span>
      <template v-else>
        <p>{{ randomBias?.category_name }}</p>
        <h1 v-if="randomBias" class="text-center border-l-4 text-3xl">
          biais aléatoire: {{ randomBias.name }}
        </h1>
        <BiasList :biases="biases" />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
