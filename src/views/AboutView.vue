<template>
  <v-container class="py-12">

    <!-- Header tipo código -->
    <div class="section-title">
      <span class="keyword">export</span>
      <span class="keyword">const</span>
      <span class="variable">profile</span>
      =
      {
    </div>

    <v-card class="code-card mt-4" elevation="6">
      <v-card-text>

        <pre class="code-block">
  <span class="property">experience</span>: "<span class="string">7+ {{ t('years') }}</span>",
  <span class="property">primaryRole</span>: "<span class="string">{{ t('primaryRole') }}</span>",
  <span class="property">adaptability</span>: "<span class="string">{{ t('adaptability') }}</span>",
  <span class="property">focus</span>: "<span class="string">{{ t('focus') }}</span>",
  <span class="property">support</span>: "<span class="string">Level 2 & 3</span>",
  <span class="property">stack</span>: [
    "<span class="string">Vue</span>",
    "<span class="string">React</span>",
    "<span class="string">Node</span>",
    "<span class="string">Nest</span>",
    "<span class="string">Laravel</span>",
    "<span class="string">Docker</span>",
    "<span class="string">Git</span>"
  ]
}
        </pre>

      </v-card-text>
    </v-card>

    <!-- Timeline -->
    <div class="section-title mt-12">
      <span class="keyword">const</span>
      <span class="variable">timeline</span>
      =
      [
    </div>

    <v-timeline side="end" class="mt-6">

      <!-- Empresa 1 -->
      <v-timeline-item>
        <v-card class="timeline-card">
          <v-card-title>2018 — {{ t('healthSector') }}</v-card-title>
          <v-card-text>
            {{ t('exp1') }}
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- Empresa 2 -->
      <v-timeline-item>
        <v-card class="timeline-card">
          <v-card-title>{{ t('securitySector') }}</v-card-title>
          <v-card-text>
            {{ t('exp2') }}
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- Empresa 3 -->
      <v-timeline-item>
        <v-card class="timeline-card">
          <v-card-title>{{ t('healthReturn') }}</v-card-title>
          <v-card-text>
            {{ t('exp3') }}
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- Empresa Actual -->
      <v-timeline-item>
        <v-card class="timeline-card">
          <v-card-title>{{ t('currentCompany') }}</v-card-title>
          <v-card-text>
            {{ t('exp4') }}
          </v-card-text>
        </v-card>
      </v-timeline-item>

    </v-timeline>

    <div class="section-title mt-6">]</div>

  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.section-title {
  font-family: "Fira Code", monospace;
  font-size: 1.2rem;
  color: #82aaff;
}

.code-card,
.timeline-card {
  background-color: #0f172a;
  border-radius: 16px;
}

.code-block {
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  color: #e2e8f0;
  white-space: pre-wrap;
}

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
