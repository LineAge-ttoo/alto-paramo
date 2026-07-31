"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScrollIndicator from "./HeroScrollIndicator";
import HeroParallax from "./HeroParallax";

export default function Hero() {

    const hero = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(".hero-title", {
                y: 60,
                opacity: 0,
                duration: 1.4,
                ease: "power3.out",
            });

            gsap.from(".hero-text", {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
            });

            gsap.from(".hero-buttons", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.8,
                ease: "power3.out",
            });

        }, hero);

        return () => ctx.revert();

    }, []);

    return (

        <section
            ref={hero}
            className="relative h-screen overflow-hidden"
        >

            <HeroParallax />

            <HeroBackground />

            <div className="relative z-10 flex h-full items-center">

                <HeroContent />

            </div>

            <HeroScrollIndicator />

        </section>

    );

}