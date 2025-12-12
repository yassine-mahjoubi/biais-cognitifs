<script lang="ts" setup>
import type { Bias } from '../../type/Bias'

const props = defineProps<{
  bias: Bias
}>()
</script>

<template>
  <h2>{{ bias.name }}</h2>
  <p>{{ bias.description }}</p>
</template>
