import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <FeaturedProjects />
    </>
  )
}
