// composables/useThemeSwitcher.ts
import { useTheme } from 'vuetify'

export function useThemeSwitcher() {
  const theme = useTheme()

  const toggle = () => {
    theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light'
  }

  return { toggle, current: theme.global.name }
}
