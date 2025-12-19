<script lang="ts" setup>
import type { Bias } from '../../type/Bias'

defineProps<{
  bias: Bias
  index: number
  id: string
}>()
</script>

<template>
  <div
    class="bg-linear-to-br from-heavy-metal-600 to-heavy-metal-800 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all relative h-full flex flex-col overflow-hidden"
  >
    <div
      class="absolute top-0 right-0 w-32 h-32 bg-heavy-metal-400 opacity-10 rounded-full -mr-16 -mt-16"
    ></div>
    <span
      class="absolute px-3 py-1 bg-heavy-metal-400 text-heavy-metal-950 text-xs font-bold rounded-md"
      >{{ bias.category_name }}</span
    >
    <span class="absolute top-4 right-4">
      {{ index + 1 }}
    </span>
    <h2 class="text-2xl font-bold text-white mt-8 mb-4 min-h-14 flex items-center relative z-10">
      {{ bias.name }}
    </h2>
    <p class="text-heavy-metal-100 leading-relaxed grow mb-4 relative z-10 line-clamp-3">
      {{ bias.description }}
    </p>
    <RouterLink :to="{ name: 'BiasDetail', params: { id: bias.id } }"> lire la suite </RouterLink>

    <a
      :href="bias.url"
      target="_blank"
      title="Plus d'infos sur le biais sur Cognitive Labs - nouvelle fenêtre"
      rel="noopener"
      class="text-heavy-metal-200 hover:text-white font-medium inline-flex items-center gap-1 self-end group relative z-10"
    >
      Plus d'infos
      <i aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</i>
    </a>
  </div>
</template>
