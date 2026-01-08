<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import BiaisLayout from '../Layout/BiaisLayout.vue'
</script>

<template>
  <BiaisLayout>
    <template #name>
      <h1>{{ t('about_page.title') }}</h1>
    </template>
    <template #description>
      <p>{{ t('about_page.description') }}</p>
    </template>
  </BiaisLayout>
</template>
