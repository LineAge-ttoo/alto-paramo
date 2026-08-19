"use client";

import { useEffect } from "react";

import { useSceneStore } from "@/components/experience/sceneStore";

export default function HeroParallax() {

    const scene = useSceneStore(state=>state.scene);

    useEffect(()=>{

        const layers =
            document.querySelectorAll<HTMLElement>("[data-depth]");

        if(!layers.length) return;

        let mouseX=0;
        let mouseY=0;

        let cameraX=0;
        let cameraY=0;

        let scrollY=window.scrollY;

        let raf=0;

        const sceneIntensity={

            hero:1,

            territory:.80,

            specialty:.65,

            coffee:.55,

            journey:.45,

            about:.35

        } as const;

        const intensity=
            sceneIntensity[scene] ?? 1;

        const onMouse=(e:MouseEvent)=>{

            mouseX=
                (e.clientX/window.innerWidth-.5)*26;

            mouseY=
                (e.clientY/window.innerHeight-.5)*22;

        };

        const onScroll=()=>{

            scrollY=window.scrollY;

        };

        let isVisible = true;
        let isRunning = false;

        const heroEl = document.getElementById("hero") || document.querySelector('[data-scene="hero"]');

        const observer = heroEl
            ? new IntersectionObserver(
                  ([entry]) => {
                      isVisible = entry.isIntersecting;
                      if (isVisible && !isRunning) {
                          isRunning = true;
                          raf = requestAnimationFrame(animate);
                      }
                  },
                  { rootMargin: "100px" }
              )
            : null;

        if (heroEl && observer) {
            observer.observe(heroEl);
        }

        function animate() {
            if (!isVisible) {
                isRunning = false;
                return;
            }

            cameraX += (mouseX - cameraX) * 0.045;
            cameraY += (mouseY - cameraY) * 0.045;

            layers.forEach((layer) => {
                const depth = Number(layer.dataset.depth ?? 0.1);

                const translateX = cameraX * depth * intensity;
                const translateY =
                    cameraY * depth * intensity + scrollY * depth * 0.08;

                const rotateY = cameraX * 0.02 * depth;
                const rotateX = -cameraY * 0.02 * depth;

                layer.style.transform = `
                    translate3d(${translateX}px,${translateY}px,0)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(${1.05 + depth * 0.06})
                `;
            });

            raf = requestAnimationFrame(animate);
        }

        isRunning = true;
        animate();

        window.addEventListener("mousemove", onMouse, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            cancelAnimationFrame(raf);
            isRunning = false;
            observer?.disconnect();
            window.removeEventListener("mousemove", onMouse);
            window.removeEventListener("scroll", onScroll);
        };

    },[scene]);

    return null;

}