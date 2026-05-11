import { yearsOfExperience } from '@/lib/years'

const years = yearsOfExperience()

export const profile = {
  name: 'Matheus Araújo',
  initials: 'MA',
  company: 'Twila',
  companyUrl: 'https://twila.com.br',
  email: 'matheus.daf@outlook.com',
  yearsOfExperience: years,
  links: {
    github: 'https://github.com/matheusafd',
    linkedin: 'https://www.linkedin.com/in/matheusaraujof',
    email: 'mailto:matheus.daf@outlook.com'
  }
} as const
