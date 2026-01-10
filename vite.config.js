import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  base: '/portafolio-vue/',
  plugins: [vue()],
   resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
    server: {
    watch: {
      usePolling: true,  // 👈 Fuerza el refresco por cambios
    },
    host: true,          // 👈 Para acceso desde red externa (o contenedor)
    port: 5173           // 👈 Cambia el puerto si lo necesitas
   /*  host: '0.0.0.0', // <-- IMPORTANTE para que exponga la app fuera del contenedor
    port: 5173,      // el puerto que desees
    strictPort: true,
    hmr: {
      host: 'localhost' // o la IP de tu máquina host
    }*/
  } 
})
