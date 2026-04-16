<template>
  <v-container class="py-12">


    <!-- Timeline -->
    <div class="section-title mt-12">
      <span class="keyword mr-2">const</span>
      <span class="variable">timeline</span>
      =
      [
    </div>

    <v-timeline side="end" class="mt-6">
      <!-- Empresa Actual -->
      <v-timeline-item>
        <v-card class="timeline-card">
          <v-card-title>{{ t('currentCompany') }}</v-card-title>
          <v-card-text>
            {{ t('exp4') }}
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

      <!-- Empresa 2 -->
      <v-timeline-item>
        <v-card class="timeline-card">
          <v-card-title>{{ t('securitySector') }}</v-card-title>
          <v-card-text>
            {{ t('exp2') }}
          </v-card-text>
        </v-card>
      </v-timeline-item>

      
      <!-- Empresa 1 -->
      <v-timeline-item>
        <v-card class="timeline-card">
          <v-card-title> {{ t('healthSector') }}</v-card-title>
          <v-card-text>
            {{ t('exp1') }}
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
  color: rgb(var(--v-theme-primary));
}

.code-card,
.timeline-card {
  background-color: rgb(var(--v-theme-surface));
  border: 1px solid rgb(var(--v-theme-surface-variant));
  border-radius: 16px;
}

.timeline-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.code-block {
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  color: rgb(var(--v-theme-on-surface));
  white-space: pre-wrap;
}

.keyword {
  color: rgb(var(--v-theme-primary));
}

.variable {
  color: rgb(var(--v-theme-secondary));
}

.property {
  color: rgb(var(--v-theme-tertiary, 255, 203, 107));
}

.string {
  color: rgb(var(--v-theme-tertiary, 195, 232, 141));
}
</style>
