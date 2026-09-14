import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs'
const [,, file, outPrefix, w = '1440', h = '900', mobile] = process.argv
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] })
const ctx = await browser.newContext({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1, isMobile: !!mobile, hasTouch: !!mobile })
const page = await ctx.newPage()
const errors = []
page.on('pageerror', e => errors.push(String(e)))
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()) })
await page.goto('file://' + file, { waitUntil: 'load' })
await page.waitForTimeout(400)
// прокручиваем, чтобы сработали все reveal
const total = await page.evaluate(() => document.body.scrollHeight)
for (let y = 0; y < total; y += 400) { await page.evaluate(v => window.scrollTo(0, v), y); await page.waitForTimeout(120) }
await page.waitForTimeout(1500); await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(800)
await page.screenshot({ path: `${outPrefix}-full.png`, fullPage: true })
await page.screenshot({ path: `${outPrefix}-top.png` })
console.log('height', total, 'errors:', errors.length ? errors : 'none')
await browser.close()
