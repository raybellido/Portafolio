import { skillGroups } from '../../../data/skills'

function SkillsSection() {
  return (
    <section className="skills-section" id="stack">
      <div className="section-heading">
        <p className="eyebrow">STACK &amp; HERRAMIENTAS</p>

        <h2>Tecnologías que uso</h2>

        <p className="section-description">
          Herramientas con las que diseño APIs, modelo el dominio
          y llevo un proyecto desde la base de datos hasta la interfaz.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.id}>
            <div className="skill-group-header">
              <h3>{group.title}</h3>
            </div>

            <p className="skill-group-caption">{group.caption}</p>

            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li className="skill-item" key={skill.name} title={skill.name}>
                  <img
                    className="skill-logo"
                    src={skill.icon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span className="skill-name">{skill.name}</span>
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
