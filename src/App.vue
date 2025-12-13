<script setup lang="ts"></script>
<template>
  <div class="min-h-screen bg-gray-100">
    <nav>
      <RouterLink to="/">Home |</RouterLink>
      <RouterLink to="/liste">Liste de biais</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
