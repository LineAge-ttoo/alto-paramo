"use client";

import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useJourneyStore } from "./journeyStore";

gsap.registerPlugin(ScrollTrigger);

export default function JourneyEngine() {

    const setActive = useJourneyStore((state) => state.setActive);

    useEffect(() => {

        const ctx = gsap.context(() => {

            const cards =
                gsap.utils.toArray<HTMLElement>(".journey-card");

            cards.forEach((card,index)=>{

                const image =
                    card.querySelector(".journey-image");

                const content =
                    card.querySelector(".journey-content");

                if(!image || !content) return;

                //------------------------------------------
                // Imagen
                //------------------------------------------

                gsap.fromTo(

                    image,

                    {

                        scale:1.12,

                        opacity:.82

                    },

                    {

                        scale:1,

                        opacity:1,

                        ease:"none",

                        scrollTrigger:{

                            trigger:card,

                            start:"top bottom",

                            end:"bottom top",

                            scrub:true

                        }

                    }

                );

                //------------------------------------------
                // Texto
                //------------------------------------------

                gsap.fromTo(

                    content,

                    {

                        y:80,

                        opacity:0

                    },

                    {

                        y:0,

                        opacity:1,

                        duration:1,

                        ease:"power3.out",

                        scrollTrigger:{

                            trigger:card,

                            start:"top 70%",

                            toggleActions:"play none none reverse"

                        }

                    }

                );

                //------------------------------------------
                // Indicador
                //------------------------------------------

                ScrollTrigger.create({

                    trigger:card,

                    start:"top center",

                    end:"bottom center",

                    onEnter(){

                        setActive(index);

                    },

                    onEnterBack(){

                        setActive(index);

                    }

                });

            });

        });

        return()=>ctx.revert();

    },[setActive]);

    return null;

}