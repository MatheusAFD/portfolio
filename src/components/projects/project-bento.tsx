import { ArrowUpRight, ExternalLink, Lock } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/motion/reveal'
import { GithubIcon } from '@/components/ui/icons'
import { profile } from '@/data/profile'
import { useDict, useLocale } from '@/i18n'
import type { Dict } from '@/i18n/dict'
import { cn } from '@/lib/cn'

const moreCopy = {
  pt: {
    label: 'Tudo no GitHub',
    handle: 'github.com/matheusafd',
    aria: 'Ver todos os projetos no GitHub',
  },
  en: {
    label: 'Everything on GitHub',
    handle: 'github.com/matheusafd',
    aria: 'See all projects on GitHub',
  },
} as const

type ProjectItem = Dict['projects']['items'][number]
type Highlight = NonNullable<ProjectItem['highlight']>
type Category = 'all' | 'web' | 'ai' | 'oss'

const highlightLabel: Record<'pt' | 'en', Record<Highlight, string>> = {
  pt: { new: 'Novo', oss: 'Open source', ai: 'IA' },
  en: { new: 'New', oss: 'Open source', ai: 'AI' },
}

function matches(p: ProjectItem, c: Category) {
  if (c === 'all') return true
  if (c === 'ai') return p.highlight === 'ai'
  if (c === 'oss') return p.highlight === 'oss'
  return p.highlight !== 'ai' && p.highlight !== 'oss'
}

type ProjectRowProps = {
  project: ProjectItem
  number: string
  featured?: boolean
  highlightText?: string
}

function ProjectRow({
  project,
  number,
  featured,
  highlightText,
}: ProjectRowProps) {
  return (
    <li className='group border-t border-border py-8 first:border-t-0 first:pt-0 md:py-10'>
      <div className='grid gap-x-8 gap-y-4 md:grid-cols-[3rem_1fr]'>
        <span
          aria-hidden='true'
          className='font-mono text-sm text-fg-subtle tabular-nums md:pt-1.5'
        >
          {number}
        </span>

        <div>
          <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1.5'>
            <h3
              className={cn(
                'font-semibold tracking-tight text-fg',
                featured ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl',
              )}
            >
              {project.name}
            </h3>
            {highlightText && (
              <span className='font-mono text-[11px] uppercase tracking-[0.22em] text-accent'>
                {highlightText}
              </span>
            )}
            <span className='ml-auto flex items-center gap-4 text-sm text-fg-muted'>
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-1.5 transition-colors hover:text-fg'
                >
                  <GithubIcon size={15} /> Repo
                </a>
              ) : project.privateRepo ? (
                <span className='inline-flex items-center gap-1.5 text-fg-subtle'>
                  <Lock size={14} /> Private
                </span>
              ) : null}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-1.5 transition-colors hover:text-fg'
                >
                  <ExternalLink size={15} /> Live
                </a>
              )}
            </span>
          </div>

          <p
            className={cn(
              'mt-2 text-fg-muted',
              featured ? 'text-base md:text-lg' : 'text-sm md:text-base',
            )}
          >
            {project.tagline}
          </p>

          {featured && (
            <p className='mt-4 max-w-2xl text-sm leading-relaxed text-fg-muted'>
              {project.description}
            </p>
          )}

          <p className='mt-5 font-mono text-xs text-fg-subtle'>
            {project.techs.join('  ·  ')}
          </p>
        </div>
      </div>
    </li>
  )
}

export function ProjectBento() {
  const t = useDict()
  const locale = useLocale()
  const more = moreCopy[locale]
  const labels = highlightLabel[locale]
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
    <div>
      <div className='mb-10 flex flex-wrap gap-x-6 gap-y-2'>
        {filters.map((f) => {
          const isActive = f.key === active
          return (
            <button
              key={f.key}
              type='button'
              onClick={() => setActive(f.key)}
              aria-pressed={isActive}
              className={cn(
                'font-mono text-xs uppercase tracking-[0.22em] transition-colors',
                isActive
                  ? 'text-accent underline decoration-accent decoration-2 underline-offset-[6px]'
                  : 'text-fg-subtle hover:text-fg',
              )}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      <Reveal>
        <ol>
          {filtered.map((project, i) => (
            <ProjectRow
              key={project.slug}
              project={project}
              number={String(i + 1).padStart(2, '0')}
              featured={i === 0}
              highlightText={
                project.highlight ? labels[project.highlight] : undefined
              }
            />
          ))}
        </ol>
      </Reveal>

      <a
        href={profile.links.github}
        target='_blank'
        rel='noreferrer'
        aria-label={more.aria}
        className='group mt-12 flex items-center justify-between border-t border-border pt-8'
      >
        <span className='inline-flex items-center gap-3 font-semibold tracking-tight text-fg'>
          <GithubIcon size={20} />
          {more.label}
        </span>
        <span className='inline-flex items-center gap-1.5 font-mono text-sm text-fg-muted transition-colors group-hover:text-fg'>
          {more.handle}
          <ArrowUpRight
            size={16}
            className='transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
          />
        </span>
      </a>
    </div>
  )
}
