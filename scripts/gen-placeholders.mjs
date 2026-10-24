// Generador de placeholders SVG para las tarjetas de proyecto.
// Uso: node scripts/gen-placeholders.mjs
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(here, '..', 'src', 'assets', 'projects')

const projects = [
  { slug: 'showflix', name: 'Showflix', accent: '#ef4444', tag: 'Streaming' },
  { slug: 'forohub', name: 'ForoHub', accent: '#f59e0b', tag: 'Foro' },
  { slug: 'helpdesk', name: 'Helpdesk', accent: '#3b82f6', tag: 'Tickets' },
  { slug: 'orderflow', name: 'OrderFlow', accent: '#8b5cf6', tag: 'Pedidos' },
]

function build({ slug, name, accent, tag }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720" role="img" aria-label="Captura de ${name}">
  <defs>
    <linearGradient id="bg-${slug}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d0d11"/>
      <stop offset="100%" stop-color="#15151a"/>
    </linearGradient>
    <radialGradient id="glow-${slug}" cx="0.25" cy="0.15" r="0.9">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.30"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bar-${slug}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0.25"/>
    </linearGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#bg-${slug})"/>
  <rect width="1280" height="720" fill="url(#glow-${slug})"/>

  <!-- Ventana del navegador -->
  <g>
    <rect x="140" y="96" width="1000" height="528" rx="16" fill="#16161b" stroke="#2c2c34" stroke-width="1.5"/>
    <path d="M140 112a16 16 0 0 1 16-16h968a16 16 0 0 1 16 16v34H140z" fill="#212129"/>
    <circle cx="172" cy="121" r="6.5" fill="#fb7185"/>
    <circle cx="196" cy="121" r="6.5" fill="#fbbf24"/>
    <circle cx="220" cy="121" r="6.5" fill="#34d399"/>
    <rect x="256" y="110" width="300" height="22" rx="11" fill="#111116"/>
    <text x="276" y="126" font-family="Inter, system-ui, sans-serif" font-size="11" fill="#5b5b66">${slug}.pages.dev</text>

    <!-- Contenido -->
    <rect x="180" y="190" width="300" height="20" rx="10" fill="url(#bar-${slug})"/>
    <rect x="180" y="224" width="200" height="12" rx="6" fill="#2a2a32"/>

    <g fill="#1f1f26">
      <rect x="180" y="270" width="216" height="140" rx="12"/>
      <rect x="412" y="270" width="216" height="140" rx="12"/>
      <rect x="644" y="270" width="216" height="140" rx="12"/>
      <rect x="876" y="270" width="216" height="140" rx="12"/>
    </g>
    <g fill="${accent}" opacity="0.22">
      <rect x="196" y="286" width="184" height="108" rx="8"/>
      <rect x="428" y="286" width="184" height="108" rx="8"/>
      <rect x="660" y="286" width="184" height="108" rx="8"/>
      <rect x="892" y="286" width="184" height="108" rx="8"/>
    </g>

    <g fill="#2a2a32">
      <rect x="180" y="440" width="300" height="14" rx="7"/>
      <rect x="180" y="466" width="240" height="14" rx="7"/>
      <rect x="180" y="492" width="272" height="14" rx="7"/>
    </g>

    <rect x="180" y="540" width="120" height="34" rx="9" fill="${accent}" opacity="0.85"/>
    <rect x="316" y="540" width="120" height="34" rx="9" fill="none" stroke="#33333c"/>
  </g>

  <!-- Marca de agua -->
  <g text-anchor="middle">
    <text x="640" y="690" font-family="Inter, system-ui, sans-serif" font-size="17" font-weight="700" letter-spacing="3" fill="${accent}" opacity="0.75">${name.toUpperCase()}</text>
    <text x="640" y="60" font-family="Inter, system-ui, sans-serif" font-size="14" fill="#4a4a55">${tag} · imagen de reemplazo</text>
  </g>
</svg>
`
}

mkdirSync(outDir, { recursive: true })

for (const project of projects) {
  const file = resolve(outDir, `${project.slug}.svg`)
  writeFileSync(file, build(project), 'utf8')
  console.log(`generado: src/assets/projects/${project.slug}.svg`)
}
