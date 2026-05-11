import { getDict } from '@/i18n'
import { type Locale, localeToHtmlLang, localeToOgLocale, SITE_URL } from '@/lib/site'
import { personJsonLd, profilePageJsonLd, websiteJsonLd } from '@/lib/structured-data'

const TITLE_BY_LOCALE: Record<Locale, string> = {
  pt: 'Matheus Araújo — Software Engineer',
  en: 'Matheus Araújo — Software Engineer'
}

export function localeMeta(locale: Locale) {
  const t = getDict(locale)
  const title = TITLE_BY_LOCALE[locale]
  const description = t.profile.headline
  const url = `${SITE_URL}/${locale}`
  const altLocale: Locale = locale === 'pt' ? 'en' : 'pt'
  const altOgLocale = localeToOgLocale[altLocale]

  return {
    meta: [
      { title },
      { name: 'description', content: description },

      { property: 'og:type', content: 'profile' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:locale', content: localeToOgLocale[locale] },
      { property: 'og:locale:alternate', content: altOgLocale },
      { property: 'profile:first_name', content: 'Matheus' },
      { property: 'profile:last_name', content: 'Araújo' },
      { property: 'profile:username', content: 'matheusafd' },

      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description }
    ],
    links: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', hreflang: 'pt-BR', href: `${SITE_URL}/pt` },
      { rel: 'alternate', hreflang: 'en-US', href: `${SITE_URL}/en` },
      { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/pt` }
    ],
    scripts: [
      { type: 'application/ld+json', children: personJsonLd(locale) },
      { type: 'application/ld+json', children: profilePageJsonLd(locale) },
      { type: 'application/ld+json', children: websiteJsonLd(locale) }
    ]
  }
}

export function htmlLangFor(locale: Locale): string {
  return localeToHtmlLang[locale]
}
