import { createFileRoute } from '@tanstack/react-router'
import { HomeSections } from '@/components/sections'
import { localeMeta } from '@/lib/seo'

export const Route = createFileRoute('/en')({
  component: HomeSections,
  head: () => localeMeta('en'),
  beforeLoad: () => ({ locale: 'en' as const })
})
