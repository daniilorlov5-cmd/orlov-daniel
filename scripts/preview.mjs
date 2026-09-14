/**
 * Сборка превью одним HTML-файлом без Vite: esbuild (из глобального tsx) бандлит
 * приложение вместе с React, картинки уходят в data-URI (webp ≤1600px),
 * CSS — inline. Режимы: local (шрифты Geist вшиты из TTF) и artifact (Google Fonts).
 */
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const G = '/home/claude/.npm-global/lib/node_modules'
const esbuild = require(`${G}/tsx/node_modules/esbuild`)
const sharp = require(`${G}/sharp`)

const mode = process.argv[2] || 'local'
const root = path.resolve(import.meta.dirname, '..')
const out = path.join(root, '.preview')
const FONTS = '/tmp/claude-0/-home-claude/2ceb1606-93f7-55b6-a054-4ec8aff0a322/scratchpad/chitcod/fonts'

async function dataUri(abs) {
  const meta = await sharp(abs).metadata()
  const buf = await sharp(abs).rotate().resize({ width: Math.min(meta.width, 1200), withoutEnlargement: true }).webp({ quality: 72 }).toBuffer()
  return `data:image/webp;base64,${buf.toString('base64')}`
}

// Плагин: картинки → webp data-URI прямо на этапе резолва импорта
const webpPlugin = {
  name: 'webp-dataurl',
  setup(b) {
    b.onLoad({ filter: /\.(png|jpe?g)$/ }, async (args) => ({ contents: `export default "${await dataUri(args.path)}"`, loader: 'js' }))
  },
}

const res = await esbuild.build({
  entryPoints: [path.join(root, 'src/main.tsx')],
  bundle: true, write: false, minify: true, format: 'iife', target: 'es2020',
  jsx: 'automatic', nodePaths: [G], plugins: [webpPlugin], loader: { '.svg': 'dataurl' },
  define: { 'process.env.NODE_ENV': '"production"' },
  outdir: out, logLevel: 'warning',
})
const js = res.outputFiles.find(f => f.path.endsWith('.js')).text
const css = res.outputFiles.find(f => f.path.endsWith('.css')).text

let fonts = ''
if (mode === 'local') {
  const b64 = f => fs.readFileSync(path.join(FONTS, f)).toString('base64')
  fonts = `<style>
@font-face{font-family:'Geist';font-weight:400;src:url(data:font/ttf;base64,${b64('Geist-Regular.ttf')}) format('truetype')}
@font-face{font-family:'Geist';font-weight:500 700;src:url(data:font/ttf;base64,${b64('Geist-Bold.ttf')}) format('truetype')}
@font-face{font-family:'Geist Mono';font-weight:400 500;src:url(data:font/ttf;base64,${b64('Geist-Regular.ttf')}) format('truetype')}
</style>`
} else {
  fonts = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">`
}

const body = `${fonts}\n<style>${css}</style>\n<div id="root"></div>\n<script>${js}</script>\n`
const html = mode === 'local'
  ? `<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Превью</title></head><body>${body}</body></html>`
  : `<title>Даниил Орлов — превью редизайна</title>\n${body}`

const file = path.join(out, mode === 'local' ? 'preview-local.html' : 'preview-artifact.html')
fs.writeFileSync(file, html)
console.log(mode, '→', file, (html.length / 1024 / 1024).toFixed(2), 'MB; js', (js.length / 1024).toFixed(0), 'kB; css', (css.length / 1024).toFixed(0), 'kB')
