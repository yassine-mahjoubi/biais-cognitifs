<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { computed } from 'vue'
import SearchBias from './SearchBias.vue'
import { useBiasStore } from '@/stores/bias'

import type { Filter } from '@/type/Bias'
import { storeToRefs } from 'pinia'

const store = useBiasStore()

const { typesSort, biasToFind, categories } = storeToRefs(store)
const filters = <Filter[]>['order']
const filterCategory = computed(() => categories.value.map((cat) => cat.id))
const updateFilter = (filter: Filter) => {
  typesSort.value = filter
}

const handleReset = () => {
  store.resetSearch()
  typesSort.value = 'order'
}
const showReset = computed(() => biasToFind.value.length > 3)

const titleFilterCTA = (filter: Filter) => {
  return typesSort.value === filter
    ? `${t('filter.aria_filter_selected', { filter: filter })}`
    : `${t('filter.sort_by') + ' ' + t(`filter.type.${filter}`)}`
}
</script>

<template>
  <div class="bg-linear-to-br from-heavy-metal-800 to-heavy-metal-900 rounded-xl shadow-xl mb-4">
    <!-- Barre de recherche mobile uniquement -->
    <div class="p-3 lg:hidden">
      <div class="flex flex-col sm:flex-row gap-2">
        <SearchBias class="flex-1" />
        <button
          v-if="showReset"
          @click="handleReset"
          :aria-label="t('filter.aria_reset_list')"
          class="w-full sm:w-auto px-5 py-2.5 bg-heavy-metal-700 text-heavy-metal-300 border border-heavy-metal-600 rounded-lg hover:bg-heavy-metal-600 hover:text-white transition-all font-medium flex items-center justify-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {{ t('filter.reset_button') }}
        </button>
      </div>
    </div>

    <!-- Contenu principal responsive -->
    <div class="p-4 lg:p-5">
      <div class="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">
        <!-- Section Tri (un seul bloc, styles adaptatifs) -->
        <div
          class="bg-heavy-metal-900 lg:bg-transparent rounded-lg lg:rounded-none p-4 lg:p-0 lg:flex lg:items-center lg:gap-2 lg:shrink-0"
        >
          <!-- Label adaptatif (h3 mobile, span desktop) -->
          <div
            class="text-heavy-metal-300 lg:text-heavy-metal-400 text-sm lg:text-xs font-semibold lg:font-semibold mb-3 lg:mb-0 flex items-center gap-2 lg:uppercase lg:tracking-wide"
          >
            <svg class="w-4 h-4 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
            {{ t('filter.sort_by') }}<span class="hidden lg:inline">:</span>
          </div>

          <!-- Boutons de tri -->
          <div
            class="flex flex-wrap lg:inline-flex lg:rounded-lg lg:bg-heavy-metal-950 lg:p-1 gap-2 lg:gap-0"
          >
            <button
              v-for="filter in filters"
              :key="filter"
              @click="updateFilter(filter)"
              :class="[
                'px-4 py-2 lg:px-3 lg:py-1.5 rounded-lg lg:rounded-md text-sm lg:text-xs font-medium transition-all',
                typesSort === filter
                  ? 'bg-heavy-metal-600 text-white shadow-md lg:shadow-sm cursor-not-allowed'
                  : 'bg-heavy-metal-700 lg:bg-transparent text-heavy-metal-300 lg:text-heavy-metal-400 hover:bg-heavy-metal-600 lg:hover:bg-heavy-metal-700 hover:text-white border border-heavy-metal-600 lg:border-0',
              ]"
              :disabled="typesSort === filter"
              :aria-pressed="typesSort === filter"
              :title="titleFilterCTA(filter)"
            >
              {{ t(`filter.type.${filter}`) }}
            </button>
          </div>
        </div>

        <!-- Divider -->
        <div class="hidden lg:block w-px h-8 bg-heavy-metal-700"></div>

        <!-- Section Catégories (un seul bloc, styles adaptatifs) -->
        <div
          class="bg-heavy-metal-900 lg:bg-transparent rounded-lg lg:rounded-none p-4 lg:p-0 lg:flex lg:items-center lg:gap-2 lg:shrink-0"
        >
          <!-- Label adaptatif -->
          <div
            class="text-heavy-metal-300 lg:text-heavy-metal-400 text-sm lg:text-xs font-semibold mb-3 lg:mb-0 flex items-center gap-2 lg:uppercase lg:tracking-wide"
          >
            <svg class="w-4 h-4 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            {{ t('filter.type.category') }}<span class="hidden lg:inline">:</span>
          </div>

          <!-- Boutons catégories -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="filter in filterCategory"
              :key="filter"
              @click="updateFilter(filter)"
              :class="[
                'px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap',
                typesSort === filter
                  ? 'bg-heavy-metal-600 text-white shadow-sm cursor-not-allowed ring-2 ring-heavy-metal-500 ring-offset-2 ring-offset-heavy-metal-900 lg:ring-0 lg:ring-offset-0 lg:border-2 lg:border-heavy-metal-500'
                  : 'bg-heavy-metal-700 text-heavy-metal-300 hover:bg-heavy-metal-600 hover:text-white',
              ]"
              :disabled="typesSort === filter"
              :aria-pressed="typesSort === filter"
              :title="titleFilterCTA(filter)"
            >
              {{ t(`filter.type.${filter}`) }}
            </button>
          </div>
        </div>

        <!-- Divider -->
        <br class="hidden lg:block w-px h-8 bg-heavy-metal-700" />

        <!-- Search desktop -->
        <div class="hidden lg:flex gap-2 flex-1">
          <SearchBias class="flex-1" />
          <button
            v-if="showReset"
            @click="handleReset"
            :aria-label="t('filter.aria_reset_list')"
            class="px-4 py-2 bg-heavy-metal-700 text-heavy-metal-300 border border-heavy-metal-600 rounded-lg hover:bg-heavy-metal-600 hover:text-white transition-all text-sm font-medium whitespace-nowrap flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            {{ t('filter.reset_button') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
