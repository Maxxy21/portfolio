import type { FC } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export const AboutSection: FC = () => {
    return (
        <section id="about" className="py-20 animated-bg">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text"
                >
                    About e
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto bg-secondary/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
                >
                    <p className="text-lg mb-6 text-secondary-foreground">
                        I`&lsquo;`m a passionate developer with a knack for turning complex problems into elegant, efficient solutions. My
                        journey in tech is driven by an insatiable curiosity and a desire to push the boundaries of what`&lsquo;`s possible
                        in the digital realm.
                    </p>
                    <p className="text-lg mb-6 text-secondary-foreground">
                        When I`&lsquo;`m not immersed in code, you`&lsquo;`ll find me exploring emerging technologies, contributing to open-source
                        projects, or sharing knowledge through tech community events. I believe in the power of technology to create
                        positive change and I`&lsquo;`m always excited to be part of that process.
                    </p>
                    <div className="flex justify-center">
                        <Button variant="default" className="glow">
                            Download Resume
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

