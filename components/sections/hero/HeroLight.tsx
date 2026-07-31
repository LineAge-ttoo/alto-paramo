"use client";

import { useSceneStore } from "@/components/experience/sceneStore";

export default function HeroLight(){

    const{

        ambient,

        warmth,

        brightness

    }=useSceneStore();

    return(

        <div

            className="
                hero-glow
                absolute
                left-1/2
                top-0
                -translate-x-1/2
                rounded-full
                pointer-events-none
                transition-all
                duration-[1800ms]
            "

            style={{

                width:900*ambient,

                height:900*ambient,

                filter:`blur(${180*ambient}px)`,

                opacity:.12*brightness,

                background:`rgba(255,220,170,${0.15*warmth})`

            }}

        />

    );

}