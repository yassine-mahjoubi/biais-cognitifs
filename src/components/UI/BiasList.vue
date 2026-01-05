<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import type { Bias } from '../../type/Bias'
import BiasItem from './BiasItem.vue'
import SkeletonCard from './SkeletonCard.vue'
defineProps<{
  biases: Bias[]
  loading: boolean
}>()
</script>
<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <template v-if="loading">
      <div v-for="n in 12" :key="`skeleton-${n}`">
        <SkeletonCard />
      </div>
    </template>
    <template v-else>
      <li v-for="(bias, index) in biases" :key="bias.id" :id="bias.id">
        <BiasItem :bias="bias" :index="index" />
      </li>
    </template>
  </ul>
</template>
