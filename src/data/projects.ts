import { Clapperboard, MessagesSquare, PackageSearch, TicketCheck } from 'lucide-react'
import type { Project } from '../types/project'

import showflixImage from '../assets/projects/showflix.png'
import forohubImage from '../assets/projects/forohub.png'
import helpdeskImage from '../assets/projects/helpdesk.svg'
import orderflowImage from '../assets/projects/orderflow.svg'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Showflix',
    description:
      'En Showflix apliqué Spring Security con JWT para proteger una API REST y la consumí desde Angular. Aprendí a paginar resultados, buscar por título y gestionar favoritos por usuario.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'JWT', 'Spring Security', 'Maven'],
    status: 'Completado',
    icon: Clapperboard,
    image: showflixImage,
    videoId: 'https://www.youtube.com/watch?v=iXrroFRY608',
    demoUrl: 'https://showflix-3n9.pages.dev/',
    githubUrl: 'https://github.com/raybellido/showflix---backend',
  },
  {
    id: 2,
    title: 'ForoHub',
    description:
      'ForoHub me enseñó a modelar un dominio completo con entidades y DTOs. Practiqué la validación de datos y devolver respuestas estandarizadas en una API REST con Spring Boot.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'JPA', 'Hibernate', 'REST APIs'],
    status: 'Completado',
    icon: MessagesSquare,
    image: forohubImage,
    videoId: 'https://www.youtube.com/watch?v=CzGv5nDLv2A',
    demoUrl: 'https://c516d3ac.forohub.pages.dev/login',
    githubUrl: 'https://github.com/raybellido/API-FOROHUB',
  },
  {
    id: 3,
    title: 'Helpdesk',
    description:
      'Con Helpdesk aprendí arquitectura hexagonal, separando el dominio de la infraestructura. Implementé autenticación OAuth2 con JWT y construí el frontend de tickets en React.',
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'OAuth2', 'Docker'],
    status: 'Completado',
    icon: TicketCheck,
    image: helpdeskImage,
    videoId: '',
    demoUrl: 'https://raybellido.github.io/TICKET-FRONT/',
    githubUrl: 'https://github.com/raybellido/TICKET-api',
  },
  {
    id: 4,
    title: 'OrderFlow',
    description:
      'Plataforma de gestión de pedidos en desarrollo, diseñada con DDD y arquitectura hexagonal, con planes para incorporar inventario y eventos asíncronos.',
    technologies: ['Java 21', 'Spring Boot', 'DDD', 'Maven'],
    status: 'En desarrollo',
    icon: PackageSearch,
    image: orderflowImage,
    videoId: '',
    demoUrl: '',
    githubUrl: 'https://github.com/raybellido/OrderFlow',
  },
]
