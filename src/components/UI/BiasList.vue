<script lang="ts" setup>
import type { Bias } from '../../type/Bias'
import BiasItem from './BiasItem.vue'
defineProps<{
  biases: Bias[]
}>()
</script>

<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 list-decimal">
    <li v-for="bias in biases" :key="bias.id" :id="bias.id">
      <BiasItem :bias="bias" />
    </li>
  </ul>
</template>
