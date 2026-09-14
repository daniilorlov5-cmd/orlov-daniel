import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  // В public/ лежали только photo/ и presentation/ — дубликаты картинок,
  // на которые нет ни одной ссылки в коде. Vite копировал их в dist,
  // раздувая сборку до ~70 МБ, из-за чего хостинг не отдавал крупные файлы.
  // Все используемые картинки импортируются из src/assets.
  publicDir: false,
  build: {
    chunkSizeWarningLimit: 1000,
    // Разбиваем крупные зависимости на отдельные чанки:
    // единый бандл весил больше мегабайта и не отдавался хостингом.
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion']
        }
      }
    }
  }
})
