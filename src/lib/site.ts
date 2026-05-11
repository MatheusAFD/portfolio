export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? 'https://matheusaraujo.vercel.app'
).replace(/\/$/, '')

export const DEFAULT_LOCALE = 'pt' as const
export const LOCALES = ['pt', 'en'] as const

export type Locale = (typeof LOCALES)[number]

export const localeToHtmlLang: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en-US'
}

export const localeToOgLocale: Record<Locale, string> = {
  pt: 'pt_BR',
  en: 'en_US'
}
