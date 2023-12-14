import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <AboutSection/>
            <ProjectSection/>
            <SkillsSection/>
        </>
    )
}
