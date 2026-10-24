export interface Skill {
  name: string
  /** Logo a color del asset (SVG) */
  icon: string
}

export interface SkillGroup {
  id: string
  title: string
  caption: string
  skills: Skill[]
}
