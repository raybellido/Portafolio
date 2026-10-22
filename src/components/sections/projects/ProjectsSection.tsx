
import { useState } from 'react'
import { projects } from '../../../data/projects'
import ProjectCard from './ProjectCard'

type ProjectFilter = 'Todos' | 'Backend' | 'Full Stack'

function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('Todos')

  const filteredProjects = projects.filter((project) => {
    return filter === 'Todos' || project.category === filter
  })

  const filters: ProjectFilter[] = ['Todos', 'Backend', 'Full Stack']

  return (
    <section className="projects-section" id="proyectos">
      <div className="section-heading">
        <p className="eyebrow">TRABAJO SELECCIONADO</p>

        <h2>Proyectos que estoy construyendo</h2>

        <p className="section-description">
          Proyectos donde aplico mis conocimientos de backend,
          diseño de APIs y arquitectura de software.
        </p>
      </div>

      <div className="project-filters" aria-label="Filtrar proyectos">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={`filter-button ${filter === item ? 'active' : ''}`}
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
