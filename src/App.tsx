import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './components/BrandIcons'
import ProjectsSection from './components/sections/projects/ProjectsSection'
import SkillsSection from './components/sections/skills/SkillsSection'
import { useActiveSection } from './hooks/useActiveSection'
import './App.css'

const NAV_SECTIONS = ['inicio', 'proyectos', 'stack', 'sobre-mi', 'contacto'] as const

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'stack', label: 'Stack' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'contacto', label: 'Contacto' },
]

function App() {
  const activeSection = useActiveSection(NAV_SECTIONS)

  return (
    <div className="portfolio">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="navbar">
        <a href="#inicio" className="logo">
          <span className="logo-mark">&lt;/&gt;</span>
          <span>DevPortfolio</span>
        </a>

        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : undefined}
              aria-current={activeSection === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="nav-github"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon size={20} />
        </a>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="availability">
              <span className="status-dot" />
              Construyendo proyectos y aprendiendo
            </span>

            <p className="eyebrow">HOLA, SOY DESARROLLADOR</p>

            <h1>
              Construyo soluciones
              <br />
              con <span>código y propósito.</span>
            </h1>

            <p className="hero-description">
              Desarrollador enfocado en Backend Java y Spring Boot.
              Me interesa diseñar APIs, construir buenas reglas de negocio
              y crear software mantenible.
            </p>

            <div className="hero-actions">
              <a href="#proyectos" className="button-primary">
                Ver mis proyectos
                <ArrowUpRight size={18} />
              </a>

              <a href="#sobre-mi" className="button-secondary">
                Conocer más
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <GithubIcon size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-decoration" aria-hidden="true">
            <div className="code-card">
              <div className="code-card-header">
                <span />
                <span />
                <span />
                <p>developer.java</p>
              </div>

              <div className="code-content">
                <p><span className="code-purple">public class</span> Developer {'{'}</p>
                <p className="indent"><span className="code-purple">String</span> role = <span className="code-green">"Backend"</span>;</p>
                <p className="indent"><span className="code-purple">String</span> language = <span className="code-green">"Java"</span>;</p>
                <p className="indent"><span className="code-purple">boolean</span> learning = <span className="code-orange">true</span>;</p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>

          <a className="scroll-indicator" href="#proyectos">
            <ArrowDown size={16} />
            Explorar portafolio
          </a>
        </section>

        <ProjectsSection />

        <SkillsSection />

        <section className="about-section" id="sobre-mi">
          <div className="section-heading">
            <p className="eyebrow">SOBRE MÍ</p>
            <h2>Aprender construyendo.</h2>
            <p>
              Me enfoco en mejorar mis habilidades de desarrollo,
              comprender la arquitectura del software y crear proyectos
              que demuestren mi evolución técnica.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="section-heading">
            <p className="eyebrow">CONTACTO</p>
            <h2>¿Construimos algo juntos?</h2>
            <p>
              Estoy abierto a conectar con otros desarrolladores
              y conocer oportunidades profesionales.
            </p>
          </div>

          <a href="https://github.com/" className="button-primary">
            Visitar GitHub
            <ArrowUpRight size={18} />
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>Diseñado y construido con React + TypeScript.</p>
        <p>© {new Date().getFullYear()} · Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
