<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
import { useHead } from '@unhead/vue'
import BiaisLayout from '../Layout/BiaisLayout.vue'
useHead({
  title: t('seo.about.title'),
  meta: [
    {
      name: 'description',
      content: t('seo.about.description'),
    },
  ],
})
const links = tm('about_page.inspiration_sources.links')
</script>

<template>
  <BiaisLayout>
    <template #name>
      <h1>{{ t('about_page.title') }}</h1>
    </template>
    <template #description>
      <p>{{ t('about_page.description') }}</p>
    </template>
    <!-- Partie optionnelle -->
    <template #optionalTitle>{{ t('about_page.inspiration_sources.title') }}</template>
    <template #optionalText>
      <ul class="list-disc">
        <li v-for="link in links" :key="link">
          {{ link.name }}:
          <a
            :href="link.url"
            target="_blank"
            class="underline text-heavy-metal-900 max-md:wrap-break-word"
            :title="t('footer.external_link', { link: link.name })"
            >{{ link.url }}</a
          >
        </li>
      </ul>
    </template>
  </BiaisLayout>
</template>
