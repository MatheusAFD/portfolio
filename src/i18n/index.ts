import { useMatches } from '@tanstack/react-router'
import { DEFAULT_LOCALE, LOCALES, type Locale } from '@/lib/site'
import type { Dict } from './dict'
import { en } from './en'
import { pt } from './pt'

export const dictionaries: Record<Locale, Dict> = { pt, en }

export function getDict(locale: Locale): Dict {
  return dictionaries[locale]
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value)
}

export function useLocale(): Locale {
  const matches = useMatches()
  for (const match of matches) {
    const ctx = match.context as { locale?: Locale } | undefined
    if (ctx?.locale) return ctx.locale
    const segment = match.pathname.split('/').filter(Boolean)[0]
    if (isLocale(segment)) return segment
  }
  return DEFAULT_LOCALE
}

export function useDict(): Dict {
  return getDict(useLocale())
}
