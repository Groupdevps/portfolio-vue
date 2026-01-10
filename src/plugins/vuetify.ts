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
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          background: '#FFFFFF',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#90CAF9',
          secondary: '#EEEEEE',
          background: '#121212',
        },
      },
    },
  },
})
