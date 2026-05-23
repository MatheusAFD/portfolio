import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/motion/reveal'
import { Badge } from '@/components/ui/badge'
import { useDict } from '@/i18n'

type ExperienceProps = { index?: string }

function initials(company: string) {
  return company
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export function Experience({ index }: ExperienceProps) {
  const t = useDict()
  return (
    <Section
      id='experience'
      index={index}
      eyebrow={t.experience.eyebrow}
      title={t.experience.title}
      description={t.experience.description}
    >
      <ol className='relative ml-3 pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:-translate-x-1/2 before:bg-border md:ml-6'>
        {t.experience.items.map((exp, i) => (
          <li key={exp.company} className='relative mb-10 last:mb-0'>
            <span className='absolute -left-8 top-2.5 size-1.5 -translate-x-1/2 rounded-full bg-accent shadow-(--shadow-glow)' />
            <Reveal delay={i * 0.06}>
              <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                <h3 className='text-lg font-semibold tracking-tight text-fg'>
                  {exp.role}
                </h3>
                <span className='text-fg-muted'>@ {exp.company}</span>
                {exp.current && (
                  <Badge tone='mint'>{t.experience.current}</Badge>
                )}
                <span
                  aria-hidden='true'
                  className='ml-auto grid size-9 place-items-center rounded-md border border-border bg-surface font-mono text-xs text-fg-muted'
                >
                  {initials(exp.company)}
                </span>
              </div>
              <p className='mt-1 font-mono text-xs uppercase tracking-[0.22em] text-fg-subtle'>
                {exp.period} · {exp.location}
              </p>
              <ul className='mt-4 space-y-2 text-sm leading-relaxed text-fg-muted md:text-base'>
                {exp.bullets.map((b) => (
                  <li key={b} className='relative pl-4'>
                    <span className='absolute left-0 top-2.5 size-1 rounded-full bg-accent' />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}

        <li className='relative opacity-70'>
          <span className='absolute -left-8 top-2.5 size-1.5 -translate-x-1/2 rounded-full border border-border bg-bg' />
          <Reveal delay={t.experience.items.length * 0.06}>
            <p className='font-mono text-xs uppercase tracking-[0.22em] text-fg-subtle'>
              {t.experience.earlier.period}
            </p>
            <p className='mt-2 max-w-2xl text-sm leading-relaxed text-fg-muted'>
              {t.experience.earlier.description}
            </p>
          </Reveal>
        </li>
      </ol>
    </Section>
  )
}
