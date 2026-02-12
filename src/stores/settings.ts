import { defineStore } from 'pinia'
import { ref } from 'vue'
import { watch } from 'vue'


export const useSettingsStore = defineStore('settings', () => {
  const darkTheme = ref(false)
  const locale = ref('es')

  const savedLang = localStorage.getItem('lang')
  if (savedLang) {
    locale.value = savedLang
  }

  watch(locale, (val) => {
    localStorage.setItem('lang', val)
  })
  
  function toggleTheme(vuetify: any) {
    // toggle();
    darkTheme.value = !darkTheme.value
    vuetify.theme.global.name.value = darkTheme.value ? 'dark' : 'light'
  }
  
  function toggleLang() {
    
    locale.value = locale.value === 'es' ? 'en' : 'es'
    // locale.value = locale.value;
  }

  return {
    darkTheme,
    locale,
    toggleTheme,
    toggleLang
  }
})
