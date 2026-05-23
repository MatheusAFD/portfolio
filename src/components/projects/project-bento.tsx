import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/motion/reveal'
import { ProjectCard } from '@/components/projects/project-card'
import { Card } from '@/components/ui/card'
import { GithubIcon } from '@/components/ui/icons'
import { profile } from '@/data/profile'
import { useDict, useLocale } from '@/i18n'
import type { Dict } from '@/i18n/dict'
import { cn } from '@/lib/cn'

const moreCopy = {
  pt: {
    eyebrow: 'Mais projetos',
    title: 'Explore todos no GitHub',
    sub: 'Estudos, experimentos e produtos open-source.',
    aria: 'Ver todos os projetos no GitHub',
  },
  en: {
    eyebrow: 'More projects',
    title: 'Explore everything on GitHub',
    sub: 'Studies, experiments and open-source products.',
    aria: 'See all projects on GitHub',
  },
} as const

type ProjectItem = Dict['projects']['items'][number]
type Category = 'all' | 'web' | 'ai' | 'oss'

function matches(p: ProjectItem, c: Category) {
  if (c === 'all') return true
  if (c === 'ai') return p.highlight === 'ai'
  if (c === 'oss') return p.highlight === 'oss'
  return p.highlight !== 'ai' && p.highlight !== 'oss'
}

export function ProjectBento() {
  const t = useDict()
  const locale = useLocale()
  const more = moreCopy[locale]
  const [active, setActive] = useState<Category>('all')

  const featured = t.projects.items.filter((p) => p.featured)
  const filtered = featured.filter((p) => matches(p, active))

  const filters: Array<{ key: Category; label: string }> = [
    { key: 'all', label: t.projects.filters.all },
    { key: 'web', label: t.projects.filters.web },
    { key: 'ai', label: t.projects.filters.ai },
    { key: 'oss', label: t.projects.filters.oss },
  ]

  return (
    <div className='space-y-6'>
      <div className='mb-8 flex flex-wrap gap-2'>
        {filters.map((f) => {
          const isActive = f.key === active
          return (
            <button
              key={f.key}
              type='button'
              onClick={() => setActive(f.key)}
              aria-pressed={isActive}
              className={cn(
                'rounded-full border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.22em] transition',
                isActive
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border text-fg-muted hover:border-fg-muted hover:text-fg',
              )}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      <div className='grid gap-4 md:grid-cols-12'>
        {filtered.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={i * 0.06}
            className={i < 2 ? 'md:col-span-7' : 'md:col-span-5'}
          >
            <ProjectCard project={project} size='lg' />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <Card interactive className='group'>
          <a
            href={profile.links.github}
            target='_blank'
            rel='noreferrer'
            className='flex flex-col items-start gap-6 p-7 md:flex-row md:items-center md:justify-between md:p-8'
            aria-label={more.aria}
          >
            <div className='flex items-center gap-5'>
              <span className='grid size-14 shrink-0 place-items-center rounded-full border border-border bg-bg-2/60 text-fg transition group-hover:border-accent group-hover:text-accent'>
                <GithubIcon size={26} />
              </span>
              <div>
                <p className='font-mono text-xs uppercase tracking-[0.22em] text-accent'>
                  {more.eyebrow}
                </p>
                <p className='mt-1 text-xl font-semibold tracking-tight text-fg md:text-2xl'>
                  {more.title}
                </p>
                <p className='mt-1 text-sm text-fg-muted'>{more.sub}</p>
              </div>
            </div>
            <span className='inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-fg transition group-hover:border-accent group-hover:bg-accent/10'>
              github.com/matheusafd
              <ArrowUpRight
                size={16}
                className='transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
              />
            </span>
          </a>
        </Card>
      </Reveal>
    </div>
  )
}
