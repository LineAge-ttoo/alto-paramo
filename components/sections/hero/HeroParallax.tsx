"use client";

import { useEffect } from "react";

import { useSceneStore } from "@/components/experience/sceneStore";

export default function HeroParallax() {

    const scene = useSceneStore((state) => state.scene);

    useEffect(() => {

        const layers = document.querySelectorAll<HTMLElement>("[data-depth]");

        if (!layers.length) return;

        let mouseX = 0;
        let mouseY = 0;

        let smoothX = 0;
        let smoothY = 0;

        let scroll = window.scrollY;

        let frame = 0;

        const sceneMultiplier = {

            hero:1,

            territory:.75,

            specialty:.55,

            coffee:.45,

            journey:.35,

            about:.25

        } as const;

        const multiplier =
            sceneMultiplier[scene] ?? 1;

        const onMouseMove = (e:MouseEvent)=>{

            mouseX =
                (e.clientX/window.innerWidth-.5)*30;

            mouseY =
                (e.clientY/window.innerHeight-.5)*30;

        };

        const onScroll=()=>{

            scroll=window.scrollY;

        };

        const animate=()=>{

            smoothX += (mouseX-smoothX)*0.06;

            smoothY += (mouseY-smoothY)*0.06;

            layers.forEach(layer=>{

                const depth =
                    Number(layer.dataset.depth ?? 0);

                const x =
                    smoothX*depth*multiplier;

                const y =
                    smoothY*depth*multiplier +
                    scroll*depth*.12;

                layer.style.transform =

                    `translate3d(${x}px,${y}px,0) scale(1.08)`;

            });

            frame=requestAnimationFrame(animate);

        };

        animate();

        window.addEventListener("mousemove",onMouseMove);

        window.addEventListener("scroll",onScroll);

        return()=>{

            cancelAnimationFrame(frame);

            window.removeEventListener("mousemove",onMouseMove);

            window.removeEventListener("scroll",onScroll);

        };

    },[scene]);

    return null;

}