"use client"

import { motion } from "framer-motion"
import { Download, Globe, GraduationCap, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import portrait from "../../assets/portrait.jpg"
import Link from "next/link";

// Language proficiency data
const languages = [
    { language: "Asante Twi", level: "Native", proficiency: 100 },
    { language: "English", level: "C1", proficiency: 90 },
    { language: "Italian", level: "C1", proficiency: 90 },
    { language: "German", level: "B2", proficiency: 75 }
]

const AboutSection = () => {
    return (
        <section id="about" className="py-20 animated-bg">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
                >
                    About Me
                </motion.h2>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="aspect-square relative rounded-full overflow-hidden border-4 border-primary/20 shadow-lg max-w-xs mx-auto md:mx-0"
                        >
                            <Image src={portrait} alt="Portrait" layout="fill" objectFit="cover" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-secondary/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
                                <p className="text-lg mb-4 text-secondary-foreground">
                                    I&apos;m a Full Stack Developer with hands-on experience in web application development,
                                    microservices, and risk management operations. I combine strong technical skills with
                                    analytical thinking to deliver efficient and elegant solutions.
                                </p>
                                <p className="text-lg mb-4 text-secondary-foreground">
                                    Currently working as an Operations Risk Management Associate at Amazon while
                                    completing my Bachelor&apos;s in Computer Science at Free University of Bolzano. My
                                    professional journey includes experience in React.js, Spring Boot, and microservices
                                    architecture.
                                </p>
                                <p className="text-lg mb-6 text-secondary-foreground">
                                    I&apos;m passionate about problem-solving, data-driven decision making, and building software
                                    that makes a meaningful impact.
                                </p>

                                <div className="mb-6">
                                    <h3 className="flex items-center text-lg font-semibold mb-3 text-primary">
                                        <Globe className="mr-2 h-5 w-5" />
                                        Languages
                                    </h3>
                                    <div className="space-y-3">
                                        {languages.map((lang) => (
                                            <div key={lang.language}>
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="text-secondary-foreground">
                                                        {lang.language}
                                                        <span className="ml-2 text-sm text-muted-foreground">
                                                            {lang.level}
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="h-2 w-full bg-background/50 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${lang.proficiency}%` }}
                                                        transition={{ duration: 1, delay: 0.5 }}
                                                        viewport={{ once: true }}
                                                        className="h-full bg-primary rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-start">
                                    <Link href="/resume.pdf" download>
                                        <Button variant="default">
                                            <Download className="w-4 h-4 mr-2" />
                                            Download Resume
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection