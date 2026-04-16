<template>
  <v-container class="py-12">

    <!-- Título tipo código -->
    <div class="section-title">
      <span class="keyword mr-2">export</span>
      <span class="keyword mr-2">const</span>
      <span class="variable">{{t('projects')}}</span>
      =
      [
    </div>

    <v-row class="mt-6" dense>

      <v-col
        v-for="project in projects"
        :key="project.id"
        cols="12"
        md="6"
      >
        <v-card
          class="project-card"
          elevation="6"
          @click="openProject(project)"
        >
          <v-card-title class="text-h6">
            {{ t(project.title) }}
          </v-card-title>

          <v-card-subtitle>
            {{ t(project.category) }}
          </v-card-subtitle>

          <v-card-text>

            <!-- Stack -->
            <v-chip
              v-for="tech in project.stack"
              :key="tech"
              size="small"
              class="ma-1"
              variant="outlined"
            >
              {{ t(tech) }}
            </v-chip>

            <!-- Impacto -->
            <div class="impact mt-4">
              <span class="property">{{t('impact')}}: </span>
              <span class="string">{{ t(project.impact) }}</span>
            </div>

          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

    <div class="section-title mt-12">]</div>

    <!-- Modal -->
    <v-dialog v-model="dialog" max-width="800">
      <v-card class="modal-card">
        <v-card-title>
          {{ t(selected?.title) }}
        </v-card-title>

        <v-card-text>

          <pre class="code-block">
            {
              <span class="property">description</span>: "<span class="string">{{ t(selected?.description) }}</span>",
              <span class="property">role</span>: "<span class="string">{{ t(selected?.role) }}</span>",
              <span class="property">stack</span>: [{{ selected?.stack.join(', ') }}],
              <span class="property">impact</span>: "<span class="string">{{ t(selected?.impact) }}</span>"
            }
          </pre>

          <!-- Video opcional -->
          <div v-if="selected?.video" class="mt-4">
            <iframe
              :src="selected.video"
              width="100%"
              height="350"
              frameborder="0"
              allowfullscreen
            />
          </div>

        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="dialog = false">
            {{ t('close') }}
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>

  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const dialog = ref(false)
const selected = ref<any>(null)

function openProject(project: any) {
  selected.value = project
  dialog.value = true
}

const projects = ref([
  {
    id: 1,
    title: 'title1',
    category: 'category1',
    description: 'description1',
    role: 'role1',
    stack: ['Vue', 'Node', 'Docker'],
    impact: 'impact1',
    video: 'https://www.youtube.com/embed/VIDEO_ID'
  },
  {
    id: 2,
    title: 'title2',
    category: 'category2',
    description: 'description2',
    role: 'role2',
    stack: ['Vue 3', 'Nest', 'Docker'],
    impact: 'impact2',
    video: null
  },
  {
    id: 3,
    title: 'title3',
    category: 'category3',
    description: 'description3',
    role: 'role3',
    stack: ['Vue', 'Node', 'Docker'],
    impact: 'impact3',
    video: null
  },
  {
    id: 4,
    title: 'title4',
    category: 'category4',
    description: 'description4',
    role: 'role4',
    stack: ['React', 'Node', 'Docker'],
    impact: 'impact4',
    video: null
  }
   
  
])
</script>

<style scoped>
.section-title {
  font-family: "Fira Code", monospace;
  font-size: 1.2rem;
  color: rgb(var(--v-theme-primary));
}

.project-card {
  background-color: rgb(var(--v-theme-surface));
  border: 1px solid rgb(var(--v-theme-surface-variant));
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.modal-card {
  background-color: rgb(var(--v-theme-surface));
  border: 1px solid rgb(var(--v-theme-surface-variant));
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

.impact {
  font-family: "Fira Code", monospace;
}
</style>
