<script lang="ts" setup>
import BiasList from '@/components/UI/BiasList.vue'
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

import { useBiasStore } from '@/stores/bias'
import type { Bias } from '@/type/Bias'

const store = useBiasStore()
//storeToRefs keep recativity alive
const { biases, loading } = storeToRefs(store)
const { fetchBias, filtredByCategory } = store
const route = useRoute()
onMounted(async () => {
  await fetchBias()
})

const BiasesFiltredByCategory = computed(() => {
  let filtered: Bias[]
  if (route.query.category) {
    const category = route.query.category as string
    filtered = filtredByCategory(category)

    return filtered
  }

  return biases.value
})
</script>
<template>
  <div class="mt-4 max-w-7xl mx-auto px-4 py-8">
    <p v-if="loading">Loading..</p>
    <template v-else>
      <!-- to do <h1>{{ $route.query.name }}</h1> -->
      <BiasList :biases="BiasesFiltredByCategory" />
    </template>
  </div>
</template>
