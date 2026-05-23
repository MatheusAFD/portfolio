#!/usr/bin/env node
/**
 * Regenerate PNG assets from source SVGs.
 *
 * Inputs:
 *   public/favicon.svg   - source for icon-192, icon-512, apple-touch-icon
 *   public/og-image.svg  - source for og-image.png
 *
 * Outputs:
 *   public/icon-192.png         (192x192)
 *   public/icon-512.png         (512x512)
 *   public/apple-touch-icon.png (180x180)
 *   public/og-image.png         (1200x630)
 *
 * Usage:
 *   pnpm gen:assets
 */
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(__dirname, '..', 'public')

const tasks = [
  { src: 'favicon.svg', out: 'icon-192.png', size: 192 },
  { src: 'favicon.svg', out: 'icon-512.png', size: 512 },
  { src: 'favicon.svg', out: 'apple-touch-icon.png', size: 180 },
  { src: 'og-image.svg', out: 'og-image.png', width: 1200, height: 630 },
]

async function render({ src, out, size, width, height }) {
  const svg = await readFile(join(publicDir, src))
  const w = width ?? size
  const h = height ?? size
  const png = await sharp(svg, { density: 384 })
    .resize(w, h, { fit: 'contain', background: { r: 27, g: 24, b: 19, alpha: 1 } })
    .png({ compressionLevel: 9, quality: 92 })
    .toBuffer()
  await writeFile(join(publicDir, out), png)
  return { out, bytes: png.length }
}

const results = await Promise.all(tasks.map(render))

for (const r of results) {
  console.log(`✓ ${r.out.padEnd(28)} ${(r.bytes / 1024).toFixed(1)} KB`)
}
