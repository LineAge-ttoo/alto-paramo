"use client";

import { useEffect } from "react";

export default function HeroParallax() {

    useEffect(() => {

        const image = document.querySelector<HTMLElement>(".hero-bg");

        if (!image) return;

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        let scrollY = 0;

        function mouseMove(e: MouseEvent){

            mouseX =
                (e.clientX / window.innerWidth - 0.5) * 18;

            mouseY =
                (e.clientY / window.innerHeight - 0.5) * 18;

        }

        function onScroll(){

            scrollY =
                window.scrollY * 0.18;

        }

        function animate(){

            currentX += (mouseX-currentX)*0.06;

            currentY += (mouseY-currentY)*0.06;

            image.style.transform = `
                translate3d(
                    ${currentX}px,
                    ${currentY + scrollY}px,
                    0
                )
                scale(1.12)
            `;

            requestAnimationFrame(animate);

        }

        animate();

        window.addEventListener("mousemove",mouseMove);

        window.addEventListener("scroll",onScroll);

        return ()=>{

            window.removeEventListener("mousemove",mouseMove);

            window.removeEventListener("scroll",onScroll);

        };

    },[]);

    return null;

}