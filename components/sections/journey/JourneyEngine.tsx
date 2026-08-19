"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JourneyEngine() {
    useEffect(() => {
        const journeyEl = document.getElementById("journey");
        if (!journeyEl) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                journeyEl,
                { opacity: 0.92 },
                {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: journeyEl,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return null;
}