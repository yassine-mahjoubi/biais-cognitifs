<script setup lang="ts">
import FooterInfos from './components/Layout/FooterInfos.vue'
import MenuNavigation from './components/Layout/MenuNavigation.vue'
</script>
<template>
  <div class="min-h-screen bg-heavy-metal-50 flex flex-col">
    <menu-navigation />
    <main class="flex-1">
      <RouterView />
    </main>
    <FooterInfos />
  </div>
</template>
