<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="max-w-4xl w-full space-y-8 m-auto mb-2 mt-3 p-8">
    <h1 class="text-3xl md:text-4xl font-bold text-heavy-metal-900 mb-2 tracking-tight">
      {{ t('home_page.title') }}
    </h1>
    <p class="text-heavy-metal-800 text-lg leading-relaxed">
      {{ t('home_page.description') }}
      <a
        href="https://www.shortcogs.com/theorie"
        target="_blank"
        :title="'source' + t('footer.external_link')"
        class="text-heavy-metal-900 hover:text-heavy-metal-800 font-medium inline-flex items-center gap-1 self-end group relative z-10"
        ><span class="underline">source</span>
      </a>
    </p>
  </section>
</template>
