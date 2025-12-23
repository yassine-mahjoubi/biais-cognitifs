<script setup lang="ts">
const navLinkClass = 'text-heavy-metal-300 hover:text-heavy-metal-50 transition-colors'
const navLinkActiveClass = 'font-bold text-heavy-metal-50 border-b-2 border-heavy-metal-50 pb-1'
</script>

<template>
  <nav
    aria-label="Menu principal"
    role="navigation"
    class="sticky top-0 z-50 bg-heavy-metal-900 backdrop-blur-md border-b-4 border-heavy-metal-600 px-8 py-4 flex gap-6"
  >
    <RouterLink to="/" :class="navLinkClass" :active-class="navLinkActiveClass"> Home </RouterLink>
    <RouterLink to="/categories" :class="navLinkClass" :active-class="navLinkActiveClass">
      Categories de biais
    </RouterLink>
    <RouterLink to="/liste" :class="navLinkClass" :active-class="navLinkActiveClass">
      Liste de biais
    </RouterLink>
  </nav>
</template>
