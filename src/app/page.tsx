import Navbar from "@/components/nav-bar";
import ParticlesBackground from "@/components/particles-background";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import {SkillsSection} from "@/components/sections/skills";
import ContactSection from "@/components/sections/contacts";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";



export default function Home() {
    return (
        <main className="min-h-screen">
            <ParticlesBackground />
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
            <Footer />
        </main>
    )
}