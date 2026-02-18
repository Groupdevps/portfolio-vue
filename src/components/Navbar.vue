<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>{{ $t('saludo') }}</v-toolbar-title>

    <v-spacer />

    <v-btn icon @click="toggle">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>

    <v-btn icon @click="changeLang()">
      <v-icon>mdi-translate</v-icon>
    </v-btn>

    <v-btn text to="/" exact>Inicio</v-btn>
    <v-btn text to="/proyectos">Proyectos</v-btn>
    <v-btn text to="/sobre-mi">Sobre mí</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'
import { useI18n } from 'vue-i18n'
import { useThemeSwitcher } from '@/composables/useThemeSwitcher'
import { watch } from 'vue'

const settings = useSettingsStore()
const { toggle } = useThemeSwitcher()

const { t , locale } = useI18n()


// Sincroniza store → i18n
watch(
  () => settings.locale,
  (newLang) => {
    locale.value = newLang
  },
  { immediate: true }
)
const changeLang = ()=> {
  settings.toggleLang()  
  locale.value = settings.locale
}

</script>
