<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { computed } from 'vue'
import SearchBias from './SearchBias.vue'
import { useBiasStore } from '@/stores/bias'
import type { Filter } from '@/type/Bias'
import { storeToRefs } from 'pinia'

const store = useBiasStore()
const { typesSort, biasToFind } = storeToRefs(store)
const filters = <Filter[]>['order', 'category']

const updateFilter = (filter: Filter) => (typesSort.value = filter)

const handleReset = () => {
  store.resetSearch()
}
const showReset = computed(() => biasToFind.value.length > 3)
</script>

<template>
  <div class="bg-linear-to-r from-heavy-metal-800 to-heavy-metal-900 rounded-lg shadow-lg p-3 mb-4">
    <div class="flex flex-wrap gap-3 items-center">
      <!-- Section Filtres -->
      <div class="flex gap-2 items-center">
        <span class="text-heavy-metal-400 text-sm font-medium mr-1">Trier par:</span>

        <button
          v-for="filter in filters"
          :key="filter"
          @click="updateFilter(filter)"
          class="p-2 cursor-pointer w-full"
          :class="[
            'px-4 py-2 rounded-md font-medium transition-all duration-200',
            typesSort === filter
              ? 'bg-heavy-metal-500 text-white shadow-md'
              : 'bg-heavy-metal-700 text-heavy-metal-300 hover:bg-heavy-metal-600',
          ]"
          :aria-pressed="typesSort === filter"
          :aria-selected="typesSort === filter ? true : false"
          :title="typesSort === filter ? `Filter ${filter} selected` : ''"
        >
          {{ filter }}
        </button>
      </div>
      <!-- Séparateur visuel -->
      <div class="hidden sm:block h-8 w-px bg-heavy-metal-600"></div>
      <!-- Section Recherche -->
      <div class="flex-1 min-w-[200px]">
        <SearchBias />
      </div>
      <div>
        <button
          v-if="showReset"
          @click="handleReset"
          aria-label="reset input et afficher la liste complète"
          class="px-4 py-2 bg-heavy-metal-700 text-heavy-metal-300 border border-heavy-metal-600 rounded-md hover:bg-heavy-metal-600 hover:text-white transition-all duration-200 font-medium"
        >
          {{ t('filter.reset_button') }}
        </button>
      </div>
    </div>
  </div>
</template>
