<template>
  <div class="main-layout">
    <div class="sidebar-container">
      <div class="sidebar-sticky">
        <!-- Avatar -->
        <div class="text-center mb-6">
          <v-avatar size="180" class="elevation-10">
            <v-img :src="avatar" cover />
          </v-avatar>
        </div>

        <!-- Saludo -->
        <div class="text-center mb-6">
          <h1 class="greeting-text">{{ t('saludo') }}</h1>
        </div>

        <!-- Info Card -->
        <v-card class="pa-6 hero-card mb-6" elevation="8">
          <h2 class="text-h6 mb-4">Daniel Martinez S.</h2>
          
          <div class="info-text mb-4">
            <p class="role-text"><strong>{{ t('role') }}</strong></p>
            <p class="experience-text">7+ {{ t('years') }}</p>
            <p class="focus-text">{{ t('FullStack') }}</p>
          </div>

          <v-divider class="my-4" />

          <!-- Tech Stack -->
          <div class="mb-4">
            <p class="text-caption font-weight-bold mb-2">{{ t('stack') || 'Stack' }}</p>
            <v-chip
              v-for="tech in techStack"
              :key="tech"
              size="x-small"
              class="ma-1"
              variant="outlined"
            >
              {{ tech }}
            </v-chip>
          </div>

          <v-divider class="my-4" />

          <!-- Social Buttons -->
          <v-row class="mt-4" gap="8">
            <v-btn
              icon
              color="primary"
              :href="github"
              target="_blank"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>

            <v-btn
              icon
              color="primary"
              :href="linkedin"
              target="_blank"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>

            <v-btn
              icon
              color="primary"
              :href="email"
            >
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </v-row>
        </v-card>
      </div>
    </div>

    <!-- Contenido Principal (Derecha) -->
    <div class="content-container">
      <!-- Projects View -->
      <ProjectsView />

      <!-- About View -->
      <AboutView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProjectsView from './ProjectsView.vue'
import AboutView from './AboutView.vue'
import avatar from '@/assets/avatar.png'

const { t } = useI18n()

const techStack = ['Vue', 'React', 'Node', 'Nest', 'Flutter', 'Docker', 'Git']

const github = 'https://github.com/Groupdevps'
const linkedin = 'https://linkedin.com/in/daniel-martínez-salas'
const email = 'mailto:group.devps@gmail.com'
</script>

<style scoped>
.main-layout {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.sidebar-container {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px 16px;
}

.sidebar-sticky {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: calc(40% - 60px);
  max-height: 90vh;
  overflow-y: auto;
  padding: 0 40px;
  z-index: 10;
}

.hero-card {
  background-color: rgb(var(--v-theme-surface));
  border-radius: 16px;
  border: 1px solid rgb(var(--v-theme-surface-variant));
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.greeting-text {
  color: rgb(var(--v-theme-on-background));
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  text-align: center;
}

.info-text p {
  color: rgb(var(--v-theme-on-surface));
  margin: 8px 0;
}

.role-text {
  color: rgb(var(--v-theme-primary));
  font-size: 0.95rem;
}

.experience-text {
  color: rgb(var(--v-theme-secondary));
  font-size: 0.9rem;
}

.focus-text {
  color: rgb(var(--v-theme-tertiary, 140, 227, 141));
  font-size: 0.9rem;
}

.content-container {
  flex: 1;
  padding: 40px 16px;
  width: 60%;
  overflow-y: auto;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .main-layout {
    flex-direction: column;
  }

  .sidebar-container {
    width: 100%;
    padding: 12px 8px;
  }

  .sidebar-sticky {
    position: static;
    transform: none;
    width: 100%;
    max-height: none;
    padding: 0;
    margin-bottom: 24px;
  }

  .content-container {
    width: 100%;
    padding: 12px 8px;
  }
}

/* Scrollbar styling para la sidebar */
.sidebar-sticky::-webkit-scrollbar {
  width: 6px;
}

.sidebar-sticky::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-sticky::-webkit-scrollbar-thumb {
  background: rgb(var(--v-theme-surface-variant));
  border-radius: 3px;
}

.sidebar-sticky::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--v-theme-on-surface-variant));
}
</style>