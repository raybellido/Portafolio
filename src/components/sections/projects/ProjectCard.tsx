import { GithubIcon } from "../../BrandIcons";
import type { Project } from '../../../types/project'
import { ArrowUp } from "lucide-react";

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const isInDevelopment = project.status === 'En desarrollo'

  return (
    <article className="project-card">
      <div className="project-card-top">
        <div className="project-icon">
          <span>&lt;/&gt;</span>
        </div>

        <span
          className={`project-status ${
            isInDevelopment ? 'status-development' : 'status-completed'
          }`}
        >
          <span className="status-dot" />
          {project.status}
        </span>
      </div>

      <h3>{project.title}</h3>

      <p className="project-description">{project.description}</p>

      <div className="project-technologies">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <GithubIcon size={17} />
          Código
        </a>

        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Demo
            <ArrowUp size={16} />
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
