"use client"

import { motion } from "framer-motion"
import { Download, Globe, GraduationCap, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import portrait from "../../assets/portrait.jpg"
import Link from "next/link";
import { useState } from "react"

// Languages
const languages = "English (Native) • German (B2) • Italian (C1)"

const AboutSection = () => {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <section id="about" className="py-16 md:py-20 animated-bg">
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

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 flex justify-center"
                        >
                            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg w-full max-w-sm">
                                {!imageLoaded && (
                                    <Skeleton className="absolute inset-0 w-full h-full" />
                                )}
                                <Image
                                    src={portrait}
                                    alt="Portrait"
                                    layout="fill"
                                    objectFit="cover"
                                    onLoadingComplete={() => setImageLoaded(true)}
                                    className={imageLoaded ? "opacity-100" : "opacity-0"}
                                    style={{ transition: "opacity 0.3s ease-in-out" }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="md:col-span-3"
                        >
                            <div className="bg-secondary/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
                           <p className="text-lg mb-4 text-secondary-foreground">
    I&apos;m a software developer who likes solving annoying problems with code. Currently at Amazon Hamburg, where I built a browser extension that automated a tedious 15-minute workflow down to a single click for our operations team.
</p>
<p className="text-lg mb-4 text-secondary-foreground">
    I work across the full stack, React/TypeScript on the frontend, Spring Boot and Node.js on the backend. My bachelor thesis was an AI pitch evaluator that helps startups get better feedback on their presentations.
</p>
<p className="text-lg mb-6 text-secondary-foreground">
    I&apos;m comfortable jumping between building user interfaces, debugging backend issues, and figuring out why the deployment pipeline broke (again). If there&apos;s a repetitive task that&apos;s wasting people&apos;s time, I&apos;ll probably try to automate it.
</p>


                                <div className="mb-6">
                                    <h3 className="flex items-center text-lg font-semibold mb-3 text-primary">
                                        <Globe className="mr-2 h-5 w-5" />
                                        Languages
                                    </h3>
                                    <p className="text-secondary-foreground">
                                        {languages}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 justify-start">
                                    <Link href="/resume_en.pdf" download>
                                        <Button variant="default">
                                            <Download className="w-4 h-4 mr-2" />
                                            Resume (EN)
                                        </Button>
                                    </Link>
                                    <Link href="/resume_de.pdf" download>
                                        <Button variant="outline">
                                            <Download className="w-4 h-4 mr-2" />
                                            Lebenslauf (DE)
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