<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import router from '@/router'
const routes = useRoute()
const { t } = useI18n()
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 py-2">
    <button @click="router.back()" v-if="routes.path !== '/'" class="cursor-pointer">
      <i
        aria-hidden="true"
        class="group-hover:-translate-x-1 transition-transform text-heavy-metal-950 text-2xl"
        >←</i
      >
      <span class="underline">{{ t('buttons.back') }}</span>
    </button>
  </section>
</template>
