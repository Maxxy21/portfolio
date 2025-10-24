"use client"

import {motion} from "framer-motion"
import {ExternalLink} from "lucide-react"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import Link from "next/link"
import gitHub from "../../assets/github-mark-white.svg"
import Image from "next/image"

interface Project {
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    liveUrl?: string | null;
    githubUrl: string;
    image: string;
    featured?: boolean;
}

const projectsData: Project[] = [
    {
        title: "Pista - AI Startup Pitch Evaluator",
        subtitle: "Bachelor Thesis Project",
       description: "AI tool that listens to startup pitches and gives feedback on what's working and what's not. Record your pitch, and it scores you on problem-solution fit, business model, pitch quality, and team.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Convex", "OpenAI", "Clerk"],
        liveUrl: "https://pista-app.vercel.app",
        githubUrl: "https://github.com/Maxxy21/startup-pitches",
        image: "/projects/pista1.png",
        featured: true,
    },
    {
        title: "DSP Management Extension",
        subtitle: "Production Tool at Amazon",
        description: "Browser extension that saves our operations team about 15 minutes per notification cycle. Automates the workflow of copying tables from portal, processing in Excel, and messaging each delivery partner. Now it's just one click. Set up the full CI/CD pipeline with GitHub Actions.",
        technologies: ["WebExtensions API", "JavaScript", "GitHub Actions", "CI/CD", "Webhooks", "Amazon Chime"],
        githubUrl: "https://github.com/Maxxy21/dsp-extension-hosting",
        image: "/projects/dsp.png",
        featured: true,
    },
    {
        title: "Wordle React Native",
        subtitle: "Cross-Platform Mobile Game",
       description: "Built Wordle for mobile because I wanted to learn React Native. Cross-platform (iOS/Android/Web) with game stats, hard mode, and all the usual Wordle features. Used Context API for state management and AsyncStorage so your stats persist between sessions.",
        technologies: ["React Native", "React", "TypeScript", "Expo", "Jest"],
        liveUrl: null,
        githubUrl: "https://github.com/Maxxy21/Wordle-React-Native",
        image: "/projects/wordle.png",
    },
    {
        title: "OpenHub Tourism Data Analyzer",
        subtitle: "Multithreaded Data Processing Pipeline",
        description: "Java application that pulls and processes 10,000+ tourism records from an API. Hit a memory issue where the app would crash on large datasets, traced it to the HTTP library. Switched libraries and optimized JVM memory allocation to handle the full dataset without errors.",
        technologies: ["Java", "Maven", "Multithreading", "REST API", "Gson", "Jackson", "Log4j", "JUnit"],
        githubUrl: "https://github.com/Maxxy21/Programming-Project-OpenHub",
        image: "/projects/openhub.png",
    },
    {
        title: "C Language Compiler",
        subtitle: "Lexer, Parser & Semantic Analyzer",
       description: "Compiler that turns C code into executable programs. Built the lexer with Flex, parser with Bison, and added type checking so it catches errors like adding strings to numbers. Supports variables, control flow, and gives you line numbers when something breaks. University project that taught me how compilers actually work under the hood.",
        technologies: ["C", "Flex", "Bison", "LALR Parsing", "Symbol Tables", "Type Theory"],
        liveUrl: null,
        githubUrl: "https://github.com/maxxy21/simple-c-compiler",
        image: "/projects/compiler.png",
    }

]

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-16 md:py-20 animated-bg">
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
                    {projectsData.map((project, index) => (
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
                                    {project.featured && (
                                        <div className="absolute top-3 right-3 z-10">
                                            <Badge className="bg-primary text-primary-foreground font-semibold">
                                                Featured
                                            </Badge>
                                        </div>
                                    )}
                                    <Image src={project.image} alt={project.title} layout="fill" objectFit="cover"/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center opacity-0">
                                        <div className="flex gap-4">
                                            {project.liveUrl && (
                                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <Button size="sm" variant="secondary">
                                                        <ExternalLink className="w-4 h-4 mr-2"/>
                                                        Live Demo
                                                    </Button>
                                                </Link>
                                            )}

                                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Button size="sm" variant="secondary">
                                                    <Image src={gitHub} alt="GitHub" width={16} height={16}
                                                           className="mr-2"/>
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
