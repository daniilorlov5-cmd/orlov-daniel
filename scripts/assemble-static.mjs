/**
 * Собирает бинарные файлы из текстовых base64-кусков в static-src/ → static/.
 * Нужно потому, что в репозиторий бинарники попадают только как текст (через API).
 * Запускается перед vite build; static/ — publicDir, Vite копирует его в корень сборки.
 */
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const src = path.join(root, 'static-src')
const out = path.join(root, 'static')
fs.mkdirSync(out, { recursive: true })

const groups = new Map()
for (const f of fs.readdirSync(src)) {
  const m = f.match(/^(.+)\.part(\d+)\.b64$/)
  if (!m) continue
  if (!groups.has(m[1])) groups.set(m[1], [])
  groups.get(m[1]).push({ n: Number(m[2]), f })
}
for (const [name, parts] of groups) {
  parts.sort((a, b) => a.n - b.n)
  const b64 = parts.map(p => fs.readFileSync(path.join(src, p.f), 'utf8').trim()).join('')
  const buf = Buffer.from(b64, 'base64')
  fs.writeFileSync(path.join(out, name), buf)
  console.log(`static/${name}: ${parts.length} частей → ${(buf.length / 1024).toFixed(0)} kB`)
}
