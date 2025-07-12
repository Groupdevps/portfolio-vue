import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// Router
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuex
// import store from './store'

// i18n
import i18n from './i18n'

// Material Icons
import '@mdi/font/css/materialdesignicons.min.css'

const vuetify = createVuetify({ components, directives })


createApp(App)
.use(router)
//   .use(store)
  .use(i18n)
  .use(vuetify)
  .mount('#app')
