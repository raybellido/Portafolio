/**
 * Extrae el ID de un video de YouTube a partir de distintas formas de entrada:
 *   - ID suelto:            "dQw4w9WgXcQ"
 *   - Watch:                "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
 *   - Short:                "https://youtu.be/dQw4w9WgXcQ"
 *   - Embed / Shorts / Live: "https://www.youtube.com/embed/dQw4w9WgXcQ"
 *
 * Devuelve undefined si no se puede deducir un ID válido.
 */
export function getYouTubeId(input?: string): string | undefined {
  if (!input) return undefined

  const value = input.trim()
  if (/^[\w-]{11}$/.test(value)) return value

  try {
    const url = new URL(value.startsWith('http') ? value : `https://${value}`)

    if (url.hostname === 'youtu.be') {
      const id = url.pathname.slice(1)
      return /^[\w-]{11}$/.test(id) ? id : undefined
    }

    if (url.hostname.endsWith('youtube.com') || url.hostname.endsWith('youtube-nocookie.com')) {
      if (url.pathname === '/watch') {
        const id = url.searchParams.get('v')
        return id && /^[\w-]{11}$/.test(id) ? id : undefined
      }

      const match = url.pathname.match(/\/(?:embed|shorts|live|v)\/([\w-]{11})/)
      if (match) return match[1]
    }
  } catch {
    // No es una URL válida: se devuelve undefined
  }

  return undefined
}
