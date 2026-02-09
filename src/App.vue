<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
import { useHead } from '@unhead/vue'
import FooterInfos from './components/Layout/FooterInfos.vue'
import MenuNavigation from './components/Layout/MenuNavigation.vue'
import NavBreadcrumb from './components/UI/NavBreadcrumb.vue'

useHead({
  htmlAttrs: {
    lang: locale,
  },
})
</script>
<template>
  <div class="min-h-screen bg-heavy-metal-50 flex flex-col">
    <menu-navigation />
    <main class="flex-1 justify-center items-center">
      <NavBreadcrumb />
      <RouterView />
    </main>
    <FooterInfos />
  </div>
</template>
