import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ConnectSection } from "@/components/connect-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen gradient-animate">
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ConnectSection />
      </main>
    </>
  )
}
