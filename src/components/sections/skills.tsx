"use client"


import { motion } from "framer-motion"
import { Code, Database, LineChart, Monitor, Router, Server } from "lucide-react"

const skills = [
    {
        category: "Frontend",
        icon: <Monitor className="w-10 h-10 text-primary" />,
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
        category: "Backend",
        icon: <Server className="w-10 h-10 text-primary" />,
        items: ["Node.js", "Express", "Python", "Django", "GraphQL"]
    },
    {
        category: "Database",
        icon: <Database className="w-10 h-10 text-primary" />,
        items: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Prisma"]
    },
    {
        category: "DevOps",
        icon: <Router className="w-10 h-10 text-primary" />,
        items: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions"]
    },
    {
        category: "Programming",
        icon: <Code className="w-10 h-10 text-primary" />,
        items: ["JavaScript", "TypeScript", "Python", "Java", "C#"]
    },
    {
        category: "Data & Analytics",
        icon: <LineChart className="w-10 h-10 text-primary" />,
        items: ["D3.js", "TensorFlow", "pandas", "NumPy", "Power BI"]
    },
]

export const SkillsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section id="skills" className="py-20 animated-bg">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
                >
                    Skills & Expertise
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills.map((skillCategory) => (
                        <motion.div
                            key={skillCategory.category}
                            variants={itemVariants}
                            className="bg-secondary/50 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                {skillCategory.icon}
                                <h3 className="text-xl font-semibold ml-3 text-primary">{skillCategory.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {skillCategory.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm px-3 py-1 rounded-full bg-background/50 text-secondary-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}