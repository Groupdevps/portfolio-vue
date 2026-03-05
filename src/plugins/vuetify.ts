import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { md3 } from 'vuetify/blueprints'

// Opcional: temas personalizados
const myCustomTheme = {
  dark: false,
  colors: {
    background: '#ffffff',
    primary: '#1867C0',
    secondary: '#5CBBF6',
  }
}

export default createVuetify({
  components,
  directives,
  /* theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme
    }
  }, */
 
   blueprint: md3,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          background: '#FFFFFF',
          surface: '#F5F5F5',
          'on-background': '#1C1B1F',
          'on-surface': '#1C1B1F',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#90CAF9',
          secondary: '#EEEEEE',
          background: '#0F172A',
          surface: '#1E293B',
          'on-background': '#E2E8F0',
          'on-surface': '#E2E8F0',
        },
      },
    },
  },
})
