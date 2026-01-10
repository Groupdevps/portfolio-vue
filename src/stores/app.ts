import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    darkMode: false as boolean,
    language: 'es' as string
  }),
  actions: {
    toggleDark(): void {
      this.darkMode = !this.darkMode
    },
    setLanguage(lang: string): void {
      this.language = lang
    }
  }
})
