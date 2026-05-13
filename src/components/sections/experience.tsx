import { Briefcase } from 'lucide-react'
import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/motion/reveal'
import { Badge } from '@/components/ui/badge'
import { useDict } from '@/i18n'

export function Experience() {
  const t = useDict()
  return (
    <Section
      id='experience'
      eyebrow={t.experience.eyebrow}
      title={t.experience.title}
      description={t.experience.description}
    >
      <ol className='relative ml-3 pl-8 before:absolute before:left-0 before:top-4.5 before:bottom-0 before:w-px before:bg-border md:ml-6'>
        {t.experience.items.map((exp, i) => (
          <li key={exp.company} className='relative mb-10 last:mb-0'>
            <span className='absolute -left-11.5 top-1 grid size-7 place-items-center rounded-full border border-border bg-bg shadow-(--shadow-glow)'>
              <Briefcase size={13} className='text-accent' />
            </span>
            <Reveal delay={i * 0.06}>
              <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                <h3 className='text-lg font-semibold tracking-tight text-fg'>
                  {exp.role}
                </h3>
                <span className='text-fg-muted'>@ {exp.company}</span>
                {exp.current && (
                  <Badge tone='mint'>{t.experience.current}</Badge>
                )}
              </div>
              <p className='mt-1 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle'>
                {exp.period} · {exp.location}
              </p>
              <ul className='mt-4 space-y-1.5 text-sm text-fg-muted md:text-base'>
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
      </ol>
    </Section>
  )
}
