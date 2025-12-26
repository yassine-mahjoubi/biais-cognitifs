<script lang="ts" setup>
import { useBiasStore } from '@/stores/bias'
import type { Filter } from '@/type/Bias'
import { storeToRefs } from 'pinia'
const store = useBiasStore()
const { typesSort } = storeToRefs(store)
const filters = <Filter[]>['order', 'category']

const updateFilter = (filter: Filter) => (typesSort.value = filter)
</script>

<template>
  <ul class="bg-heavy-metal-400 text-heavy-metal-900 p-1 mb-4 flex" role="group">
    <li class="border" v-for="filter in filters" :key="filter">
      <button
        @click="updateFilter(filter)"
        class="p-2 cursor-pointer w-full"
        :class="typesSort === filter ? 'bg-heavy-metal-700 text-heavy-metal-100' : ''"
        :aria-selected="typesSort === filter ? true : false"
        :title="typesSort === filter ? 'Filter order selected' : ''"
      >
        {{ filter }}
      </button>
    </li>
  </ul>
</template>
