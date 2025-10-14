"use client"

import {useState, useEffect} from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {Menu, X} from 'lucide-react'
import {Button} from '@/components/ui/button'

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "About",
        page: "#about",
    },
    {
        label: "Journey",
        page: "#experience",
    },
    {
        label: "Skills",
        page: "#skills",
    },
    {
        label: "Contact",
        page: "#contact",
    },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)

    // After mounting, we can safely show the UI that depends on theme
    useEffect(() => {
        setMounted(true)
    }, [])

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // If not mounted yet, display a pre-rendered version to avoid hydration issues
    if (!mounted) {
        return (
            <header className="fixed top-0 left-0 right-0 z-50 py-5 bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold gradient-text">
                            Maxwell
                        </Link>
                        <div className="opacity-0">Placeholder</div>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'py-3 bg-background/80 backdrop-blur-lg shadow-lg'
                    : 'py-5 bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold gradient-text">
                        Maxwell
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                href={item.page}
                                className="text-sm text-foreground hover:text-primary transition-colors duration-300"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6"/>
                            ) : (
                                <Menu className="h-6 w-6"/>
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="md:hidden"
                initial={{opacity: 0, height: 0}}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    height: isMenuOpen ? "auto" : 0
                }}
                transition={{duration: 0.3}}
            >
                {isMenuOpen && (
                    <div className="container mx-auto px-4 py-4 bg-background/95 backdrop-blur-lg">
                        <nav className="flex flex-col space-y-4">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.page}
                                    className="text-foreground hover:text-primary transition-colors py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </motion.div>
        </header>
    )
}

export default Navbar