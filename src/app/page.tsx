import Navbar from "@/components/nav-bar";
import ParticlesBackground from "@/components/particles-background";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/project";
import {SkillsSection} from "@/components/sections/skills";
import ContactSection from "@/components/sections/contacts";



export default function Home() {
    return (

            <main className="min-h-screen">
                <ParticlesBackground />
                <Navbar />
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
                <Footer />
            </main>

    )
}