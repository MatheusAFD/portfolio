import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/motion/reveal'
import { getStackIcon } from '@/components/sections/stack-icons'
import { useDict } from '@/i18n'

type StackProps = { index?: string }

export function Stack({ index }: StackProps) {
  const t = useDict()

  return (
    <Section
      id='stack'
      index={index}
      eyebrow={t.stack.eyebrow}
      title={t.stack.title}
      description={t.stack.description}
    >
      <div className='grid grid-cols-1 gap-y-12 md:grid-cols-3 md:divide-x md:divide-border md:gap-y-0'>
        {t.stack.columns.map((col) => (
          <Reveal
            key={col.title}
            className='md:px-8 md:first:pl-0 md:last:pr-0'
          >
            <p className='font-mono text-xs uppercase tracking-[0.22em] text-fg-subtle'>
              <span className='text-accent'>—</span> {col.title}
            </p>
            <ul className='mt-6 space-y-3.5'>
              {col.items.map((name) => {
                const Icon = getStackIcon(name)
                return (
                  <li
                    key={name}
                    className='group/item flex items-center gap-3 font-mono text-sm text-fg-muted transition-colors hover:text-fg'
                  >
                    <Icon
                      size={16}
                      className='shrink-0 text-fg-subtle transition-colors group-hover/item:text-accent'
                    />
                    {name}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
