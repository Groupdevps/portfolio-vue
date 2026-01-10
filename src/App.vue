<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<style scoped>
.v-main {
  padding: 20px;
}
</style>