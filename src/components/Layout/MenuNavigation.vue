<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import SwitchLanguage from '../UI/SwitchLanguage.vue'
const navLinkClass = 'text-heavy-metal-300 hover:text-heavy-metal-50 transition-colors'
const navLinkActiveClass = 'font-bold text-heavy-metal-50 border-b-2 border-heavy-metal-50 pb-1'
</script>

<template>
  <div
    class="sticky top-0 z-50 bg-heavy-metal-900 backdrop-blur-md border-b-4 border-heavy-metal-600 px-8 py-4 flex items-center justify-between"
  >
    <nav aria-label="Menu principal" role="navigation" class="flex gap-6">
      <RouterLink to="/" :class="navLinkClass" :active-class="navLinkActiveClass">
        {{ t('nav.home') }}
      </RouterLink>
      <RouterLink to="/liste" :class="navLinkClass" :active-class="navLinkActiveClass">
        {{ t('nav.bias_list') }}
      </RouterLink>
      <RouterLink to="/about" :class="navLinkClass" :active-class="navLinkActiveClass">
        {{ t('nav.about') }}
      </RouterLink>
    </nav>
    <switch-language />
  </div>
</template>
