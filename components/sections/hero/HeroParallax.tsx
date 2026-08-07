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

        function animate(){

            cameraX+=(mouseX-cameraX)*0.045;

            cameraY+=(mouseY-cameraY)*0.045;

            layers.forEach(layer=>{

                const depth=
                    Number(layer.dataset.depth ?? .1);

                const translateX=
                    cameraX*depth*intensity;

                const translateY=
                    cameraY*depth*intensity+
                    scrollY*depth*.08;

                const rotateY=
                    cameraX*.02*depth;

                const rotateX=
                    -cameraY*.02*depth;

                layer.style.transform=`

                    translate3d(${translateX}px,${translateY}px,0)

                    rotateX(${rotateX}deg)

                    rotateY(${rotateY}deg)

                    scale(${1.05+depth*.06})

                `;

            });

            raf=requestAnimationFrame(animate);

        }

        animate();

        window.addEventListener("mousemove",onMouse);

        window.addEventListener("scroll",onScroll,{passive:true});

        return()=>{

            cancelAnimationFrame(raf);

            window.removeEventListener("mousemove",onMouse);

            window.removeEventListener("scroll",onScroll);

        };

    },[scene]);

    return null;

}