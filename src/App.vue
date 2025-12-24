<script setup lang="ts">
import MenuNavigation from './components/Layout/MenuNavigation.vue'
</script>
<template>
  <div class="min-h-screen bg-heavy-metal-50">
    <menu-navigation />
    <main>
      <RouterView />
    </main>
  </div>
</template>
