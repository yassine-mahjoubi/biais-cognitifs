<script lang="ts" setup>
import { useBiasStore } from '@/stores/bias'
import type { Filter } from '@/type/Bias'
import { storeToRefs } from 'pinia'
const store = useBiasStore()
const { typesSort } = storeToRefs(store)
const filters = <Filter[]>['order', 'category', 'date']

const updateFilter = (filter: Filter) => (typesSort.value = filter)
</script>

<template>
  <div class="bg-heavy-metal-400 text-heavy-metal-900 p-1 inline-flex mb-2 ml-auto" role="group">
    <ul>
      <li class="border" v-for="filter in filters" :key="filter">
        <button
          @click="updateFilter(filter)"
          class="p-2 cursor-pointer"
          :class="typesSort === filter ? 'bg-heavy-metal-700 text-heavy-metal-100' : ''"
          :aria-selected="typesSort === filter ? true : false"
          :title="typesSort === filter ? 'Filter order selected' : ''"
        >
          {{ filter }}
        </button>
      </li>
    </ul>
  </div>
</template>
