<script lang="ts" setup>
import type { Bias } from '../../type/Bias'

defineProps<{
  bias: Bias
  index: number
}>()
</script>

<template>
  <div
    class="bg-white border-l-8 border-heavy-metal-600 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col"
  >
    <span
      class="absolute -top-3 right-4 px-4 py-1 bg-heavy-metal-300 text-heavy-metal-950 text-sm font-bold rounded-full"
    >
      {{ bias.category_name }}
    </span>
    <h3 class="text-2xl font-bold text-heavy-metal-900 mt-2 mb-4 min-h-14 flex items-center">
      {{ bias.name }}
    </h3>
    <p class="text-heavy-metal-700 leading-relaxed grow mb-4">
      {{ bias.description }}
    </p>
    <a
      :href="bias.url"
      target="_blank"
      title="Plus d'infos sur le biais sur Cognitive Labs - nouvelle fenêtre"
      rel="noopener"
      class="text-heavy-metal-600 hover:text-heavy-metal-800 font-medium inline-flex items-center gap-1 self-end group"
    >
      Plus d'infos
      <i aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</i>
    </a>
  </div>
</template>
