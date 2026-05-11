import { profile } from '@/data/profile'
import { getDict } from '@/i18n'
import { type Locale, localeToHtmlLang, SITE_URL } from '@/lib/site'

const PERSON_ID = `${SITE_URL}/#person`
const ORG_ID = `${SITE_URL}/#twila`

export function personJsonLd(locale: Locale): string {
  const t = getDict(locale)
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: profile.name,
    url: SITE_URL,
    image: 'https://github.com/matheusafd.png',
    jobTitle: t.profile.role,
    description: t.profile.aboutSummary,
    worksFor: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: profile.company,
      url: profile.companyUrl
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fortaleza',
      addressRegion: 'CE',
      addressCountry: 'BR'
    },
    sameAs: [profile.links.github, profile.links.linkedin],
    email: profile.email,
    knowsAbout: [
      'React',
      'TypeScript',
      'Next.js',
      'Node.js',
      'GraphQL',
      'TanStack',
      'Web Performance',
      'Design Systems'
    ],
    knowsLanguage: ['Portuguese', 'English'],
    nationality: 'Brazilian'
  }
  return JSON.stringify(data)
}

export function profilePageJsonLd(locale: Locale): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: `${SITE_URL}/${locale}`,
    inLanguage: localeToHtmlLang[locale],
    dateModified: new Date().toISOString().slice(0, 10),
    mainEntity: { '@id': PERSON_ID },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630
    }
  }
  return JSON.stringify(data)
}

export function websiteJsonLd(locale: Locale): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: profile.name,
    inLanguage: localeToHtmlLang[locale],
    publisher: { '@id': PERSON_ID }
  }
  return JSON.stringify(data)
}
