<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>{{ $t('navbar.home') }}</v-toolbar-title>

    <v-spacer />

    <v-btn icon @click="toggleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>

    <v-btn icon @click="toggleLang">
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

const { toggleTheme, currentTheme } = useThemeSwitcher()
const store = useSettingsStore()
const { t } = useI18n()


function toggleLang() {
  locale.value = locale.value === 'es' ? 'en' : 'es'
  settings.setLang(locale.value)
}
</script>
