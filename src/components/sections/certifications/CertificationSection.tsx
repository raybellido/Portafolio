import { certifications } from '../../../data/certifications'
import awsClfImage from '../../../assets/certifications/aws-clf.png'
import oracleAluraImage from '../../../assets/certifications/oracle-alura.png'

const certImages: Record<string, string> = {
  'cert-aws-cloud-practitioner': awsClfImage,
  'cert-oracle-alura': oracleAluraImage,
}

interface CertificationSectionProps {
  onOpenCert?: (src: string, title: string) => void
}

function CertificationSection({ onOpenCert }: CertificationSectionProps) {
  return (
    <section className="certifications-section" id="certificaciones">
      <div className="section-heading">
        <p className="eyebrow">CERTIFICACIONES</p>
        <h2>Certificaciones y reconocimientos</h2>
        <p className="section-description">
          Certificaciones obtenidas en tecnologías y herramientas que aplico en mis proyectos.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert) => {
          const imageSrc = certImages[cert.id]

          return (
            <article
              key={cert.id}
              className={`certification-card ${imageSrc && onOpenCert ? 'certification-card-clickable' : ''}`}
              onClick={() => {
                if (imageSrc && onOpenCert) {
                  onOpenCert(imageSrc, cert.title)
                }
              }}
              role={imageSrc && onOpenCert ? 'button' : undefined}
              tabIndex={imageSrc && onOpenCert ? 0 : undefined}
              onKeyDown={(event) => {
                if (!imageSrc || !onOpenCert) return
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  onOpenCert(imageSrc, cert.title)
                }
              }}
              aria-label={imageSrc && onOpenCert ? `Ampliar certificado de ${cert.title}` : undefined}
            >
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt={`Certificado de ${cert.title}`}
                  className="certification-image"
                  loading="lazy"
                  decoding="async"
                />
              )}

              <div className="certification-header">
                <h3>{cert.title}</h3>
                {cert.url && cert.url !== '#' ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="certification-link"
                    aria-label={`Ver credencial de ${cert.title}`}
                    onClick={(event) => event.stopPropagation()}
                  >
                    Ver credencial ↗
                  </a>
                ) : null}
              </div>

              <p className="certification-issuer">
                {cert.issuer} · {cert.date}
              </p>

              {cert.credentialId && (
                <p className="certification-credential">
                  ID: {cert.credentialId}
                </p>
              )}

              {cert.technologies?.length ? (
                <div className="certification-technologies">
                  {cert.technologies.map((tech) => (
                    <span key={tech} className="certification-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default CertificationSection
