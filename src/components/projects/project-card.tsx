import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { GithubIcon } from '@/components/ui/icons'
import { useLocale } from '@/i18n'
import type { Dict } from '@/i18n/dict'
import { cn } from '@/lib/cn'

type ProjectItem = Dict['projects']['items'][number]
type Highlight = NonNullable<ProjectItem['highlight']>

const highlightLabel: Record<
  'pt' | 'en',
  Record<Highlight, { label: string; tone: 'accent' | 'cyan' | 'mint' }>
> = {
  pt: {
    new: { label: 'Novo', tone: 'mint' },
    oss: { label: 'Open source', tone: 'cyan' },
    ai: { label: 'AI', tone: 'accent' },
  },
  en: {
    new: { label: 'New', tone: 'mint' },
    oss: { label: 'Open source', tone: 'cyan' },
    ai: { label: 'AI', tone: 'accent' },
  },
}

type ProjectCardProps = {
  project: ProjectItem
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ProjectCard({
  project,
  size = 'md',
  className,
}: ProjectCardProps) {
  const isLarge = size === 'lg'
  const locale = useLocale()
  const labels = highlightLabel[locale]

  return (
    <Card
      interactive
      className={cn(
        'group flex h-full flex-col p-6',
        isLarge && 'p-8',
        className,
      )}
    >
      <div className='flex items-start justify-between gap-4'>
        <div className='min-w-0'>
          <div className='flex flex-wrap items-center gap-2'>
            <h3
              className={cn(
                'font-semibold tracking-tight text-fg',
                isLarge ? 'text-2xl md:text-3xl' : 'text-lg',
              )}
            >
              {project.name}
            </h3>
            {project.highlight && (
              <Badge tone={labels[project.highlight].tone}>
                {labels[project.highlight].label}
              </Badge>
            )}
          </div>
          <p
            className={cn(
              'mt-2 text-fg-muted',
              isLarge ? 'text-base' : 'text-sm',
            )}
          >
            {project.tagline}
          </p>
        </div>
        <ArrowUpRight
          size={isLarge ? 22 : 18}
          className='shrink-0 text-fg-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg'
        />
      </div>

      {isLarge && (
        <p className='mt-4 max-w-xl text-sm text-fg-muted md:text-base'>
          {project.description}
        </p>
      )}

      <ul className='mt-5 flex flex-wrap gap-1.5'>
        {project.techs.slice(0, isLarge ? 8 : 5).map((tech) => (
          <li
            key={tech}
            className='rounded-full border border-border bg-bg-2/60 px-2.5 py-0.5 font-mono text-[11px] text-fg-muted'
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className='mt-auto flex items-center gap-3 pt-6'>
        <a
          href={project.repoUrl}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg'
        >
          <GithubIcon size={15} /> Repo
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg'
          >
            <ExternalLink size={15} /> Live
          </a>
        )}
      </div>
    </Card>
  )
}
