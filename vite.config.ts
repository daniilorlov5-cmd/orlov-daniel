import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  // Папка public/ намеренно не используется: там остались дубликаты
  // картинок без ссылок в коде, и раньше Vite копировал их в dist,
  // раздувая сборку до ~70 МБ. Favicon подключён через index.html из src/assets.
  publicDir: false,
  build: {
    chunkSizeWarningLimit: 1000,
    // Вендорные библиотеки отдельными чанками — лучше кэшируются.
    rollupOptions: {
      // Две страницы: главная и /price/ — отдельный HTML, чтобы работало на любом статическом хостинге
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        price: fileURLToPath(new URL('./price/index.html', import.meta.url)),
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom']
        }
      }
    }
  }
})
