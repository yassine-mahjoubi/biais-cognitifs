<script setup lang="ts">
import { useBiasStore } from '@/stores/bias'
import { storeToRefs } from 'pinia'

const store = useBiasStore()
const { biasToFind } = storeToRefs(store)
</script>
<template>
  <div class="relative w-full">
    <svg
      class="absolute left-3 top-1/2 transform -translate-y-1/2 text-heavy-metal-400 pointer-events-none"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
    <input
      v-model.trim="biasToFind"
      type="search"
      name="search"
      id="search"
      placeholder="chercher un bias..."
      aria-label="chercher un biais"
      class="w-full pl-10 pr-10 py-2 bg-heavy-metal-700 text-white placeholder-heavy-metal-400 border border-heavy-metal-600 rounded-md focus:outline-none focus:ring-2 focus:ring-heavy-metal-500 focus:border-transparent transition-all duration-200"
    />
    <!-- Bouton clear (X) -->
    <button
      v-if="biasToFind"
      @click="store.resetSearch()"
      type="button"
      class="absolute right-2 top-1/2 transform -translate-y-1/2 text-heavy-metal-400 hover:text-white transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-heavy-metal-500"
      aria-label="Effacer la recherche"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
</template>
