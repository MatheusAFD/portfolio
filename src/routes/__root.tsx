/// <reference types="vite/client" />
import { createRootRoute, HeadContent, Scripts, useRouterState } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { ContactFab } from '@/components/layout/contact-fab'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { isLocale } from '@/i18n'
import { DEFAULT_LOCALE, type Locale, localeToHtmlLang, SITE_URL } from '@/lib/site'
import appCss from '@/styles/globals.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#1b1813' },
      { name: 'author', content: 'Matheus Araújo' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:site_name', content: 'Matheus Araújo' },
      { property: 'og:image', content: `${SITE_URL}/og-image.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:alt', content: 'Matheus Araújo — Software Engineer' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/og-image.png` },
      { name: 'twitter:image:alt', content: 'Matheus Araújo — Software Engineer' },
      { name: 'twitter:creator', content: '@matheusafd' }
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  }),
  shellComponent: RootDocument
})

function useCurrentLocale(): Locale {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const segment = pathname.split('/').filter(Boolean)[0]
  return isLocale(segment) ? segment : DEFAULT_LOCALE
}

function RootDocument({ children }: { children: ReactNode }) {
  const locale = useCurrentLocale()
  return (
    <html lang={localeToHtmlLang[locale]}>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="relative min-h-dvh">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <ContactFab />
        <Scripts />
      </body>
    </html>
  )
}
