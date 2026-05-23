import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type Tone = 'default' | 'accent' | 'cyan' | 'mint'

type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  tone?: Tone
}

const tones: Record<Tone, string> = {
  default: 'bg-(--color-surface) text-(--color-fg-muted) border-(--color-border)',
  accent: 'bg-(--color-accent)/15 text-(--color-accent) border-(--color-accent)/30',
  cyan: 'bg-(--color-surface) text-(--color-fg-muted) border-(--color-border-strong)',
  mint: 'bg-(--color-accent-2)/15 text-(--color-accent-2) border-(--color-accent-2)/40',
}

export function Badge({ tone = 'default', className, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-tight',
        tones[tone],
        className,
      )}
      {...rest}
    />
  )
}
