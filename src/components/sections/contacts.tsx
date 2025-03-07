"use client"

import {useState, useRef} from "react"
import {motion} from "framer-motion"
import {Send, Mail, MapPin, Phone, Clock, CheckCircle, AlertCircle} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import emailjs from '@emailjs/browser'

const ContactSection = () => {
    const formRef = useRef(null)
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ""
    })

    const handleChange = (e: any) => {
        const {name, value} = e.target
        setFormState(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!formState.name || !formState.email || !formState.message) {
            setFormStatus({
                submitted: true,
                success: false,
                message: "Please fill out all required fields"
            })
            return
        }

        setIsSubmitting(true)

        try {
            const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
            const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
            const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

            const templateParams = {
                from_name: formState.name,
                from_email: formState.email,
                subject: formState.subject || "Contact from Portfolio",
                message: formState.message
            }

            await emailjs.send(serviceID, templateID, templateParams, userID)

            setFormStatus({
                submitted: true,
                success: true,
                message: "Message sent successfully! I'll get back to you soon."
            })

            // Reset form
            setFormState({
                name: "",
                email: "",
                subject: "",
                message: ""
            })

        } catch (error) {
            console.error("Failed to send email:", error)
            setFormStatus({
                submitted: true,
                success: false,
                message: "Failed to send message. Please try again or contact me directly via email."
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetForm = () => {
        setFormStatus({
            submitted: false,
            success: false,
            message: ""
        })
    }

    return (
        <section id="contact" className="py-20 animated-bg">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text"
                >
                    Get In Touch
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="lg:col-span-2 bg-secondary/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Mail className="w-5 h-5 text-primary mt-1 mr-4"/>
                                <div>
                                    <h4 className="text-sm text-muted-foreground mb-1">Email</h4>
                                    <a href="mailto:aboagyemaxwell@outlook.com"
                                       className="text-foreground hover:text-primary transition-colors">
                                        aboagyemaxwell@outlook.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-primary mt-1 mr-4"/>
                                <div>
                                    <h4 className="text-sm text-muted-foreground mb-1">Location</h4>
                                    <p className="text-foreground">Hamburg, Germany</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="w-5 h-5 text-primary mt-1 mr-4"/>
                                <div>
                                    <h4 className="text-sm text-muted-foreground mb-1">Phone</h4>
                                    <a href="tel:+491764574347"
                                       className="text-foreground hover:text-primary transition-colors">
                                        +49 176 457 44 347
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="w-5 h-5 text-primary mt-1 mr-4"/>
                                <div>
                                    <h4 className="text-sm text-muted-foreground mb-1">Work Hours</h4>
                                    <p className="text-foreground">Monday - Friday: 9AM - 6PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="lg:col-span-3 bg-secondary/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
                    >
                        {formStatus.submitted && formStatus.success ? (
                            <div className="flex flex-col items-center justify-center space-y-4 py-10">
                                <div
                                    className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                    <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400"/>
                                </div>
                                <h3 className="text-xl font-semibold text-center">{formStatus.message}</h3>
                                <Button onClick={resetForm} variant="outline" className="mt-4">
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>

                                {formStatus.submitted && !formStatus.success && (
                                    <div className="mb-6 p-4 rounded-lg bg-destructive/10 flex items-start">
                                        <AlertCircle className="h-5 w-5 text-destructive mr-2 mt-0.5"/>
                                        <p className="text-destructive">{formStatus.message}</p>
                                    </div>
                                )}

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm text-muted-foreground">Your Name
                                                *</label>
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={formState.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="bg-background/50 border-primary/20 focus:border-primary"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm text-muted-foreground">Your Email
                                                *</label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="bg-background/50 border-primary/20 focus:border-primary"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject"
                                               className="text-sm text-muted-foreground">Subject</label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            placeholder="How can I help you?"
                                            className="bg-background/50 border-primary/20 focus:border-primary"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm text-muted-foreground">Message
                                            *</label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            placeholder="Your message here..."
                                            className="bg-background/50 border-primary/20 focus:border-primary"
                                            rows={5}
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div
                                                    className="h-4 w-4 mr-2 border-2 border-t-transparent border-white rounded-full animate-spin"/>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2"/>
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection