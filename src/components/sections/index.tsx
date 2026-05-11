import { About } from './about'
import { Contact } from './contact'
import { Experience } from './experience'
import { Hero } from './hero'
import { Projects } from './projects'
import { Stack } from './stack'

export function HomeSections() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Projects />
      <Contact />
    </>
  )
}
