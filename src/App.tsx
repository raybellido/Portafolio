import { useState } from 'react'
import { ArrowDown, ArrowUpRight, FileText, X } from 'lucide-react'
import heroImage from './assets/hero.png'
import { GithubIcon, LinkedinIcon } from './components/BrandIcons'
import ProjectsSection from './components/sections/projects/ProjectsSection'
import SkillsSection from './components/sections/skills/SkillsSection'
import ExperienceSection from './components/sections/experience/ExperienceSection'
import CertificationSection from './components/sections/certifications/CertificationSection'
import { useActiveSection } from './hooks/useActiveSection'
import cvImage from './assets/cv.png'
import './App.css'

const NAV_SECTIONS = ['inicio', 'proyectos', 'experiencia', 'stack', 'certificaciones', 'sobre-mi', 'contacto'] as const

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'stack', label: 'Stack' },
  { id: 'certificaciones', label: 'Certificaciones' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'contacto', label: 'Contacto' },
]

function App() {
  const activeSection = useActiveSection(NAV_SECTIONS)
  const [cvModalOpen, setCvModalOpen] = useState(false)
  const [certModal, setCertModal] = useState<{ open: boolean; src: string | null; title: string }>({
    open: false,
    src: null,
    title: '',
  })

  const openCertModal = (src: string, title: string) => {
    setCertModal({ open: true, src, title })
  }

  const closeCertModal = () => {
    setCertModal({ open: false, src: null, title: '' })
  }

  return (
    <div className="portfolio">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="navbar">
        <a href="#inicio" className="logo">
          <span className="logo-mark">RB</span>
          <span>Ray Bellido</span>
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

        
      </header>

      <main id="contenido" tabIndex={-1}>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="availability">
              <span className="status-dot" />
              Construyendo proyectos y aprendiendo
            </span>

            <p className="eyebrow">BIENVENIDO A MI PORTAFOLIO</p>

            <h1>
              Soy Ray Bellido
              <br />
              <span>Desarrollador Web FullStack</span>
            </h1>

            <p className="hero-description">
              Bienvenido a mi portafolio
            </p>

            <div className="hero-actions">
              <a href="#proyectos" className="button-primary">
                Ver mis proyectos
                <ArrowUpRight size={18} />
              </a>

              <a href="#" className="button-secondary" onClick={(e) => { e.preventDefault(); setCvModalOpen(true) }} aria-label="Ver resumen (CV)" role="button" aria-expanded={cvModalOpen} aria-controls="cv-modal">
                Resumen <FileText size={18} />
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/raybellido" target="_blank" rel="noreferrer">
                <GithubIcon size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ray-bellido/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <img
              src={heroImage}
              alt="Foto de perfil de Ray Bellido"
              className="profile-image"
              loading="lazy"
              decoding="async"
            />
          </div>

          <a className="scroll-indicator" href="#proyectos">
            <ArrowDown size={16} />
            Explorar portafolio
          </a>
        </section>

        <ProjectsSection />

        <ExperienceSection />

        <SkillsSection />

        <CertificationSection onOpenCert={openCertModal} />

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

          <a href="https://github.com/raybellido" className="button-primary">
            Visitar GitHub
            <ArrowUpRight size={18} />
          </a>
        </section>

        {cvModalOpen && (
          <div className="modal-overlay" onClick={() => setCvModalOpen(false)}>
            <div className="modal modal-cv" id="cv-modal" role="dialog" aria-modal="true" aria-label="Currículum Vitae de Ray Bellido" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="modal-close"
                onClick={() => setCvModalOpen(false)}
                aria-label="Cerrar CV"
              >
                <X size={20} />
              </button>
              <img
                src={cvImage}
                alt="Currículum Vitae de Ray Bellido"
                className="cv-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}

        {certModal.open && certModal.src && (
          <div className="modal-overlay" onClick={closeCertModal}>
            <div className="modal modal-cv" role="dialog" aria-modal="true" aria-label={`Certificado ${certModal.title}`} onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="modal-close"
                onClick={closeCertModal}
                aria-label="Cerrar certificado"
              >
                <X size={20} />
              </button>
              <img
                src={certModal.src}
                alt={`Certificado ${certModal.title}`}
                className="cv-image"
                loading="lazy"
                decoding="async"
              />
              <p className="modal-caption">{certModal.title}</p>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Diseñado y construido con React + TypeScript.</p>
        <p>© {new Date().getFullYear()} Ray Bellido · Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
