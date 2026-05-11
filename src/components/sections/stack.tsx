import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/motion/reveal'
import { Card } from '@/components/ui/card'
import { useDict } from '@/i18n'
import { cn } from '@/lib/cn'

const spanMap = {
  sm: 'md:col-span-1',
  md: 'md:col-span-2',
  lg: 'md:col-span-3',
} as const

export function Stack() {
  const t = useDict()
  return (
    <Section
      id='stack'
      eyebrow={t.stack.eyebrow}
      title={t.stack.title}
      description={t.stack.description}
    >
      <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
        {t.stack.groups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.05}
            className={cn('h-full', spanMap[group.span ?? 'md'])}
          >
            <Card className='h-full p-6'>
              <p className='font-mono text-xs uppercase tracking-[0.2em] text-accent'>
                {group.title}
              </p>
              <p className='mt-2 text-base font-medium text-fg'>
                {group.description}
              </p>
              <ul className='mt-5 flex flex-wrap gap-2'>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className='rounded-full border border-border bg-bg-2/60 px-3 py-1 text-xs font-medium text-fg-muted'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
