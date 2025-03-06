"use client"

import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

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
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:contact@maxwellaboagye.com"
                                className="text-foreground hover:text-primary transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
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