import { skillGroups } from '../../../data/skills'
import type { SkillLevel } from '../../../types/skill'

const levelClass: Record<SkillLevel, string> = {
  Avanzado: 'level-advanced',
  Intermedio: 'level-intermediate',
  Aprendiendo: 'level-learning',
}

function SkillsSection() {
  return (
    <section className="skills-section" id="stack">
      <div className="section-heading">
        <p className="eyebrow">STACK &amp; HERRAMIENTAS</p>

        <h2>Tecnologías que uso a diario</h2>

        <p className="section-description">
          Herramientas con las que diseño APIs, modelo el dominio
          y llevo un proyecto desde la base de datos hasta la interfaz.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.id}>
            <div className="skill-group-header">
              <span className="skill-group-icon">
                <group.icon size={20} />
              </span>
              <h3>{group.title}</h3>
            </div>

            <p className="skill-group-caption">{group.caption}</p>

            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li className="skill-item" key={skill.name}>
                  <skill.icon size={16} />
                  <span className="skill-name">{skill.name}</span>
                  <span className={`skill-level ${levelClass[skill.level]}`}>
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
