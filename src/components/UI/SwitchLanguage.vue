<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t, availableLocales, locale } = useI18n()
import { storeToRefs } from 'pinia'

import { useBiasStore } from '@/stores/bias'

const store = useBiasStore()
const { newLocale } = storeToRefs(store)

import { ref } from 'vue'
type Language = 'fr' | 'en'
const switcher = ref<Language>('fr')
const handleLanguage = () => {
  locale.value = switcher.value
  newLocale.value = switcher.value
}
</script>

<template>
  <div>
    <select
      v-model="switcher"
      name="switchLanguage"
      id="switchLanguage"
      :aria-label="t('common.interface.label')"
      @change="handleLanguage"
    >
      <option
        v-for="locale in availableLocales"
        :key="`locale-${locale}`"
        :lang="locale"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>
<style scoped>
select,
select option {
  background-color: var(--color-heavy-metal-900);
  color: var(--color-heavy-metal-300);
}
</style>
