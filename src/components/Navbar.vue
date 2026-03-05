<template>
  <v-app-bar app elevation="0" class="transparent-navbar">
    <v-spacer />

    <div class="navbar-controls">
      <v-btn icon @click="toggle" class="navbar-btn">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

      <v-btn icon @click="changeLang()" class="navbar-btn">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </div>
    
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

<style scoped>
.transparent-navbar {
  background-color: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

.navbar-controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

.navbar-btn {
  color: rgb(var(--v-theme-on-background)) !important;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.navbar-btn:hover {
  opacity: 1;
  background-color: rgb(var(--v-theme-surface-variant)) !important;
}
</style>
