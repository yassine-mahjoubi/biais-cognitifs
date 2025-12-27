import { createI18n } from 'vue-i18n'
// Chargement statique des fichiers JSON
import frLocale from './local/fr.json'
import enLocale from './local/en.json'

const messages = {
  fr: frLocale,
  en: enLocale,
}
const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: messages,
  globalInjection: true,
})

export default i18n
