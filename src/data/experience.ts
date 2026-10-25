import type { Experience } from '../types/experience'

export const experiences: Experience[] = [
  {
    id: 'maximo-pay',
    company: 'MÁXIMO PAY S.A.C.',
    role: 'Desarrollador Backend',
    period: 'Feb 2026 — Jun 2026',
    location: 'Lima, Perú',
    description:
      'Soporte y mantenimiento de servicios backend desarrollados en TypeScript sobre Node.js, con despliegue y monitoreo en AWS.',
    achievements: [
      'Diagnostiqué y resolví incidencias mediante debugging y revisión de logs.',
      'Validé requests, headers, Session Tokens, Bearer Tokens y payloads para garantizar el funcionamiento de los servicios.',
      'Ejecuté consultas SQL para validación y análisis de información.',
      'Probé APIs con Postman y Bruno en entornos locales y remotos.',
      'Desarrollé y modifiqué funcionalidades backend según requerimientos del negocio.',
      'Gestioné variables de configuración con AWS Parameter Store y desplegué cambios en desarrollo.',
      'Monitoreé servicios con herramientas de AWS y analicé integraciones con proveedores externos del sector financiero.',
      'Colaboré con el equipo en la identificación y el reporte de incidencias.',
    ],
    technologies: ['GraphQL', 'TypeScript', 'Node.js', 'AWS', 'SQL', 'Postman', 'Bruno', 'Git'],
  },
]
