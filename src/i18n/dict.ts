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
    now: {
      label: string
      location: string
      coding: string
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
    pullQuote: string
    meta: {
      location: { label: string; value: string }
      languages: { label: string; value: string }
      focus: { label: string; value: string }
      years: { label: string; value: string }
      current: { label: string; value: string }
    }
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
    earlier: {
      period: string
      description: string
    }
  }
  stack: {
    eyebrow: string
    title: string
    description: string
    columns: ReadonlyArray<{
      title: string
      items: ReadonlyArray<string>
    }>
    marquee: ReadonlyArray<string>
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    filters: {
      all: string
      web: string
      ai: string
      oss: string
    }
    items: ReadonlyArray<{
      slug: string
      name: string
      tagline: string
      description: string
      techs: string[]
      repoUrl?: string
      liveUrl?: string
      privateRepo?: boolean
      featured: boolean
      highlight?: 'new' | 'oss' | 'ai'
    }>
  }
  contact: {
    eyebrow: string
    heading: {
      lead: string
      accent: string
      trail: string
    }
    description: string
    emailAria: string
    chips: {
      linkedin: string
      github: string
      location: string
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
