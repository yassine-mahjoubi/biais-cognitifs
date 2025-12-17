<script lang="ts" setup>
import type { Bias } from '../../type/Bias'

defineProps<{
  bias: Bias
}>()
</script>

<template>
  <div class="bg-heavy-metal-700 text-white p-5 border-e-heavy-metal-950">
    <h2 class="text-2xl">{{ bias.name }}</h2>
    <p class="">{{ bias.description }}</p>
    <svg></svg>
  </div>
</template>
