"use client";

import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JourneyEngine() {

    useEffect(() => {

        const ctx = gsap.context(() => {

            const cards = gsap.utils.toArray<HTMLElement>(".journey-card");

            cards.forEach((card) => {

                const image = card.querySelector(".journey-image");

                const content = card.querySelector(".journey-content");

                if (!image || !content) return;

                gsap.fromTo(

                    image,

                    {

                        scale:1.15,

                        opacity:.75

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

                gsap.fromTo(

                    content,

                    {

                        y:80,

                        opacity:0

                    },

                    {

                        y:0,

                        opacity:1,

                        ease:"power2.out",

                        scrollTrigger:{

                            trigger:card,

                            start:"top 70%",

                            end:"top 40%",

                            scrub:1

                        }

                    }

                );

            });

        });

        return () => ctx.revert();

    }, []);

    return null;

}