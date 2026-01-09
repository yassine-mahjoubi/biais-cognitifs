<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { ref, computed } from 'vue'

import type { Bias } from '../../type/Bias'
import BiasItem from './BiasItem.vue'
import SkeletonCard from './SkeletonCard.vue'

const propos = defineProps<{
  biases: Bias[]
  loading: boolean
}>()
const itemsByPage = ref<number>(0)
const nextPage = () => {
  itemsByPage.value += 10
}
const previousPage = () => {
  itemsByPage.value -= 10
}
const displayedBiases = computed(() => {
  return propos.biases.slice(itemsByPage.value, itemsByPage.value + 10)
})
</script>
<template>
  <section aria-label="paginaation">
    <ul class="mb-5 flex justify-between flex-row-reverse">
      <li>
        <button
          v-if="itemsByPage < biases.length - 10"
          @click="nextPage()"
          class="bg-heavy-metal-950 text-heavy-metal-200 rounded-2xl cursor-pointer px-4 py-2 inline-flex items-center gap-1 group"
        >
          <span> {{ t('buttons.next') }} </span>
          <i aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</i>
        </button>
      </li>
      <li>
        <button
          v-if="itemsByPage > 0"
          @click="previousPage()"
          class="bg-heavy-metal-950 text-heavy-metal-200 rounded-2xl cursor-pointer px-4 py-2 inline-flex group"
        >
          <i aria-hidden="true" class="group-hover:-translate-x-1 transition-transform">←</i>
          <span> {{ t('buttons.previous') }} </span>
        </button>
      </li>
    </ul>
  </section>
  <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <template v-if="loading">
      <div v-for="n in 10" :key="`skeleton-${n}`">
        <SkeletonCard />
      </div>
    </template>
    <template v-else>
      <li v-for="(bias, index) in displayedBiases" :key="bias.id" :id="bias.id">
        <BiasItem :bias="bias" :index="index + itemsByPage" />
      </li>
    </template>
  </ul>
</template>
