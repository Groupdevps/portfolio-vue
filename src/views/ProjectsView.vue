<template>
  <v-container class="py-12">

    <!-- Título tipo código -->
    <div class="section-title">
      <span class="keyword">export</span>
      <span class="keyword">const</span>
      <span class="variable">projects</span>
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
            {{ project.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ project.category }}
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
              {{ tech }}
            </v-chip>

            <!-- Impacto -->
            <div class="impact mt-4">
              <span class="property">impact:</span>
              <span class="string">{{ project.impact }}</span>
            </div>

          </v-card-text>
        </v-card>
      </v-col>

    </v-row>

    <div class="section-title mt-6">]</div>

    <!-- Modal -->
    <v-dialog v-model="dialog" max-width="800">
      <v-card class="modal-card">
        <v-card-title>
          {{ selected?.title }}
        </v-card-title>

        <v-card-text>

          <pre class="code-block">
{
  <span class="property">description</span>: "<span class="string">{{ selected?.description }}</span>",
  <span class="property">role</span>: "<span class="string">{{ selected?.role }}</span>",
  <span class="property">stack</span>: [{{ selected?.stack.join(', ') }}],
  <span class="property">impact</span>: "<span class="string">{{ selected?.impact }}</span>"
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
    title: 'Clinical Management System',
    category: 'Professional',
    description: 'Enterprise clinical management platform.',
    role: 'Frontend Lead',
    stack: ['Vue', 'Node', 'Docker'],
    impact: 'Reduced load time by 40% and improved UX flow.',
    video: 'https://www.youtube.com/embed/VIDEO_ID'
  },
  {
    id: 2,
    title: 'Expense App (Personal)',
    category: 'Personal',
    description: 'Hexagonal architecture finance app.',
    role: 'Fullstack Developer',
    stack: ['Vue 3', 'Nest', 'Docker'],
    impact: 'Designed scalable modular architecture.',
    video: null
  },
  {
    id: 3,
    title: 'Interview Store',
    category: 'Technical',
    description: 'Advanced state management simulation.',
    role: 'Frontend Engineer',
    stack: ['Vue', 'Pinia'],
    impact: 'Complex state flow and persistence modeling.',
    video: null
  }
])
</script>

<style scoped>
.section-title {
  font-family: "Fira Code", monospace;
  font-size: 1.2rem;
  color: #82aaff;
}

.project-card {
  background-color: #0f172a;
  border-radius: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.modal-card {
  background-color: #0f172a;
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

.impact {
  font-family: "Fira Code", monospace;
}
</style>
