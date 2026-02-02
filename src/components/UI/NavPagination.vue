<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { computed } from 'vue'
import type { Bias } from '../../type/Bias'

const props = defineProps<{
  biases: Bias[]
  paginateBy: number
  currentPage: number
}>()
const totalPages = computed(() => Math.ceil(props.biases.length / props.paginateBy))

const emit = defineEmits<{
  'current-page': [current: number]
}>()
const nextPage = () => {
  emit('current-page', props.currentPage + 1)
}
const previousPage = () => {
  emit('current-page', props.currentPage - 1)
}
const goToPage = (page: number) => {
  emit('current-page', page)
}
</script>

<template>
  <nav aria-label="pagianation" role="navigation" class="mb-5 flex justify-between mt-5">
    <button
      @click="previousPage()"
      :aria-disabled="props.currentPage <= 1"
      :disabled="props.currentPage <= 1"
      class="aria-disabled:cursor-not-allowed aria-disabled:bg-transparent aria-disabled:text-heavy-metal-800 aria-disabled:shadow-none px-3 py-2 bg-heavy-metal-700 cursor-pointer hover:bg-heavy-metal-800 text-white font-medium rounded-2xl shadow-md hover:shadow-lg"
    >
      <i aria-hidden="true" class="group-hover:-translate-x-1 transition-transform">←</i>
      {{ t('buttons.previous') }}
    </button>
    <ul class="flex gap-2">
      <li v-for="page in totalPages" :key="`id-${page}`">
        <a
          :href="`?page=${page}`"
          @click.prevent="goToPage(page)"
          :aria-current="props.currentPage === page ? 'page' : undefined"
          :title="`page ${page}`"
          class=""
          :class="props.currentPage === page ? 'bg-heavy-metal-800 text-heavy-metal-100' : ''"
          >{{ page }}
        </a>
      </li>
    </ul>

    <button
      @click="nextPage()"
      class="aria-disabled:cursor-not-allowed aria-disabled:bg-transparent aria-disabled:text-heavy-metal-800 aria-disabled:shadow-none px-3 py-2 bg-heavy-metal-700 cursor-pointer hover:bg-heavy-metal-800 text-white font-medium rounded-2xl shadow-md hover:shadow-lg"
      :aria-disabled="props.currentPage >= totalPages"
      :disabled="props.currentPage >= totalPages"
    >
      {{ t('buttons.next') }}
      <i aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</i>
    </button>
  </nav>
</template>
<style lang="css" scoped>
a {
  padding: 5px;
  border: 1px solid var(--bg-heavy-metal-800);
  cursor: pointer;
}
</style>
