/**
 * Rasteriza a PNG las capturas de proyecto exportadas en SVG.
 *
 * Los SVG exportados desde editores gráficos pesan entre 500 KB y 1 MB porque
 * cada píxel de la captura se convierte en un `path` vectorial. Convertirlos
 * a PNG reduce el peso ~95% sin perder nitidez a escala de tarjeta.
 *
 * Uso:
 *   1. Exportá la captura como SVG y dejala en src/assets/projects/
 *   2. npm run images:raster
 *   3. Actualizá el import en src/data/projects.ts (de .svg a .png)
 *
 * Los placeholders SVG de menos de 50 KB se omiten automáticamente.
 */
import sharp from 'sharp'
import { readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

const dir = resolve('src/assets/projects')
const TARGET_WIDTH = 1600 // ~2.6x el ancho real de la tarjeta (~600px) en 2x

for (const file of readdirSync(dir).filter((f) => f.endsWith('.svg'))) {
  const input = resolve(dir, file)
  const output = resolve(dir, file.replace(/\.svg$/, '.png'))

  const meta = await sharp(input, { density: 96 }).metadata()
  const svgSize = statSync(input).size
  if (svgSize < 50_000) {
    console.log(`SKIP (ya es placeholder): ${file}`)
    continue
  }

  await sharp(input, { density: 192 })
    .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
    .png({ quality: 90, compressionLevel: 9, palette: true })
    .toFile(output)

  const pngSize = statSync(output).size
  console.log(
    `${file}  ${meta.width}x${meta.height}  ${(svgSize / 1024).toFixed(0)}KB SVG  ->  ` +
      `${file.replace(/\.svg$/, '.png')}  ${(pngSize / 1024).toFixed(0)}KB PNG  ` +
      `(-${Math.round((1 - pngSize / svgSize) * 100)}%)`,
  )
}
