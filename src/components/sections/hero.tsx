"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

import gitHub from "../../assets/github-mark-white.svg"
import linkedin from "../../assets/linkedin.png"

const HeroSection = () => {
    return (
        <section
            className="min-h-screen flex flex-col justify-center items-center p-6 relative overflow-hidden animated-bg">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute h-96 w-96 rounded-full bg-primary/30 blur-3xl top-1/4 -left-48"/>
                <div className="absolute h-96 w-96 rounded-full bg-primary/20 blur-3xl bottom-1/4 -right-48"/>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 max-w-4xl text-center"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text">
                    Maxwell Aboagye
                </h1>
                <p className="text-xl md:text-2xl mb-6 text-muted-foreground">
                    Software Developer | Full-Stack & DevOps
                </p>
                <p className="text-lg max-w-2xl mx-auto mb-8 text-secondary-foreground">
    I build tools that people actually use. From browser extensions that save teams hours of manual work to full-stack applications with real-time data processing. Currently at Amazon Hamburg, shipping production code and automating workflows.
</p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <Link href={"#experience"}>
                        <Button variant="default">
                            View My Journey
                        </Button>
                    </Link>

                    <Link href={"#contact"}>
                        <Button variant="outline">
                            Contact Me
                        </Button>
                    </Link>
                </div>

                <div className="flex justify-center gap-6">
                    <Link href={"https://github.com/Maxxy21"} target="_blank" rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors">
                        <Image src={gitHub} alt="GitHub" width={24} height={24}/>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/maxwell-aboagye/"} target="_blank" rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors">
                        <Image src={linkedin} alt="LinkedIn" width={24} height={24}/>
                    </Link>
                    <Link href="mailto:aboagyemaxwell@outlook.com"
                       className="text-foreground hover:text-primary transition-colors">
                        <Mail className="w-6 h-6"/>
                    </Link>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8"
            >
                <Link href={"#about"}
                      className="text-foreground hover:text-primary transition-colors">
                    <Button variant="ghost" size="icon" className="animate-bounce">
                        <ArrowDown className="h-6 w-6"/>
                    </Button>
                </Link>
            </motion.div>
        </section>
    )
}

export default HeroSection