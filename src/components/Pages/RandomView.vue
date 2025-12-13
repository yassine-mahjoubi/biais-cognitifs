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
  <div>
    <h1 v-if="randomBias" class="text-center border-l-4 text-3xl">
      biais aléatoire: {{ randomBias.name }}
    </h1>
  </div>
</template>
