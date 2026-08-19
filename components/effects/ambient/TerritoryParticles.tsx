"use client";

import { useEffect, useState, useRef, useId, useCallback } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine, Container, ISourceOptions } from "@tsparticles/engine";

interface TerritoryParticlesProps {
    className?: string;
    density?: "low" | "medium";
}

export default function TerritoryParticles({
    className = "",
    density = "medium"
}: TerritoryParticlesProps) {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (media.matches) {
            setReducedMotion(true);
        }
    }, []);

    const initEngine = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    if (reducedMotion) {
        return <div className={`pointer-events-none absolute inset-0 ${className}`} />;
    }

    return (
        <ParticlesProvider init={initEngine}>
            <TerritoryParticlesCanvas className={className} density={density} />
        </ParticlesProvider>
    );
}

function TerritoryParticlesCanvas({
    className,
    density
}: {
    className: string;
    density: "low" | "medium";
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesContainer = useRef<Container | null>(null);
    const [inView, setInView] = useState(true);
    const id = useId();

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isVisible = entry.isIntersecting;
                setInView(isVisible);
                if (particlesContainer.current) {
                    if (isVisible) {
                        particlesContainer.current.play();
                    } else {
                        particlesContainer.current.pause();
                    }
                }
            },
            { threshold: 0.05 }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        if (container) {
            particlesContainer.current = container;
            if (!inView) {
                container.pause();
            }
        }
    };

    const count = density === "low" ? 14 : 22;

    const options: ISourceOptions = {
        fpsLimit: 45,
        fullScreen: { enable: false },
        detectRetina: true,
        particles: {
            number: {
                value: count,
                density: {
                    enable: true,
                    width: 900,
                    height: 700
                }
            },
            color: {
                value: ["#D7C18A", "#E8DCCB", "#5B7A49", "#8A7356", "#C49A3A"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: { min: 0.08, max: 0.28 },
                animation: {
                    enable: true,
                    speed: 0.4,
                    sync: false
                }
            },
            size: {
                value: { min: 1.5, max: 3.5 },
                animation: {
                    enable: true,
                    speed: 0.3,
                    sync: false
                }
            },
            move: {
                enable: true,
                speed: 0.4,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "out"
                }
            }
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: {
                    enable: true
                }
            },
            modes: {
                repulse: {
                    distance: 80,
                    duration: 0.6,
                    speed: 0.3,
                    factor: 1.2
                },
                push: {
                    quantity: 2
                }
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        >
            <Particles
                id={`particles-${id.replace(/:/g, "")}`}
                className="h-full w-full pointer-events-none"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        </div>
    );
}
