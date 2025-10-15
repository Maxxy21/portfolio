"use client"

import { useRef, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

type Particle = {
    x: number
    y: number
    radius: number
    vx: number
    vy: number
    alpha: number
    hue: number
    pulseSpeed: number
    pulsePhase: number
}

const ParticlesBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // After mounting, we can safely use theme data
    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        let mouseX = 0
        let mouseY = 0
        let time = 0
        const particleCount = 100
        const particleBaseRadius = 1.5
        const particleAddedRadius = 2
        const connectionDistance = 150
        const moveSpeed = 0.8
        const mouseInfluence = 100

        // Set canvas size
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY
        }

        // Initialize particles
        const initParticles = () => {
            particles = []
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: particleBaseRadius + Math.random() * particleAddedRadius,
                    vx: (Math.random() - 0.5) * moveSpeed,
                    vy: (Math.random() - 0.5) * moveSpeed,
                    alpha: 0.2 + Math.random() * 0.6,
                    hue: Math.random() * 60, // Random hue variation
                    pulseSpeed: 0.02 + Math.random() * 0.03,
                    pulsePhase: Math.random() * Math.PI * 2
                })
            }
        }

        // Draw particles
        const drawParticles = () => {
            time += 0.01
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Set base color based on theme
            const isDark = resolvedTheme === 'dark'
            const baseHue = isDark ? 45 : 0 // Gold hue for dark, black for light
            const baseSaturation = isDark ? 95 : 0
            const baseLightness = isDark ? 53 : 0

            // Update and draw particles
            particles.forEach((p, i) => {
                // Mouse interaction - repel particles
                const dx = mouseX - p.x
                const dy = mouseY - p.y
                const distToMouse = Math.sqrt(dx * dx + dy * dy)

                if (distToMouse < mouseInfluence) {
                    const force = (mouseInfluence - distToMouse) / mouseInfluence
                    p.vx -= (dx / distToMouse) * force * 0.5
                    p.vy -= (dy / distToMouse) * force * 0.5
                }

                // Move particles with wave motion
                p.x += p.vx + Math.sin(time + p.pulsePhase) * 0.2
                p.y += p.vy + Math.cos(time + p.pulsePhase) * 0.2

                // Apply friction
                p.vx *= 0.99
                p.vy *= 0.99

                // Keep particles in bounds with wrapping
                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0

                // Pulsing radius
                const pulseFactor = 1 + Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.5
                const currentRadius = p.radius * pulseFactor

                // Dynamic color with hue shift
                const hue = baseHue + p.hue + Math.sin(time * 0.5 + i) * 20
                const dynamicAlpha = p.alpha * (0.8 + Math.sin(time + p.pulsePhase) * 0.2)

                // Draw particle with glow
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentRadius * 2)
                gradient.addColorStop(0, `hsla(${hue}, ${baseSaturation}%, ${baseLightness}%, ${dynamicAlpha})`)
                gradient.addColorStop(0.5, `hsla(${hue}, ${baseSaturation}%, ${baseLightness}%, ${dynamicAlpha * 0.5})`)
                gradient.addColorStop(1, `hsla(${hue}, ${baseSaturation}%, ${baseLightness}%, 0)`)

                ctx.beginPath()
                ctx.arc(p.x, p.y, currentRadius * 2, 0, Math.PI * 2)
                ctx.fillStyle = gradient
                ctx.fill()

                // Draw connections with gradient
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const distance = Math.sqrt(
                        Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
                    )

                    if (distance < connectionDistance) {
                        const connectionStrength = (1 - distance / connectionDistance)
                        const lineGradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y)
                        const hue1 = baseHue + p.hue + Math.sin(time * 0.5 + i) * 20
                        const hue2 = baseHue + p2.hue + Math.sin(time * 0.5 + j) * 20

                        lineGradient.addColorStop(0, `hsla(${hue1}, ${baseSaturation}%, ${baseLightness}%, ${dynamicAlpha * connectionStrength * 0.3})`)
                        lineGradient.addColorStop(1, `hsla(${hue2}, ${baseSaturation}%, ${baseLightness}%, ${p2.alpha * connectionStrength * 0.3})`)

                        ctx.beginPath()
                        ctx.strokeStyle = lineGradient
                        ctx.lineWidth = connectionStrength * 1.5
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            })

            animationFrameId = requestAnimationFrame(drawParticles)
        }

        // Initialize
        window.addEventListener('resize', handleResize)
        window.addEventListener('mousemove', handleMouseMove)
        handleResize()
        drawParticles()

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [resolvedTheme, mounted])

    if (!mounted) return null

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 opacity-30"
        />
    )
}

export default ParticlesBackground