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
        const particleCount = 50
        const particleBaseRadius = 1
        const particleAddedRadius = 1
        const connectionDistance = 100
        const moveSpeed = 0.5

        // Set canvas size
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
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
                    alpha: 0.1 + Math.random() * 0.4
                })
            }
        }

        // Draw particles
        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Set color based on theme
            const particleColor = resolvedTheme === 'dark'
                ? 'rgba(255, 215, 0, ' // Gold in dark mode
                : 'rgba(0, 0, 0, '     // Black in light mode

            // Update and draw particles
            particles.forEach((p, i) => {
                // Move particles
                p.x += p.vx
                p.y += p.vy

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                // Draw particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = `${particleColor}${p.alpha})`
                ctx.fill()

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const distance = Math.sqrt(
                        Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
                    )

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = `${particleColor}${(p.alpha * p2.alpha * 0.25) * (1 - distance / connectionDistance)})`
                        ctx.lineWidth = 0.7
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
        handleResize()
        drawParticles()

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [resolvedTheme, mounted])

    if (!mounted) return null

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 opacity-20"
        />
    )
}

export default ParticlesBackground