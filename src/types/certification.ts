export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
  technologies?: string[]
  image?: string
}
