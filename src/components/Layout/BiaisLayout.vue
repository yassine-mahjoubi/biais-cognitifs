<script lang="ts"></script>
<template>
  <div class="flex flex-col items-center justify-center p-8">
    <div class="max-w-4xl w-full space-y-8">
      <h1
        class="text-3xl md:text-4xl font-bold text-heavy-metal-900 mb-2 animate-fade-in tracking-tight"
      >
        <!-- {{ randomBias.name }} -->
        <slot name="name"></slot>
      </h1>
      <p class="text-heavy-metal-800 text-lg leading-relaxed">
        <!-- {{ randomBias.description }} -->
        <slot name="description"></slot>
      </p>
      <div>
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
</style>
