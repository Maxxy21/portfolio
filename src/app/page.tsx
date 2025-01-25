import {HeroSection} from "@/components/hero-section";
import {AboutSection} from "@/components/about-section";
import {SkillsSection} from "@/components/skills-section";
import {ProjectSection} from "@/components/project-session";
import {ContactSection} from "@/components/contact-section";


export default function Home() {
    return (
        <div className="p-6">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </div>
    )
}
