import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/about";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
    return (
        <div className="p-6">
            <Navbar/>
            <HeroSection/>
            <About/>
            <ProjectSection/>
            <SkillsSection/>
        </div>
    )
}
