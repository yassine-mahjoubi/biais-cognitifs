<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { Bias } from '@/type/Bias'
import { useBiasStore } from '@/stores/bias'

const store = useBiasStore()
const { fetchBias, getBiasBySlug } = store
const selectedBias = ref<Bias | undefined>(undefined)

const propos = defineProps<{
  slug: string
}>()

onMounted(async () => {
  await fetchBias()
  selectedBias.value = getBiasBySlug(propos.slug)
})
</script>

<template>
  <div>bias: {{ selectedBias?.description }}</div>
</template>
