import { createI18n } from 'vue-i18n'
import en from '@/plugins/i18n/locales/en'
import es from '@/plugins/i18n/locales/es'


const i18n = createI18n({
  legacy: false, // Recomendado para Composition API
  locale: 'es',
  fallbackLocale: 'en',
  messages : { en, es }
})

export default i18n
