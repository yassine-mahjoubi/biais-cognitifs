<script lang="ts"></script>
<template>
  <div class="max-w-4xl w-full space-y-8 m-auto mb-2 mt-3 p-8">
    <div class="max-w-4xl w-full space-y-8">
      <h2
        class="text-2xl md:text-3xl font-bold text-heavy-metal-900 mb-2 animate-fade-in tracking-tight"
      >
        <slot name="name"></slot>
      </h2>
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
          id="h2"
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
