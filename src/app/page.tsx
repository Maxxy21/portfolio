import Navbar from "@/components/header";
import Intro from "@/components/intro";
import About from "@/components/about";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro/>
            {/*<About/>*/}
            {/*<ProjectSection/>*/}
            {/*<SkillsSection/>*/}
        </main>
    )
}
