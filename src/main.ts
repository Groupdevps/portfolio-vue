import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
// Router
import router from './router/index'
// Vuetify
import vuetify from './plugins/vuetify'
// i18n
import i18n from './plugins/i18n'

// Material Icons
import '@mdi/font/css/materialdesignicons.min.css'



createApp(App)
  .use(router)
  .use(createPinia())
  .use(i18n)
  .use(vuetify)
  .mount('#app')
