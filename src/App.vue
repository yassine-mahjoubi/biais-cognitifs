<script setup lang="ts">
import Menu from './components/Layout/Menu.vue'
</script>
<template>
  <div class="min-h-screen bg-green-900">
    <Menu />
    <main>
      <RouterView />
    </main>
  </div>
</template>
