import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type CardProps = ComponentPropsWithoutRef<'div'> & {
  interactive?: boolean
}

export function Card({ className, interactive, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-(--radius-tile) border border-(--color-border) bg-(--color-surface)/55 backdrop-blur-md',
        interactive &&
          'transition hover:border-(--color-border-strong) hover:bg-(--color-surface-2)/70 hover:-translate-y-0.5',
        className
      )}
      {...rest}
    />
  )
}
