<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

import type { Language } from '@/type/Bias'

import { storeToRefs } from 'pinia'
import { useBiasStore } from '@/stores/bias'

const { t, availableLocales } = useI18n()
const store = useBiasStore()
const { newLocale } = storeToRefs(store)

const switcher = ref<Language>(newLocale.value)
const handleLanguage = () => {
  //locale.value = switcher.value
  newLocale.value = switcher.value
}
</script>

<template>
  <div>
    <select
      class="uppercase"
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
