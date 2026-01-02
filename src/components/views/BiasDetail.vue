<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref, onMounted } from 'vue'
import type { Bias } from '@/type/Bias'
import { useBiasStore } from '@/stores/bias'
import BiaisLayout from '../Layout/BiaisLayout.vue'

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
  <BiaisLayout>
    <template #name>{{ selectedBias?.name }}</template>
    <template #description>{{ selectedBias?.description }}</template>
    <template #action>
      <a
        :href="selectedBias?.url"
        target="_blank"
        :title="t('buttons.external_link', { biasName: selectedBias?.name })"
        rel="noopener"
        class="text-heavy-metal-900 hover:text-heavy-metal-800 font-medium inline-flex items-center gap-1 self-end group relative z-10"
      >
        <span class="underline">{{ t('buttons.see_more') }}</span>
        <i aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</i>
      </a>
    </template>
  </BiaisLayout>
</template>
