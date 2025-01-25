import type { FC } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "Redis"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
]

export const SkillsSection: FC = () => {
    return (
        <section id="skills" className="py-20 animated-bg">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
                >
                    Skills & Expertise
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skills.map((skillCategory, index) => (
                        <motion.div
                            key={skillCategory.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-secondary/50 backdrop-blur-lg p-6 rounded-xl shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-primary">{skillCategory.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillCategory.items.map((skill) => (
                                    <Badge key={skill} variant="outline" className="text-secondary-foreground">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

