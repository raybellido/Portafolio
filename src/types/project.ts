export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  status: 'Completado' | 'En desarrollo'
  category: 'Backend' | 'Full Stack'
  githubUrl: string
  demoUrl?: string
}