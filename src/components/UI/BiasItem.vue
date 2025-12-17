<script lang="ts" setup>
import type { Bias } from '../../type/Bias'

defineProps<{
  bias: Bias
}>()
</script>

<template>
  <div
    class="bg-heavy-metal-700 text-white p-5 border-heavy-metal-950 relative border-b-6 h-full flex flex-col justify-between border-2 shadow-[2px_2px_0_0]"
  >
    <span class="test absolute -right-3 -top-3 p-2 bg-heavy-metal-400 text-heavy-metal-950">{{
      bias.category_name
    }}</span>
    <h2 class="text-3xl mb-4">{{ bias.name }}</h2>
    <p class="">{{ bias.description }}</p>
    <a
      :href="bias.url"
      target="_blank"
      title="lien externe"
      class="text-heavy-metal-950 self-center mt-2"
      >lire plus sur Cognitive Labs
      <svg
        aria-hidden="true"
        class="w-4 h-4 inline"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </a>
  </div>
</template>
<style scoped>
.test {
  line-height: var(--font-line-ui);
  text-orientation: sideways;
  transform: rotate(180deg);
  white-space: nowrap;
  writing-mode: vertical-rl;
}
</style>
