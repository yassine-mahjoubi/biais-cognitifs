<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
const { t } = useI18n()
import SwitchLanguage from '../UI/SwitchLanguage.vue'
import { useTemplateRef } from 'vue'
const navLinkClass = 'text-heavy-metal-300 hover:text-heavy-metal-50 transition-colors'
const navLinkActiveClass = 'font-bold text-heavy-metal-50 border-b-2 border-heavy-metal-50 pb-1'
const mobile = useTemplateRef('mobile')
const showMenu = ref<boolean>(false)
const handleNavMobile = () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <div
    class="sticky top-0 z-50 bg-heavy-metal-900 backdrop-blur-md border-b-4 border-heavy-metal-600 px-8 py-4 flex md:flex items-center justify-between"
  >
    <button class="md:hidden w-10 h-10" @click="handleNavMobile" ref="mobile">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
        class="w-6 h-6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
      <span class="sr-only">{{
        showMenu === true
          ? t('common.interface.mobile_menu.close')
          : t('common.interface.mobile_menu.open')
      }}</span>
    </button>
    <nav
      aria-label="Menu principal"
      role="navigation"
      class="md:flex md:flex-row gap-6 flex-col"
      :class="showMenu ? 'flex' : 'hidden'"
    >
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
