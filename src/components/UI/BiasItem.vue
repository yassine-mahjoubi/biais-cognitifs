<script lang="ts" setup>
import { shallowRef } from 'vue'
import CardStyleDark from './CardStyleDark.vue'
import CardStylelight from './CardStyleLight.vue'
import type { Bias } from '../../type/Bias'

defineProps<{
  bias: Bias
  index: number
}>()
const styleActif = shallowRef(CardStyleDark)
</script>

<template>
  <component :is="styleActif" :bias :index></component>
</template>
