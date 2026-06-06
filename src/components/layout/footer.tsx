import { profile } from '@/data/profile'
import { useDict } from '@/i18n'

export function Footer() {
  const t = useDict()
  const year = new Date().getFullYear()
  return (
    <footer className='border-t border-border py-10'>
      <div className='container-app flex flex-col items-start justify-between gap-4 text-sm text-fg-muted md:flex-row md:items-center'>
        <p>
          © {year} {profile.name}.
        </p>
        <div className='flex items-center gap-4'>
          <a
            href='https://github.com/MatheusAFD/portfolio-react'
            target='_blank'
            rel='noreferrer'
            className='hover:text-fg'
          >
            {t.footer.source}
          </a>
          <a
            href={profile.links.linkedin}
            target='_blank'
            rel='noreferrer'
            className='hover:text-fg'
          >
            {t.footer.linkedin}
          </a>
          <a href={profile.links.email} className='hover:text-fg'>
            {t.footer.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
