<script lang="ts" setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useBiasStore } from '@/stores/bias'

const store = useBiasStore()
//storeToRefs keep recativity alive
const { loading, categories } = storeToRefs(store)
const { fetchBias } = store

onMounted(async () => {
  await fetchBias()
})
</script>
<template>
  <div v-if="loading">loading....</div>
  <div v-else class="mt-4 max-w-7xl mx-auto px-4 py-8">
    <ul class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-8">
      <li v-for="cat in categories" :key="cat.id">
        <div
          class="bg-white border-l-8 border-heavy-metal-600 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col"
        >
          <span class="text-heavy-metal-400 text-1xl font-bold">
            {{ cat.count }} Biais de la catégorie :</span
          >
          <h3 class="text-3xl font-bold text-heavy-metal-900 mt-2 mb-4 min-h-14 flex items-center">
            {{ cat.name }}
          </h3>
          <p class="text-heavy-metal-700 leading-relaxed grow mb-4">
            {{ cat.description }}
          </p>
          <a
            href="/"
            target="_blank"
            title="Plus d'infos sur le biais sur Cognitive Labs - nouvelle fenêtre"
            rel="noopener"
            class="text-heavy-metal-600 hover:text-heavy-metal-800 font-medium inline-flex items-center gap-1 self-end group"
          >
            voir les {{ cat.count }} bias
            <i aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</i>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
