<script lang="ts" setup>
import { computed } from 'vue'
import type { Bias } from '../../type/Bias'
import BiasItem from './BiasItem.vue'
import { useBiasStore } from '@/stores/bias'
import { storeToRefs } from 'pinia'

import { useRoute } from 'vue-router'
const route = useRoute()
const store = useBiasStore()
const { typesSort, sortedBiases } = storeToRefs(store)

const props = defineProps<{
  biases: Bias[]
}>()

const limitList = computed(() => (route.query.category ? props.biases : sortedBiases.value))
</script>
<template>
  <button
    @click="typesSort = 'category'"
    class="bg-heavy-metal-700 text-heavy-metal-50 rounded-2xl p-2 cursor-pointer mb-2"
  >
    category
  </button>
  <button
    @click="typesSort = 'order'"
    class="bg-heavy-metal-700 text-heavy-metal-50 rounded-2xl p-2 cursor-pointer mb-2"
  >
    order
  </button>
  <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <li v-for="(bias, index) in limitList" :key="bias.id" :id="bias.id">
      <BiasItem :bias="bias" :index="index" />
    </li>
  </ul>
</template>
