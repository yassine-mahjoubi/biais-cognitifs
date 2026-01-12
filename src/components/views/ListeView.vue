<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useHead } from '@unhead/vue'
useHead({
  title: t('seo.bias_list.title'),
  meta: [
    {
      name: 'description',
      content: t('seo.bias_list.description'),
    },
  ],
})
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useBiasStore } from '@/stores/bias'
import BiasList from '@/components/UI/BiasList.vue'
import MenuFilter from '../UI/MenuFilter.vue'

const store = useBiasStore()
//storeToRefs keep recativity alive
const { loading, filteredAndSortedBiases } = storeToRefs(store)
const { fetchBias } = store

onMounted(async () => {
  setTimeout(async () => {
    await fetchBias()
  }, 1000)
})
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <menu-filter />
    <BiasList :biases="filteredAndSortedBiases" :loading="loading" />
  </div>
</template>
