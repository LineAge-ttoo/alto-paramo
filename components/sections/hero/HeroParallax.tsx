"use client";

import { useEffect } from "react";

export default function HeroParallax() {
    useEffect(() => {
        const image = document.querySelector<HTMLElement>(".hero-bg");

        function move(event: MouseEvent) {
            if (!image) return;

            const x = (event.clientX / window.innerWidth - 0.5) * 24;
            const y = (event.clientY / window.innerHeight - 0.5) * 24;

            image.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
        }

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, []);

    return null;
}