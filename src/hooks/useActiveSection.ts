import { useEffect, useState } from 'react'

/**
 * Devuelve el id de la sección visible actualmente para resaltar
 * el enlace correspondiente del navbar.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0

      // Línea imaginaria a un 30% de la altura del viewport
      const marker = window.scrollY + window.innerHeight * 0.3
      let current = ids[0] ?? ''

      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue

        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = id
      }

      // Al llegar al final del documento, activar la última sección
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4

      if (atBottom) current = ids[ids.length - 1] ?? current

      setActive(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}
