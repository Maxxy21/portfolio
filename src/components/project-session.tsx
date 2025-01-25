import type { FC } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Project Nebula",
        description: "A space-themed social media platform for astronomy enthusiasts.",
        technologies: ["React", "Node.js", "MongoDB", "WebGL"],
        liveUrl: "https://projectnebula.com",
        githubUrl: "https://github.com/yourusername/project-nebula",
    },
    {
        title: "EcoTrack",
        description: "An IoT-based solution for monitoring and reducing carbon footprint.",
        technologies: ["Vue.js", "Express", "PostgreSQL", "MQTT"],
        liveUrl: "https://ecotrack.io",
        githubUrl: "https://github.com/yourusername/ecotrack",
    },
    {
        title: "CodeCanvas",
        description: "An interactive platform for collaborative coding and real-time code visualization.",
        technologies: ["Next.js", "WebSockets", "Three.js", "Firebase"],
        liveUrl: "https://codecanvas.dev",
        githubUrl: "https://github.com/yourusername/codecanvas",
    },
]

export const ProjectSection: FC = () => {
    return (
        <section id="projects" className="py-20 animated-bg">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
                >
                    Featured Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="bg-secondary/50 backdrop-blur-lg border-primary/20 hover:border-primary/40 transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-primary">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="outline" className="text-secondary-foreground">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex justify-between">
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </a>
                                        </Button>
                                        <Button variant="outline" size="sm" asChild>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" />
                                                Source Code
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

