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
      <About index='01' />
      <Experience index='02' />
      <Stack index='03' />
      <Projects index='04' />
      <Contact index='05' />
    </>
  )
}
