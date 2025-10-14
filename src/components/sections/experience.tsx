"use client"

import {motion} from "framer-motion"
import {Briefcase, Calendar, Building, ExternalLink, GraduationCap, Rocket, Code2} from "lucide-react"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import Link from "next/link";

type TimelineItemType = "education" | "project" | "work";

interface TimelineItem {
    type: TimelineItemType;
    title: string;
    subtitle?: string;
    location: string;
    period: string;
    description: string[];
    skills: string[];
    link?: string;
    icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
    {
        type: "education",
        title: "Bachelor of Science in Computer Science",
        subtitle: "Free University of Bozen-Bolzano",
        location: "Bolzano, Italy",
        period: "2019 - 2025",
        description: [
            "Specialized in Algorithms, Data Structures, and Distributed Systems",
            "Focus on practical software engineering and full-stack development",
            "Graduated with thesis on AI-powered startup pitch evaluation"
        ],
        skills: ["Algorithms", "Data Structures", "Distributed Systems", "Software Engineering"],
        icon: <GraduationCap className="h-5 w-5" />
    },
    {
        type: "project",
        title: "Pista - AI Startup Pitch Evaluator",
        subtitle: "Bachelor Thesis Project",
        location: "Independent Project",
        period: "2024 - 2025",
        description: [
            "Built full-stack AI platform with Next.js, Convex, and Clerk authentication",
            "Integrated GPT-4 for intelligent pitch analysis and real-time feedback",
            "Multi-dimensional scoring system for Problem-Solution Fit, Team, Business Model, and Pitch Quality"
        ],
        skills: ["Next.js", "Convex", "GPT-4", "TypeScript", "Clerk"],
        link: "https://pista-app.vercel.app",
        icon: <Code2 className="h-5 w-5" />
    },
    {
        type: "work",
        title: "On-Road Management Associate",
        subtitle: "Amazon",
        location: "Hamburg, Germany",
        period: "November 2024 - Present",
        description: [
            "Monitor and analyze real-time delivery risks using internal tools and operational data",
            "Built browser extension with full CI/CD pipeline using GitHub Actions",
            "Automated testing, builds, and Mozilla signing with webhook integration",
            "Create dashboards in Amazon Quicksight and Grafana to visualize KPIs"
        ],
        skills: ["GitHub Actions", "CI/CD", "Amazon Quicksight", "Grafana", "Data Analysis", "Risk Management"],
        link: "https://amazon.com",
        icon: <Briefcase className="h-5 w-5" />
    },
    {
        type: "project",
        title: "DSP Management Extension",
        subtitle: "Internal Tool Built at Amazon",
        location: "Amazon Hamburg",
        period: "2024",
        description: [
            "Automated delivery partner notification workflows, reducing processing time by 80%",
            "Built full CI/CD pipeline with GitHub Actions and Mozilla signing",
            "Production system with automated testing and real-time alerts via Amazon Chime",
            "Daily usage by operations team for streamlined delivery partner communication"
        ],
        skills: ["WebExtensions API", "GitHub Actions", "CI/CD", "Webhooks", "Amazon Chime"],
        link: "https://github.com/Maxxy21/dsp-extension-hosting",
        icon: <Rocket className="h-5 w-5" />
    },
]

const getTypeColor = (type: TimelineItemType) => {
    switch (type) {
        case "education":
            return "bg-blue-500/20 border-blue-500/50 text-blue-400";
        case "project":
            return "bg-purple-500/20 border-purple-500/50 text-purple-400";
        case "work":
            return "bg-primary/20 border-primary/50 text-primary";
        default:
            return "bg-primary/20 border-primary/50 text-primary";
    }
};

const getTypeLabel = (type: TimelineItemType) => {
    switch (type) {
        case "education":
            return "Education";
        case "project":
            return "Project";
        case "work":
            return "Work";
        default:
            return "";
    }
};

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 animated-bg">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text"
                >
                    My Journey
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.1}}
                    viewport={{once: true}}
                    className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
                >
                    From computer science student to building production systems at Amazon
                </motion.p>

                <div className="max-w-5xl mx-auto">
                    <div className="relative pl-8 md:pl-12 space-y-8">
                        {/* Animated timeline line */}
                        <motion.div
                            className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-primary/50"
                            initial={{height: 0}}
                            whileInView={{height: "100%"}}
                            transition={{duration: 1.5, ease: "easeOut"}}
                            viewport={{once: true}}
                        />

                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, x: -50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.6, delay: index * 0.2}}
                                viewport={{once: true}}
                                className="relative"
                            >
                                {/* Timeline node with icon */}
                                <motion.div
                                    className={`absolute -left-[0.6rem] md:-left-[0.85rem] w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-background flex items-center justify-center shadow-lg ${getTypeColor(item.type)}`}
                                    initial={{scale: 0, rotate: -180}}
                                    whileInView={{scale: 1, rotate: 0}}
                                    transition={{duration: 0.5, delay: index * 0.2 + 0.3}}
                                    viewport={{once: true}}
                                >
                                    {item.icon}
                                </motion.div>

                                <div className="ml-4 md:ml-8">
                                    {/* Type badge */}
                                    <motion.div
                                        initial={{opacity: 0, y: -10}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.4, delay: index * 0.2 + 0.2}}
                                        viewport={{once: true}}
                                        className="inline-block mb-2"
                                    >
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getTypeColor(item.type)}`}>
                                            {getTypeLabel(item.type)}
                                        </span>
                                    </motion.div>

                                    <div className="bg-secondary/50 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {item.title}
                                                </h3>
                                                {item.subtitle && (
                                                    <p className="text-lg text-primary mt-1">{item.subtitle}</p>
                                                )}
                                            </div>
                                            <div className="flex items-center text-muted-foreground text-sm lg:text-right">
                                                <Calendar className="h-4 w-4 mr-1 flex-shrink-0"/>
                                                <span className="font-medium">{item.period}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
                                            <Building className="h-4 w-4 flex-shrink-0"/>
                                            <span>{item.location}</span>
                                            {item.link && (
                                                <>
                                                    <span>•</span>
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-primary transition-colors flex items-center gap-1"
                                                    >
                                                        View
                                                        <ExternalLink className="h-3 w-3"/>
                                                    </a>
                                                </>
                                            )}
                                        </div>

                                        <ul className="text-secondary-foreground mb-4 space-y-2">
                                            {item.description.map((point, pointIndex) => (
                                                <li key={pointIndex} className="flex items-start">
                                                    <span className="text-primary mr-2 mt-1.5 flex-shrink-0">▸</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map((skill, skillIndex) => (
                                                <Badge
                                                    key={skillIndex}
                                                    variant="outline"
                                                    className="bg-background/30 hover:bg-background/50 transition-colors"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.8}}
                        viewport={{once: true}}
                        className="mt-16 text-center flex flex-wrap gap-3 justify-center"
                    >
                        <Link href="/resume_en.pdf">
                            <Button variant="default" size="lg">
                                View Full Resume (EN)
                            </Button>
                        </Link>
                        <Link href="/resume_de.pdf">
                            <Button variant="outline" size="lg">
                                Lebenslauf ansehen (DE)
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection