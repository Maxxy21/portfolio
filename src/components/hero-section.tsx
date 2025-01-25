import type { FC } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export const HeroSection: FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden animated-bg">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">Your Name</h1>
                <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                    Creative Developer | Problem Solver | Tech Enthusiast
                </p>
                <div className="flex justify-center space-x-4">
                    <Button variant="default" className="glow">
                        View Projects
                    </Button>
                    <Button variant="outline">Contact Me</Button>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute inset-0 z-0"
            >
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8"
            >
                <Button variant="ghost" size="icon" className="animate-bounce">
                    <ChevronDown className="h-6 w-6" />
                </Button>
            </motion.div>
        </section>
    )
}

