<script lang="ts"></script>
<template>
  <div class="flex flex-col items-center p-8">
    <div class="max-w-4xl w-full space-y-8">
      <h1
        class="text-3xl md:text-4xl font-bold text-heavy-metal-900 mb-2 animate-fade-in tracking-tight"
      >
        <slot name="name"></slot>
      </h1>
      <p class="text-heavy-metal-800 text-lg leading-relaxed">
        <slot name="description"></slot>
      </p>
      <div>
        <slot name="action"></slot>
      </div>
      <!-- Section optionnelle : s'affiche seulement si les slots sont fournis -->
      <div v-if="$slots.optionalTitle || $slots.optionalText" class="mt-8">
        <h2
          v-if="$slots.optionalTitle"
          class="text-2xl md:text-3xl font-bold text-heavy-metal-900 mb-2 animate-fade-in tracking-tight"
        >
          <slot name="optionalTitle"></slot>
        </h2>

        <div v-if="$slots.optionalText" class="text-heavy-metal-800 text-lg leading-relaxed">
          <slot name="optionalText"></slot>
        </div>
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
