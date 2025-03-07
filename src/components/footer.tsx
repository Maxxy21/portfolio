"use client"

import React from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import Image from "next/image";
import gitHub from "@/assets/github-mark-white.svg";
import linkedin from "@/assets/linkedin.png";

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 bg-secondary/50 backdrop-blur-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="text-2xl font-bold gradient-text">
                            Maxwell
                        </Link>
                        <p className="mt-2 text-sm text-muted-foreground max-w-md">
                            Building innovative solutions with modern web technologies.
                            Based in Hamburg, Germany and available for projects worldwide.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex space-x-4 mb-4">
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
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Maxwell Aboagye. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer