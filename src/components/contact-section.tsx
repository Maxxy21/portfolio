import type { FC } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const ContactSection: FC = () => {
    return (
        <section id="contact" className="py-20 animated-bg">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
                >
                    Get In Touch
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-md mx-auto bg-secondary/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
                >
                    <form className="space-y-6">
                        <div>
                            <Input type="text" placeholder="Your Name" className="bg-background/50" />
                        </div>
                        <div>
                            <Input type="email" placeholder="Your Email" className="bg-background/50" />
                        </div>
                        <div>
                            <Textarea placeholder="Your Message" className="bg-background/50" rows={4} />
                        </div>
                        <Button type="submit" className="w-full glow">
                            Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

