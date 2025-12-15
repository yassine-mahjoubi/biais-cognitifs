<script lang="ts" setup>
import type { Bias } from '../../type/Bias'
import BiasItem from './BiasItem.vue'
const props = defineProps<{
  biases: Bias[]
}>()
</script>

<template>
  <ol class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 list-decimal">
    <li v-for="bias in biases" :key="bias.id" :id="bias.id" class="bg-green-950 text-white p-5">
      <BiasItem :bias="bias" />
    </li>
  </ol>
</template>
