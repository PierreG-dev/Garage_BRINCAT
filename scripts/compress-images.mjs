/**
 * One-shot script: compress oversized images in public/images/
 * Keeps originals as *.orig.jpg / *.orig.png
 * Run: node scripts/compress-images.mjs
 */
import sharp from 'sharp'
import { readdir, rename, stat } from 'fs/promises'
import { join, extname, basename } from 'path'

const DIR = new URL('../public/images', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')

// Max dimensions and quality per image type
const CONFIG = {
  // Hero images: full-screen covers — keep 1920px wide, high quality
  'hero-1.jpg':          { width: 1920, quality: 82 },
  'hero-2.jpg':          { width: 1920, quality: 82 },
  'hero-3.jpg':          { width: 1920, quality: 82 },
  // Separator: decorative full-width band, shorter height visible
  'separator-1.jpg':     { width: 1920, quality: 72 },
  'separator-2.jpg':     { width: 1920, quality: 72 },
  // Camping-car hero background
  'camping-car-bg.jpg':  { width: 1920, quality: 78 },
  // Camping-car content image — converted PNG → JPEG
  'camping-car.png':     { width: 1200, quality: 80, toJpeg: true },
  // Service images — displayed at ~600px max
  'service-depannage.jpg':  { width: 1200, quality: 80 },
  'service-expertise.jpg':  { width: 1200, quality: 80 },
  'service-garantie.jpg':   { width: 1200, quality: 80 },
  'service-reparation.jpg': { width: 1200, quality: 80 },
  'service-revision.jpg':   { width: 1200, quality: 80 },
  'service-vente.jpg':      { width: 1200, quality: 80 },
  // About / garage photos
  'about.jpg':              { width: 1200, quality: 80 },
  'garage-castelsarrasin.jpg': { width: 1200, quality: 80 },
  'garage-montauban.jpg':      { width: 1200, quality: 80 },
}

async function compress(file, cfg) {
  const src = join(DIR, file)
  const origExt = extname(file)
  const base = basename(file, origExt)
  const destExt = cfg.toJpeg ? '.jpg' : origExt
  const dest = cfg.toJpeg ? join(DIR, base + '.jpg') : src
  const backup = join(DIR, base + '.orig' + origExt)

  const before = (await stat(src)).size

  // Skip if already compressed (backup exists)
  try { await stat(backup); console.log(`⏭  ${file} already compressed, skip`); return } catch {}

  const img = sharp(src).resize({ width: cfg.width, withoutEnlargement: true })
  const buf = destExt === '.jpg'
    ? await img.jpeg({ quality: cfg.quality, mozjpeg: true }).toBuffer()
    : await img.png({ quality: cfg.quality, compressionLevel: 9 }).toBuffer()

  const after = buf.length
  const saved = ((1 - after / before) * 100).toFixed(1)

  // Backup original then write compressed
  await rename(src, backup)
  const { writeFile } = await import('fs/promises')
  await writeFile(dest, buf)

  console.log(`✓  ${file.padEnd(30)} ${(before/1024/1024).toFixed(2)}MB → ${(after/1024/1024).toFixed(2)}MB  (-${saved}%)`)
}

console.log('Compressing images in', DIR, '\n')
for (const [file, cfg] of Object.entries(CONFIG)) {
  try {
    await compress(file, cfg)
  } catch (e) {
    console.warn(`✗  ${file}: ${e.message}`)
  }
}
console.log('\nDone.')
