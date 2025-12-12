<script setup lang="ts">
import { getApiResponse } from '@/scripts/services.ts'
import type { Bias, Category } from './type/Bias'

import { shallowRef, onMounted } from 'vue'

import BiasList from './components/UI/BiasList.vue'

const biases = shallowRef<Bias[]>([])
const categories = shallowRef<Category[]>([])

onMounted(async () => {
  const response = await getApiResponse()
  if (response) {
    biases.value = response.list_biases
    categories.value = response.categories_biases
  }
})
</script>
<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <BiasList :biases="biases" />
    </div>
  </div>
</template>

<style scoped></style>
