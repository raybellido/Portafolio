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
      'Plataforma de películas con backend en Java y Spring Boot, y una interfaz frontend que consume datos de prueba.',
    technologies: ['Java', 'Spring Boot', 'Angular'],
    status: 'Completado',
    image: showflixImage,
    videoId: 'https://www.youtube.com/watch?v=iXrroFRY608',
    demoUrl: 'https://showflix-3n9.pages.dev/',
    githubUrl: 'https://github.com/',
  },
  {
    id: 2,
    title: 'ForoHub',
    description:
      'Aplicación de foro para gestionar tópicos y conversaciones, desarrollada como proyecto de aprendizaje.',
    technologies: ['Java', 'Spring Boot', 'API REST'],
    status: 'Completado',
    image: forohubImage,
    videoId: 'https://www.youtube.com/watch?v=CzGv5nDLv2A',
    demoUrl: 'https://c516d3ac.forohub.pages.dev/login',
    githubUrl: 'https://github.com/',
  },
  {
    id: 3,
    title: 'Helpdesk',
    description:
      'Sistema de tickets con reglas de negocio, gestión de estados y separación de responsabilidades mediante arquitectura hexagonal.',
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript'],
    status: 'Completado',
    image: helpdeskImage,
    videoId: '',
    demoUrl: '',
    githubUrl: 'https://github.com/',
  },
  {
    id: 4,
    title: 'OrderFlow',
    description:
      'Plataforma de gestión de pedidos en desarrollo, diseñada con DDD y arquitectura hexagonal, con planes para incorporar inventario y eventos asíncronos.',
    technologies: ['Java 21', 'Spring Boot', 'DDD', 'Maven'],
    status: 'En desarrollo',
    image: orderflowImage,
    videoId: '',
    demoUrl: '',
    githubUrl: 'https://github.com/',
  },
]
