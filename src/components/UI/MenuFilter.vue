<script lang="ts" setup>
import { useBiasStore } from '@/stores/bias'
import { storeToRefs } from 'pinia'
const store = useBiasStore()
const { typesSort, sortedBiases } = storeToRefs(store)
</script>

<template>
  <ul>
    <li>
      <button
        @click="typesSort = 'category'"
        class="bg-heavy-metal-700 text-heavy-metal-50 rounded-2xl p-2 cursor-pointer mb-2"
      >
        category
      </button>
    </li>
    <li>
      <button
        @click="typesSort = 'order'"
        class="bg-heavy-metal-700 text-heavy-metal-50 rounded-2xl p-2 cursor-pointer mb-2"
      >
        order
      </button>
    </li>
  </ul>
</template>
