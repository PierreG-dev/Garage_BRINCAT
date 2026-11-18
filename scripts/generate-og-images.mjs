/**
 * One-shot script: builds the 1200x630 social share images in public/images/og/
 * (page photo + dark overlay + title + phone numbers).
 * Re-run after changing a title or a photo: node scripts/generate-og-images.mjs
 */
import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import { join } from 'path'

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')
const PUBLIC = join(ROOT, 'public')
const OUT = join(PUBLIC, 'images', 'og')

const WIDTH = 1200
const HEIGHT = 630
const FONT = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
const PHONES = 'Castelsarrasin 05 63 32 33 78  ·  Montauban 05 63 66 29 61'

const IMAGES = [
  { file: 'home.jpg', photo: 'images/hero-1.jpg', eyebrow: 'Concessionnaire FIAT depuis plus de 50 ans', title: 'Garage FIAT à Castelsarrasin et Montauban' },
  { file: 'services.jpg', photo: 'images/service-reparation.jpg', eyebrow: 'Nos services', title: 'Mécanique, carrosserie, dépannage et révision toutes marques' },
  { file: 'camping-car.jpg', photo: 'images/camping-car-bg.jpg', eyebrow: 'Garage agréé camping-car', title: 'Entretien et réparation de camping-cars en Tarn-et-Garonne' },
  { file: 'a-propos.jpg', photo: 'images/about.jpg', eyebrow: 'Notre histoire', title: 'Une entreprise familiale depuis plus de 50 ans' },
  { file: 'contact.jpg', photo: 'images/garage-castelsarrasin.jpg', eyebrow: 'Contact et horaires', title: 'Deux garages, à Castelsarrasin et à Montauban' },
]

const escape = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;')

/** Naive word wrap, good enough for short titles */
function wrap(text, maxChars) {
  const lines = []
  let line = ''
  for (const word of text.split(' ')) {
    if (line && (line + ' ' + word).length > maxChars) {
      lines.push(line)
      line = word
    } else {
      line = line ? `${line} ${word}` : word
    }
  }
  if (line) lines.push(line)
  return lines
}

function overlay({ eyebrow, title }) {
  const titleLines = wrap(title, 30)
  const lineHeight = 72
  const titleTop = 420 - (titleLines.length - 1) * lineHeight
  return Buffer.from(`
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0F172A" stop-opacity="0.94"/>
      <stop offset="0.6" stop-color="#0F172A" stop-opacity="0.78"/>
      <stop offset="1" stop-color="#0F172A" stop-opacity="0.35"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#shade)"/>
  <rect x="72" y="64" width="48" height="4" fill="#2563EB"/>
  <text x="72" y="112" font-family="${FONT}" font-size="30" font-weight="700" letter-spacing="4" fill="#FFFFFF">GARAGE BRINCAT</text>
  <text x="72" y="${titleTop - 64}" font-family="${FONT}" font-size="24" font-weight="600" letter-spacing="3" fill="#3B82F6">${escape(eyebrow.toUpperCase())}</text>
  ${titleLines
    .map(
      (line, i) =>
        `<text x="72" y="${titleTop + i * lineHeight}" font-family="${FONT}" font-size="62" font-weight="700" fill="#FFFFFF">${escape(line)}</text>`,
    )
    .join('\n  ')}
  <text x="72" y="572" font-family="${FONT}" font-size="26" fill="#FFFFFF" fill-opacity="0.8">${escape(PHONES)}</text>
</svg>`)
}

await mkdir(OUT, { recursive: true })
for (const image of IMAGES) {
  await sharp(join(PUBLIC, image.photo))
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'attention' })
    .composite([{ input: overlay(image) }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(OUT, image.file))
  console.log('✓', image.file)
}
