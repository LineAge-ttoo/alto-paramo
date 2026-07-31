"use client";

import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal(){

    useEffect(()=>{

        const elements=gsap.utils.toArray<HTMLElement>(".reveal");

        elements.forEach((element)=>{

            gsap.fromTo(

                element,

                {
                    opacity:0,
                    y:80
                },

                {
                    opacity:1,
                    y:0,
                    duration:1.3,
                    ease:"power3.out",

                    scrollTrigger:{
                        trigger:element,
                        start:"top 82%",
                        once:true
                    }

                }

            );

        });

    },[]);

    return null;

}
