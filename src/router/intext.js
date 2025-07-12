// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Hero from '@/components/Hero.vue'
import SobreMi from '@/components/SobreMi.vue'
import Proyectos from '@/components/Proyectos.vue'
import Contacto from '@/components/Contacto.vue'

const routes = [
  { path: '/', name: 'Inicio', component: Hero },
  { path: '/sobre-mi', name: 'SobreMi', component: SobreMi },
  { path: '/proyectos', name: 'Proyectos', component: Proyectos },
  { path: '/contacto', name: 'Contacto', component: Contacto },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
