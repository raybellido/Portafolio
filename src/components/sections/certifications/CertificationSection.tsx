import { certifications } from '../../../data/certifications'
import awsClfImage from '../../../assets/certifications/aws-clf.png'
import oracleAluraImage from '../../../assets/certifications/oracle-alura.png'

const certImages: Record<string, string> = {
  'cert-aws-cloud-practitioner': awsClfImage,
  'cert-oracle-alura': oracleAluraImage,
}

function CertificationSection() {
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
        {certifications.map((cert) => (
          <article
            key={cert.id}
            className="certification-card"
          >
            {certImages[cert.id] && (
              <img
                src={certImages[cert.id]}
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

            {cert.technologies?.length && (
              <div className="certification-technologies">
                {cert.technologies.map((tech) => (
                  <span key={tech} className="certification-tech">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default CertificationSection
