import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), 
    sitemap({
      hostname: 'https://apoyoeduca.net',
      dynamicRoutes: [
        '/nivel/5/materia/ccnn/unidad/4',
        '/nivel/5/materia/ccnn/unidad/5',
        '/nivel/6/materia/ccnn/unidad/1'
      ],
      changefreq: 'weekly',
      priority: 0.7
    })],
	base: '/',
})
