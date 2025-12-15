<script lang="ts" setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useBiasStore } from '@/stores/bias'

const store = useBiasStore()
//storeToRefs keep recativity alive
const { randomBias } = storeToRefs(store)
const { selectRandomBias, fetchBias } = store
onMounted(async () => {
  await fetchBias()
  selectRandomBias()
})
</script>
<template>
  <h1 v-if="randomBias" class="text-center text-3xl">biais aléatoire: {{ randomBias.name }}</h1>
  <p>{{ randomBias?.description }}</p>
  <button
    @click="selectRandomBias"
    class="bg-green-950 rounded-2xl border-b-gray-950 text-white p-2 cursor-pointer"
  >
    biais aléatoire
  </button>
</template>
