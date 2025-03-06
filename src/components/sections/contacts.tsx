"use client"

import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactSection= () => {
    return (
        <section id="contact" className="py-20 animated-bg">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
                >
                    Get In Touch
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-secondary/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Mail className="w-5 h-5 text-primary mt-1 mr-4" />
                                <div>
                                    <h4 className="text-sm text-muted-foreground mb-1">Email</h4>
                                    <p className="text-foreground">contact@maxwellaboagye.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-primary mt-1 mr-4" />
                                <div>
                                    <h4 className="text-sm text-muted-foreground mb-1">Location</h4>
                                    <p className="text-foreground">Hamburg, Germany</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="w-5 h-5 text-primary mt-1 mr-4" />
                                <div>
                                    <h4 className="text-sm text-muted-foreground mb-1">Phone</h4>
                                    <p className="text-foreground">+49 123 456 7890</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="w-5 h-5 text-primary mt-1 mr-4" />
                                <div>
                                    <h4 className="text-sm text-muted-foreground mb-1">Work Hours</h4>
                                    <p className="text-foreground">Monday - Friday: 9AM - 6PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 bg-secondary/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm text-muted-foreground">Your Name</label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="bg-background/50 border-primary/20 focus:border-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm text-muted-foreground">Your Email</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="bg-background/50 border-primary/20 focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm text-muted-foreground">Subject</label>
                                <Input
                                    id="subject"
                                    type="text"
                                    placeholder="How can I help you?"
                                    className="bg-background/50 border-primary/20 focus:border-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-muted-foreground">Message</label>
                                <Textarea
                                    id="message"
                                    placeholder="Your message here..."
                                    className="bg-background/50 border-primary/20 focus:border-primary"
                                    rows={5}
                                />
                            </div>

                            <Button type="submit" className="glow w-full md:w-auto">
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
