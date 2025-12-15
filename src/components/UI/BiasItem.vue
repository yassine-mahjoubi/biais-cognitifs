<script lang="ts" setup>
import type { Bias } from '../../type/Bias'

const props = defineProps<{
  bias: Bias
}>()
</script>

<template>
  <h2 class="text-2xl">{{ bias.name }}</h2>
  <p class="">{{ bias.description }}</p>
</template>
