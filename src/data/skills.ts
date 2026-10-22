import {
  Atom,
  Braces,
  Coffee,
  Container,
  Database,
  GitBranch,
  Layers,
  Leaf,
  Lock,
  Package,
  Palette,
  Plug,
  Server,
  Settings,
  SquareTerminal,
  Webhook,
} from 'lucide-react'
import type { SkillGroup } from '../types/skill'

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    caption: 'La base de lo que construyo día a día.',
    icon: Server,
    skills: [
      { name: 'Java 21', level: 'Avanzado', icon: Coffee },
      { name: 'Spring Boot', level: 'Avanzado', icon: Leaf },
      { name: 'Spring Security / JWT', level: 'Avanzado', icon: Lock },
      { name: 'Spring Data JPA', level: 'Intermedio', icon: Layers },
      { name: 'Maven', level: 'Intermedio', icon: Package },
    ],
  },
  {
    id: 'datos',
    title: 'Datos e infraestructura',
    caption: 'Persistencia, contenedores y despliegue.',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 'Avanzado', icon: Database },
      { name: 'REST APIs', level: 'Avanzado', icon: Plug },
      { name: 'Docker', level: 'Intermedio', icon: Container },
      { name: 'Git', level: 'Avanzado', icon: GitBranch },
      { name: 'Linux / Bash', level: 'Intermedio', icon: SquareTerminal },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend y herramientas',
    caption: 'Interfaces y entorno de desarrollo.',
    icon: Settings,
    skills: [
      { name: 'React', level: 'Intermedio', icon: Atom },
      { name: 'TypeScript', level: 'Intermedio', icon: Braces },
      { name: 'CSS / Tailwind', level: 'Intermedio', icon: Palette },
      { name: 'IntelliJ IDEA', level: 'Avanzado', icon: Settings },
      { name: 'Postman', level: 'Intermedio', icon: Webhook },
    ],
  },
]
