import { createFileRoute } from '@tanstack/react-router'
import { HomeSections } from '@/components/sections'
import { localeMeta } from '@/lib/seo'

export const Route = createFileRoute('/pt')({
  component: HomeSections,
  head: () => localeMeta('pt'),
  beforeLoad: () => ({ locale: 'pt' as const })
})
