"use client"

import {motion} from "framer-motion"
import {Briefcase, Calendar, Building, ExternalLink} from "lucide-react"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import Link from "next/link";

// Sample experience data (replace with your actual experience)
const experiences = [
    {
        title: "Senior Frontend Developer",
        company: "TechCorp Solutions",
        location: "Hamburg, Germany",
        period: "Jan 2022 - Present",
        description: "Leading frontend development for enterprise applications using React, TypeScript, and Next.js. Implemented CI/CD pipelines and reduced load times by 40% through code optimization.",
        skills: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS"],
        companyUrl: "https://example.com"
    },
    {
        title: "Frontend Developer",
        company: "Digital Innovations GmbH",
        location: "Berlin, Germany",
        period: "Mar 2020 - Dec 2021",
        description: "Developed responsive web applications and collaborated with design teams to implement pixel-perfect UIs. Led the migration from legacy codebase to modern React architecture.",
        skills: ["JavaScript", "React", "CSS3", "Webpack", "Jest"],
        companyUrl: "https://example.com"
    },
    {
        title: "Web Developer",
        company: "CreativeStudio",
        location: "Munich, Germany",
        period: "Jun 2018 - Feb 2020",
        description: "Built interactive websites for clients across various industries. Collaborated in agile teams to deliver projects on tight deadlines. Implemented analytics tracking that improved conversion rates by 25%.",
        skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP"],
        companyUrl: "https://example.com"
    }
]

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 animated-bg">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
                >
                    Professional Experience
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
                        {experiences.map((job, index) => (
                            <motion.div
                                key={`${job.company}-${index}`}
                                initial={{opacity: 0, x: -20}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute w-5 h-5 bg-primary rounded-full -left-[1.55rem] border-4 border-background"/>

                                <div
                                    className="bg-secondary/50 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                                        <div className="flex items-center text-muted-foreground text-sm mt-1 md:mt-0">
                                            <Calendar className="h-4 w-4 mr-1"/>
                                            <span>{job.period}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-4">
                                        <Building className="h-4 w-4 text-primary"/>
                                        <a
                                            href={job.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-secondary-foreground hover:text-primary transition-colors flex items-center"
                                        >
                                            {job.company}
                                            <ExternalLink className="ml-1 h-3 w-3"/>
                                        </a>
                                        <span className="text-muted-foreground">•</span>
                                        <span className="text-muted-foreground text-sm">{job.location}</span>
                                    </div>

                                    <p className="text-secondary-foreground mb-4">
                                        {job.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.map((skill) => (
                                            <Badge key={skill} variant="outline" className="bg-background/30">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.5}}
                        viewport={{once: true}}
                        className="mt-12 text-center"
                    >
                        <Link href="/resume.pdf">
                            <Button variant="default">
                                View Resume
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection