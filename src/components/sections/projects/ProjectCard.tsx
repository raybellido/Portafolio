import { useCallback, useState } from 'react'
import { ArrowUpRight, Play } from 'lucide-react'
import { GithubIcon } from '../../BrandIcons'
import type { Project } from '../../../types/project'
import { getYouTubeId } from '../../../utils/youtube'
import VideoModal from './VideoModal'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isInDevelopment = project.status === 'En desarrollo'
  const videoId = getYouTubeId(project.videoId)

  const openModal = useCallback(() => setIsModalOpen(true), [])
  const closeModal = useCallback(() => setIsModalOpen(false), [])

  return (
    <article className="project-card">
      <div className="project-media">
        <img
          src={project.image}
          alt={`Captura de pantalla de ${project.title}`}
          loading="lazy"
          decoding="async"
        />

        {videoId ? (
          <button
            type="button"
            className="project-media-play"
            onClick={openModal}
            aria-label={`Ver video de ${project.title}`}
          >
            <span className="project-media-play-icon">
              <Play size={17} fill="currentColor" />
            </span>
            <span className="project-media-play-label">Ver demo</span>
          </button>
        ) : (
          <span className="project-media-badge">Captura</span>
        )}
      </div>

      <div className="project-card-body">
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
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <GithubIcon size={16} />
            Código
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Demo
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <span className="project-link is-disabled" aria-disabled="true">
              Demo
              <ArrowUpRight size={16} />
            </span>
          )}
        </div>
      </div>

      {isModalOpen && videoId && (
        <VideoModal videoId={videoId} title={project.title} onClose={closeModal} />
      )}
    </article>
  )
}

export default ProjectCard
