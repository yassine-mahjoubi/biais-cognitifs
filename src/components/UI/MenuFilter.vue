<script lang="ts" setup>
import { useBiasStore } from '@/stores/bias'
import type { Filter } from '@/type/Bias'
import { storeToRefs } from 'pinia'
const store = useBiasStore()
const { typesSort } = storeToRefs(store)
const handelFilter = (filter: Filter) => {
  typesSort.value = filter
}
</script>

<template>
  <ul>
    <li>
      <button
        @click="handelFilter('category')"
        class="bg-heavy-metal-700 text-heavy-metal-50 rounded-2xl p-2 cursor-pointer mb-2"
      >
        category
      </button>
    </li>
    <li>
      <button
        @click="handelFilter('order')"
        class="bg-heavy-metal-700 text-heavy-metal-50 rounded-2xl p-2 cursor-pointer mb-2"
      >
        order
      </button>
    </li>
  </ul>
</template>
