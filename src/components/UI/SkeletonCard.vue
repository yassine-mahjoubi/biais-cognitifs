<script lang="ts" setup>
import Skeleton from '../ui/skeleton/Skeleton.vue'
</script>

<template>
  <div class="p-6 rounded-2xl shadow-md relative h-full flex flex-col">
    <div class="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full -mr-16 -mt-16"></div>
    <Skeleton class="absolute h-4 w-24 rounded-md" />
    <Skeleton class="absolute top-4 right-4 h-5 w-5 rounded-full" />
    <div class="mt-8 mb-4 min-h-14 flex flex-col justify-center relative z-10 space-y-2">
      <Skeleton class="h-4 w-3/4 rounded" />
      <Skeleton class="h-4 w-1/2 rounded" />
    </div>

    <div class="leading-relaxed grow mb-4 relative z-10 space-y-2">
      <Skeleton class="h-2 w-full rounded" />
      <Skeleton class="h-2 w-full rounded" />
      <Skeleton class="h-2 w-5/6 rounded" />
    </div>
    <Skeleton class="h-6 w-28 self-end rounded-md relative z-10" />
  </div>
</template>
