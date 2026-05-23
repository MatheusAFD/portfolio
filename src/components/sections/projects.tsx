import { Section } from '@/components/layout/section'
import { ProjectBento } from '@/components/projects/project-bento'
import { useDict } from '@/i18n'

type ProjectsProps = { index?: string }

export function Projects({ index }: ProjectsProps) {
  const t = useDict()
  return (
    <Section
      id='projects'
      index={index}
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      description={t.projects.description}
    >
      <ProjectBento />
    </Section>
  )
}
