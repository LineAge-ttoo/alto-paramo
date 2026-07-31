"use client";

import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxEngine(){

    useEffect(()=>{

        const images=gsap.utils.toArray<HTMLElement>(".parallax-image");

        images.forEach((image)=>{

            gsap.to(image,{

                yPercent:20,
                ease:"none",

                scrollTrigger:{
                    trigger:image,
                    start:"top bottom",
                    end:"bottom top",
                    scrub:true
                }

            });

        });

    },[]);

    return null;

}
