
import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import { ProjectSection } from "../components/ProjectsSection"
import { SkillsSection } from "../components/SkillsSection"
import { StartBackGround } from "../components/StarBackGround"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
  return ( <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


    { /*Theme Toggle (Dark/Light) */}
    <ThemeToggle/>


    {/* Baground Effect */}
    <StartBackGround/>


    {/* Nav Bar */}
    <NavBar/>
    
    {/* Main Content */}
    <main>

      <HeroSection/>

      <AboutSection/>

      <SkillsSection/>

      <ProjectSection/>

      <ContactSection/>

    </main>

    {/* Footer    */}
        
  </div>)
}