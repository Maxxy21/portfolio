"use client"

import {motion} from "framer-motion"
import {Briefcase, Calendar, Building, ExternalLink} from "lucide-react"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import Link from "next/link";


const experiences = [
    {
        title: "Operations Risk Management Associate",
        company: "Amazon",
        location: "Hamburg, Germany",
        period: "Dec 2024 - Present",
        description: [
            "Analyze operational data to identify trends and risks using the Mercury platform.",
            "Collaborate with cross-functional teams to improve driver safety and delivery performance.",
            "Generate automated reports and dashboards to support compliance and risk mitigation.",
            "Apply analytical methods to optimize delivery logistics and system resilience.",
            "Support implementation of tools and protocols that enhance safety and service quality."
        ],
        skills: [
            "Data Analysis", 
            "Risk Assessment", 
            "Performance Optimization", 
            "Compliance", 
            "Cross-functional Collaboration"
        ],
        companyUrl: "https://amazon.com"
    },
    
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

                                    <ul className="text-secondary-foreground mb-4 list-disc list-inside">
                                        {job.description.map((point, pointIndex) => (
                                            <li key={pointIndex}>{point}</li>
                                        ))}
                                    </ul>

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