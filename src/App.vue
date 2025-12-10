<script setup lang="ts">
import { getApiResponse } from '@/scripts/services.ts'
import type { BiasListAndCategories, Bias, Category } from './type/Bias'

import { ref, shallowRef, onMounted } from 'vue'

const apiResponse = shallowRef<BiasListAndCategories | null>(null)

const biases = ref<Bias[]>([])
const categories = ref<Category[]>([])

onMounted(async () => {
  apiResponse.value = await getApiResponse()
  if (apiResponse.value) {
    biases.value = apiResponse.value.list_biases
    categories.value = apiResponse.value.categories_biases
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <li
          v-for="bias in biases"
          :key="bias.id"
          class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          {{ bias.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
