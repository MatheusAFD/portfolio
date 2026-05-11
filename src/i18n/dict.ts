export type Dict = {
  nav: {
    about: string
    experience: string
    stack: string
    projects: string
    contact: string
    openMenu: string
    closeMenu: string
    menu: string
  }
  hero: {
    greeting: string
    role: string
    cta: {
      projects: string
      contact: string
    }
    terminal: {
      header: string
      live: string
      lines: ReadonlyArray<{ c: 'comment' | 'cmd' | 'out'; t: string }>
    }
  }
  about: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    titleTrail: string
    description: string
    bio: string[]
    stats: ReadonlyArray<{ value: string; label: string; hint: string }>
  }
  experience: {
    eyebrow: string
    title: string
    description: string
    current: string
    items: ReadonlyArray<{
      company: string
      role: string
      period: string
      location: string
      current?: boolean
      bullets: string[]
    }>
  }
  stack: {
    eyebrow: string
    title: string
    description: string
    groups: ReadonlyArray<{
      title: string
      description: string
      items: string[]
      span?: 'sm' | 'md' | 'lg'
    }>
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    items: ReadonlyArray<{
      slug: string
      name: string
      tagline: string
      description: string
      techs: string[]
      repoUrl: string
      liveUrl?: string
      featured: boolean
      highlight?: 'new' | 'oss' | 'ai'
    }>
  }
  contact: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    titleTrail: string
    description: string
    email: {
      label: string
      sub: string
      aria: string
    }
    linkedin: {
      label: string
      sub: string
      aria: string
    }
  }
  footer: {
    builtWith: string
    source: string
    linkedin: string
    email: string
  }
  profile: {
    role: string
    location: string
    headline: string
    tagline: string
    aboutSummary: string
  }
}
