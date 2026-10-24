import type { Experience } from '../../../types/experience'

interface ExperienceItemProps {
  experience: Experience
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="experience-item">
      <div className="experience-header">
        <div>
          <h3>{experience.role}</h3>
          <p className="experience-company">
            {experience.company}
            {experience.url ? (
              <a
                href={experience.url}
                target="_blank"
                rel="noreferrer"
                className="experience-company-link"
              >
                ↗
              </a>
            ) : null}
          </p>
        </div>
        <span className="experience-period">{experience.period}</span>
      </div>

      {experience.location && (
        <p className="experience-location">{experience.location}</p>
      )}

      <p className="experience-description">{experience.description}</p>

      {experience.achievements?.length && (
        <ul className="experience-achievements">
          {experience.achievements.map((achievement) => (
            <li key={achievement}>
              <span className="experience-dot" /> {achievement}
            </li>
          ))}
        </ul>
      )}

      {experience.technologies?.length && (
        <div className="experience-technologies">
          {experience.technologies.map((tech) => (
            <span key={tech} className="experience-tech">
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export default ExperienceItem
