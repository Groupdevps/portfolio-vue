<template>
  <v-container class="py-12">


    <!-- Header tipo código -->
    <div class="section-title">
      <span class="keyword mr-2">export</span>
      <span class="keyword mr-2">const</span>
      <span class="variable">{{ t('profile') }}</span>
      =
      {
    </div>

    <v-card class="code-card mt-4" elevation="6">
      <v-card-text>

        <pre class="code-block">
      <span class="property">{{t('experience')}}</span>: "<span class="string">7+ {{ t('years') }}</span>",
      <span class="property">{{t('primaryRole')}}</span>: "<span class="string">{{ t('primaryRoleDesc') }}</span>",
      <span class="property">{{t('adaptability')}}</span>: "<span class="string">{{ t('adaptabilityDesc') }}</span>",
      <span class="property">{{t('focus')}}</span>: "<span class="string">{{ t('focusDesc') }}</span>",
      <span class="property">{{t('support')}}</span>: "<span class="string">{{t('level')}} 2 & 3</span>",
      <span class="property">{{t('stack')}}</span>: [
        "<span class="string">Vue</span>",
        "<span class="string">React</span>",
        "<span class="string">Node</span>",
        "<span class="string">Nest</span>",
        "<span class="string">Laravel</span>",
        "<span class="string">Docker</span>",
        "<span class="string">Git</span>"
        "<span class="string">Jira</span>"

      ]
    }
        </pre>

      </v-card-text>
    </v-card>
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

.code-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
.code-card,
.timeline-card {
  background-color: rgb(var(--v-theme-surface));
  border: 1px solid rgb(var(--v-theme-surface-variant));
  border-radius: 16px;
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
