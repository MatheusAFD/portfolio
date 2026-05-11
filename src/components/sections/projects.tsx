import { Section } from '@/components/layout/section'
import { ProjectBento } from '@/components/projects/project-bento'
import { useDict } from '@/i18n'

export function Projects() {
  const t = useDict()
  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      description={t.projects.description}
    >
      <ProjectBento />
    </Section>
  )
}
