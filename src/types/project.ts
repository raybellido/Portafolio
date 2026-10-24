import type { ComponentType } from 'react'

/** Icono de Lucide que representa al proyecto */
export type ProjectIcon = ComponentType<{ size?: number }>

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  status: 'Completado' | 'En desarrollo'
  /** Icono que representa el proyecto */
  icon: ProjectIcon
  /** Captura de pantalla del proyecto */
  image: string
  /** ID o URL del video de YouTube (opcional). Al hacer clic en la imagen se abre el modal. */
  videoId?: string
  /** Enlace a la demo publicada (opcional) */
  demoUrl?: string
  githubUrl: string
}
