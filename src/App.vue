<script setup lang="ts">
import Menu from './components/Layout/Menu.vue'
</script>
<template>
  <div class="min-h-screen bg-heavy-metal-50">
    <Menu />
    <main>
      <RouterView />
    </main>
  </div>
</template>
