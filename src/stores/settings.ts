import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useSettingsStore = defineStore('settings', () => {
  const darkTheme = ref(false)
  const locale = ref('es')

  function toggleTheme(vuetify: any) {
    // toggle();
    darkTheme.value = !darkTheme.value
    vuetify.theme.global.name.value = darkTheme.value ? 'dark' : 'light'
  }

  function toggleLang(i18n: any) {
    locale.value = locale.value === 'es' ? 'en' : 'es'
    i18n.locale.value = locale.value
  }

  return {
    darkTheme,
    locale,
    toggleTheme,
    toggleLang
  }
})
