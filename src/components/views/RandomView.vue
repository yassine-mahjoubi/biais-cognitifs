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
  <div class="flex flex-col items-center justify-center p-8">
    <div class="max-w-4xl w-full space-y-8">
      <template v-if="randomBias">
        <!-- Titre -->
        <h1
          class="text-3xl md:text-4xl font-bold text-heavy-metal-900 mb-2 animate-fade-in tracking-tight"
        >
          {{ randomBias.name }}
        </h1>

        <!-- Description -->

        <p class="text-heavy-metal-800 text-lg leading-relaxed">
          {{ randomBias.description }}
        </p>
      </template>

      <!-- Bouton -->
      <button
        @click="selectRandomBias"
        class="group w-full sm:w-auto px-10 py-4 bg-heavy-metal-700 cursor-pointer hover:bg-heavy-metal-800 text-white font-medium rounded-2xl shadow-md hover:shadow-lg mx-auto block"
      >
        <span class="flex items-center justify-center gap-3">
          <svg
            class="w-5 h-5 group-hover:rotate-180 transition-transform duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Biais aléatoire
        </span>
      </button>
    </div>
  </div>
</template>
<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
</style>
