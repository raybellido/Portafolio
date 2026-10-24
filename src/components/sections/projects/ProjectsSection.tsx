
import { projects } from '../../../data/projects'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
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

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
