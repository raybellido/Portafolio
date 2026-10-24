import type { SkillGroup } from '../types/skill'

// Logos a color: devicon (SVG multicolor) excepto GitHub/Express/Bruno/Spring Boot,
// que vienen de simple-icons ya pintados con el color de marca.
import javaLogo from '../assets/skills/java.svg'
import springbootLogo from '../assets/skills/springboot.svg'
import nodejsLogo from '../assets/skills/nodejs.svg'
import expressLogo from '../assets/skills/express.svg'
import nestjsLogo from '../assets/skills/nestjs.svg'
import pythonLogo from '../assets/skills/python.svg'
import mysqlLogo from '../assets/skills/mysql.svg'
import mongodbLogo from '../assets/skills/mongodb.svg'
import angularLogo from '../assets/skills/angular.svg'
import reactLogo from '../assets/skills/react.svg'
import typescriptLogo from '../assets/skills/typescript.svg'
import html5Logo from '../assets/skills/html5.svg'
import css3Logo from '../assets/skills/css3.svg'
import tailwindcssLogo from '../assets/skills/tailwindcss.svg'
import bootstrapLogo from '../assets/skills/bootstrap.svg'
import figmaLogo from '../assets/skills/figma.svg'
import vscodeLogo from '../assets/skills/vscode.svg'
import intellijLogo from '../assets/skills/intellij.svg'
import githubLogo from '../assets/skills/github.svg'
import postmanLogo from '../assets/skills/postman.svg'
import swaggerLogo from '../assets/skills/swagger.svg'
import brunoLogo from '../assets/skills/bruno.svg'
import awsLogo from '../assets/skills/aws.svg'

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    caption: 'Lenguajes y frameworks con los que construyo APIs y dominio.',
    skills: [
      { name: 'Java', icon: javaLogo },
      { name: 'Spring Boot', icon: springbootLogo },
      { name: 'Node.js', icon: nodejsLogo },
      { name: 'Express', icon: expressLogo },
      { name: 'NestJS', icon: nestjsLogo },
      { name: 'Python', icon: pythonLogo },
      { name: 'MySQL', icon: mysqlLogo },
      { name: 'MongoDB', icon: mongodbLogo },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    caption: 'Frameworks y estilos para construir interfaces.',
    skills: [
      { name: 'Angular', icon: angularLogo },
      { name: 'React', icon: reactLogo },
      { name: 'TypeScript', icon: typescriptLogo },
      { name: 'HTML5', icon: html5Logo },
      { name: 'CSS', icon: css3Logo },
      { name: 'Tailwind CSS', icon: tailwindcssLogo },
      { name: 'Bootstrap', icon: bootstrapLogo },
      { name: 'Figma', icon: figmaLogo },
    ],
  },
  {
    id: 'herramientas',
    title: 'Herramientas',
    caption: 'Mi entorno de desarrollo y pruebas a diario.',
    skills: [
      { name: 'Visual Studio Code', icon: vscodeLogo },
      { name: 'IntelliJ IDEA', icon: intellijLogo },
      { name: 'GitHub', icon: githubLogo },
      { name: 'Postman', icon: postmanLogo },
      { name: 'Swagger', icon: swaggerLogo },
      { name: 'Bruno', icon: brunoLogo },
      { name: 'AWS', icon: awsLogo },
    ],
  },
]
