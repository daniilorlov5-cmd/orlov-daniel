import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { createHash } from 'node:crypto'
import path from 'node:path'

/**
 * Оптимизация фото на сборке: png/jpg → webp, длинная сторона ≤ 1600px.
 * Исходники в репозитории остаются как есть (до 5 МБ каждый), а в dist попадают
 * лёгкие webp — страница грузится в разы быстрее. Если sharp вдруг недоступен,
 * плагин молча отступает и Vite отдаёт оригиналы.
 */
function optimizeImages(): Plugin {
  let sharp: any = null
  return {
    name: 'optimize-images',
    apply: 'build',
    enforce: 'pre',
    async buildStart() {
      try {
        sharp = (await import('sharp')).default
      } catch {
        sharp = null
        this.warn('sharp недоступен — фото уйдут в сборку без оптимизации')
      }
    },
    async load(id) {
      if (!sharp) return null
      const clean = id.split('?')[0]
      if (!/\.(png|jpe?g)$/i.test(clean)) return null
      if (clean.includes('node_modules')) return null
      try {
        const buf: Buffer = await sharp(clean)
          .rotate()
          .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 78 })
          .toBuffer()
        const hash = createHash('sha1').update(buf).digest('hex').slice(0, 8)
        const base = path.basename(clean).replace(/\.(png|jpe?g)$/i, '')
        const safe = /^[\w.-]+$/.test(base) ? base : 'img'
        const ref = this.emitFile({ type: 'asset', name: `${safe}-${hash}.webp`, source: buf })
        return `export default "__VITE_ASSET__${ref}__"`
      } catch (e) {
        this.warn(`Не удалось оптимизировать ${clean}: ${(e as Error).message}`)
        return null
      }
    },
  }
}

export default defineConfig({
  plugins: [optimizeImages(), react()],
  server: {
    port: 5173
  },
  // static/ собирается скриптом scripts/assemble-static.mjs из static-src/ (видео и т.п.)
  // и копируется в корень сборки как есть. Старая папка public/ намеренно не используется.
  publicDir: 'static',
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
