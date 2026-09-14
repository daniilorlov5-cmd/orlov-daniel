import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  // Статика (favicon и т.п.) лежит в static/. Папка public/ намеренно не
  // используется: там остались дубликаты картинок без ссылок в коде, и
  // раньше Vite копировал их в dist, раздувая сборку до ~70 МБ.
  publicDir: 'static',
  build: {
    chunkSizeWarningLimit: 1000,
    // Вендорные библиотеки отдельными чанками — лучше кэшируются.
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion']
        }
      }
    }
  }
})
