<template>
  <v-container class="fill-height d-flex align-center">
    <v-row align="center" justify="center">

      <!-- Avatar -->
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="220" class="elevation-10">
          <v-img src="@/assets/avatar.png" cover />
        </v-avatar>
      </v-col>

      <!-- Hero Content -->
      <v-col cols="12" md="8">

        <!-- Code Style Card -->
        <v-card class="pa-6 hero-card" elevation="8">
          <pre class="code-block">
            <span class="keyword">const</span> <span class="variable">developer</span> = {
              <span class="property">name</span>: "<span class="string">Daniel Martinez S.</span>",
              <span class="property">role</span>: "<span class="string">{{ t('role') }}</span>",
              <span class="property">experience</span>: "<span class="string">7+ {{ t('years') }}</span>",
              <span class="property">focus</span>: "<span class="string">{{ t('FullStack') }}</span>",
              <span class="property">stack</span>: [
                "<span class="string">Vue</span>",
                "<span class="string">React</span>",
                "<span class="string">Node</span>",
                "<span class="string">Nest</span>",
                "<span class="string">Flutter</span>",
                "<span class="string">Docker</span>",
                "<span class="string">Git</span>"
              ]
            }
          </pre>

          <v-row class="mt-6" justify="space-between" align="center" gap="16">
            <v-btn
              color="primary"
              variant="flat"
              prepend-icon="mdi-github"
              :href="github"
              target="_blank"
            >
              GitHub
            </v-btn>

            <v-btn
              class="ml-3"
              color="secondary"
              variant="flat"
              prepend-icon="mdi-linkedin"
              :href="linkedin"
              target="_blank"
            >
              LinkedIn
            </v-btn>
          </v-row>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Puedes luego traer esto desde config o env
const github = 'https://github.com/Groupdevps'
const linkedin = 'https://linkedin.com/in/daniel-martínez-salas'
</script>

<style scoped>
.hero-card {
  background-color: #0f172a;
  border-radius: 16px;
}

.code-block {
  font-family: "Fira Code", monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #e2e8f0;
}

/* Colores estilo VS Code */
.keyword {
  color: #c792ea;
}

.variable {
  color: #82aaff;
}

.property {
  color: #ffcb6b;
}

.string {
  color: #c3e88d;
}
</style>