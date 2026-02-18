// src/router/index.js
import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'



// import Contact from '@/components/Contacto.vue'

// import HomeView from '@/views/HomeView.vue'
// import ProjectsView from '@/views/ProjectsView.vue'
// import AboutView from '@/views/AboutView.vue'
import MainView from '@/views/MainView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: MainView },
  // { path: '/proyectos', component: ProjectsView },
  // { path: '/sobre-mi', component: AboutView }  
  // { path: '/contacto', name: 'Contacto', component: Contacto },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
