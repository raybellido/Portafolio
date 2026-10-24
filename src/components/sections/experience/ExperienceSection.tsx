import { experiences } from '../../../data/experience'
import ExperienceItem from './ExperienceItem'

function ExperienceSection() {
  return (
    <section className="experience-section" id="experiencia">
      <div className="section-heading">
        <p className="eyebrow">EXPERIENCIA</p>
        <h2>Trayectoria profesional</h2>
        <p className="section-description">
          Experiencia desarrollando software y trabajando en equipo.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
