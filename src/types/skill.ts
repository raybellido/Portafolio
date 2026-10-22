import type { LucideIcon } from 'lucide-react'

export type SkillLevel = 'Avanzado' | 'Intermedio' | 'Aprendiendo'

export interface Skill {
  name: string
  level: SkillLevel
  icon: LucideIcon
}

export interface SkillGroup {
  id: string
  title: string
  caption: string
  icon: LucideIcon
  skills: Skill[]
}
