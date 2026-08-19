"use client";

import { useEffect, useRef, useState } from "react";

interface TerritoryParticlesProps {
    className?: string;
    density?: "low" | "medium";
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseVx: number;
    baseVy: number;
    radius: number;
    color: string;
    alpha: number;
    baseAlpha: number;
    pulseSpeed: number;
    pulsePhase: number;
}

const PALETTE = [
    "215, 193, 138", // Ámbar tenue (#D7C18A)
    "232, 220, 203", // Marfil cálido (#E8DCCB)
    "91, 122, 73",   // Verde musgo (#5B7A49)
    "138, 115, 86",  // Tierra mineral (#8A7356)
    "196, 154, 58"   // Oro viejo tenue (#C49A3A)
];

export default function TerritoryParticles({
    className = "",
    density = "medium"
}: TerritoryParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (media.matches) {
            setReducedMotion(true);
        }
    }, []);

    useEffect(() => {
        if (reducedMotion) return;
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let isVisible = true;
        let lastTime = 0;
        const fpsInterval = 1000 / 40; // Target ~40 FPS for smooth, efficient rendering

        let width = (canvas.width = container.offsetWidth);
        let height = (canvas.height = container.offsetHeight);

        const particleCount =
            density === "low"
                ? width < 768 ? 10 : 16
                : width < 768 ? 14 : 24;

        // Initialize particles
        const particles: Particle[] = Array.from({ length: particleCount }).map(() => {
            const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
            const baseAlpha = 0.08 + Math.random() * 0.18; // 0.08 - 0.26
            const baseVx = (Math.random() - 0.5) * 0.35;
            const baseVy = -0.15 - Math.random() * 0.25; // Gentle upward/ambient drift
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                vx: baseVx,
                vy: baseVy,
                baseVx,
                baseVy,
                radius: 1.2 + Math.random() * 2.2,
                color,
                alpha: baseAlpha,
                baseAlpha,
                pulseSpeed: 0.015 + Math.random() * 0.02,
                pulsePhase: Math.random() * Math.PI * 2
            };
        });

        // Mouse & Touch interaction state
        const pointer = {
            x: -1000,
            y: -1000,
            active: false,
            radius: 90
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            pointer.x = e.clientX - rect.left;
            pointer.y = e.clientY - rect.top;
            pointer.active = true;
        };

        const handleMouseLeave = () => {
            pointer.active = false;
            pointer.x = -1000;
            pointer.y = -1000;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!container || e.touches.length === 0) return;
            const rect = container.getBoundingClientRect();
            pointer.x = e.touches[0].clientX - rect.left;
            pointer.y = e.touches[0].clientY - rect.top;
            pointer.active = true;
        };

        const handleTouchEnd = () => {
            pointer.active = false;
            pointer.x = -1000;
            pointer.y = -1000;
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        window.addEventListener("touchend", handleTouchEnd, { passive: true });

        // Resize observer
        const resizeObserver = new ResizeObserver(() => {
            if (!container || !canvas) return;
            width = canvas.width = container.offsetWidth;
            height = canvas.height = container.offsetHeight;
        });
        resizeObserver.observe(container);

        // Intersection observer for pausing offscreen
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0.05 }
        );
        intersectionObserver.observe(container);

        // Render loop
        const render = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(render);

            if (!isVisible) return;

            const elapsed = currentTime - lastTime;
            if (elapsed < fpsInterval) return;
            lastTime = currentTime - (elapsed % fpsInterval);

            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Breathing opacity pulse
                p.pulsePhase += p.pulseSpeed;
                p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.06;
                if (p.alpha < 0.04) p.alpha = 0.04;

                // Mouse / Touch repulse interaction
                if (pointer.active) {
                    const dx = p.x - pointer.x;
                    const dy = p.y - pointer.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < pointer.radius && dist > 0) {
                        const force = (1 - dist / pointer.radius) * 1.8;
                        const nx = dx / dist;
                        const ny = dy / dist;
                        p.vx += nx * force * 0.4;
                        p.vy += ny * force * 0.4;
                    }
                }

                // Drag back towards base velocity (smooth natural return)
                p.vx += (p.baseVx - p.vx) * 0.04;
                p.vy += (p.baseVy - p.vy) * 0.04;

                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges smoothly
                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                if (p.y > height + 10) p.y = -10;

                // Draw soft ambient particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
                ctx.fill();
            }
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
        };
    }, [density, reducedMotion]);

    if (reducedMotion) {
        return null;
    }

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        >
            <canvas
                ref={canvasRef}
                className="pointer-events-none block h-full w-full opacity-90"
            />
        </div>
    );
}
