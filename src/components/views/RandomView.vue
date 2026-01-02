<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useBiasStore } from '@/stores/bias'
import BiaisLayout from '../Layout/BiaisLayout.vue'

const store = useBiasStore()
//storeToRefs keep recativity alive
const { currentSelectedBias } = storeToRefs(store)
const { selectedBiasID, fetchBias } = store
onMounted(async () => {
  await fetchBias()
  selectedBiasID()
})
</script>
<template>
  <BiaisLayout>
    <template #name>{{ currentSelectedBias?.name }}</template>
    <template #description>{{ currentSelectedBias?.description }}</template>
    <template #action>
      <button
        @click="selectedBiasID"
        class="group w-full sm:w-auto px-10 py-4 bg-heavy-metal-700 cursor-pointer hover:bg-heavy-metal-800 text-white font-medium rounded-2xl shadow-md hover:shadow-lg mx-auto block"
      >
        <span class="flex items-center justify-center gap-3">
          <svg
            class="w-5 h-5 group-hover:rotate-180 transition-transform duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {{ t('buttons.random_bias') }}
        </span>
      </button>
    </template>
  </BiaisLayout>
</template>
