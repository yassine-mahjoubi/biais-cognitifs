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
  <nav aria-label="pagianation" role="navigation">
    <ul class="mb-5 flex justify-center mt-5">
      <li>
        <a href="#" v-if="props.currentPage > 1" @click="previousPage()" class="">
          <i aria-hidden="true" class="group-hover:-translate-x-1 transition-transform">←</i>
          <span> {{ t('buttons.previous') }} </span>
        </a>
      </li>
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
      <li>
        <a href="#" v-if="props.currentPage < totalPages" @click="nextPage()" class="">
          <span> {{ t('buttons.next') }} </span>
          <i aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</i>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style lang="css" scoped>
a {
  padding: 5px;
  border: 1px solid var(--bg-heavy-metal-800);
  cursor: pointer;
}
</style>
