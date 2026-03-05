<template>
  <v-app>
    <Navbar />
    <v-main class="main-centered">
      <v-container fluid class="pa-0">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<style scoped>
.main-centered {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
}

.v-container {
  max-width: 1400px;
  width: 100%;
}
</style>