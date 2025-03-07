"use client"

import {motion} from "framer-motion"
import {ExternalLink} from "lucide-react"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import Link from "next/link";
import gitHub from "../../assets/github-mark-white.svg"
import Image from "next/image";


const projects = [
    {
        title: "Pitch Perfect",
        description: "A pitch evaluation website with AI for startups.",
        technologies: ["NextJS", "Convex", "Clerk", "OpenAI"],
        liveUrl: "https://startup-pitches.vercel.app/",
        githubUrl: "https://github.com/Maxxy21/startup-pitches",
        image: "/projects/pitch-perfect.png",
    },
    // {
    //     title: "EcoTrack",
    //     description: "An IoT-based solution for monitoring and reducing carbon footprint with predictive analytics and gamification.",
    //     technologies: ["Vue.js", "Express", "PostgreSQL", "MQTT"],
    //     liveUrl: "https://ecotrack.io",
    //     githubUrl: "https://github.com/yourusername/ecotrack",
    //     image: "/projects/ecotrack.jpg",
    // },
    // {
    //     title: "CodeCanvas",
    //     description: "An interactive platform for collaborative coding and real-time code visualization with AI-assisted suggestions.",
    //     technologies: ["Next.js", "WebSockets", "Three.js", "Firebase"],
    //     liveUrl: "https://codecanvas.dev",
    //     githubUrl: "https://github.com/yourusername/codecanvas",
    //     image: "/projects/codecanvas.jpg",
    // },
]

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 animated-bg">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
                >
                    Featured Projects
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            viewport={{once: true}}
                            className="group"
                        >
                            <div
                                className="bg-secondary/50 backdrop-blur-lg border border-primary/10 rounded-xl overflow-hidden h-full flex flex-col hover:border-primary/30 transition-all duration-300 shadow-lg">
                                <div className="aspect-video relative overflow-hidden bg-background/50">
                                    <Image src={project.image} alt={project.title} layout="fill" objectFit="cover"/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center opacity-0">
                                        <div className="flex gap-4">
                                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <Button size="sm" variant="secondary">
                                                    <ExternalLink className="w-4 h-4 mr-2"/>
                                                    Live Demo
                                                </Button>
                                            </Link>

                                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Button size="sm" variant="secondary">
                                                        <Image src={gitHub} alt="GitHub" width={16} height={16} className="mr-2"/>
                                                        Code
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                                    <p className="text-sm text-secondary-foreground mb-4 flex-1">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="outline"
                                                   className="text-xs text-secondary-foreground">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection