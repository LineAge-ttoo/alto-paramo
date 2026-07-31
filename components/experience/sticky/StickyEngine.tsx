"use client";

import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StickyEngine() {

    useEffect(() => {

        const ctx = gsap.context(() => {

            const sections = gsap.utils.toArray<HTMLElement>(".sticky-section");

            sections.forEach((section) => {

                const content = section.querySelector(".sticky-content");

                if (!content) return;

                ScrollTrigger.create({

                    trigger: section,

                    pin: content,

                    start: "top top",

                    end: "bottom bottom",

                    scrub: true,

                    invalidateOnRefresh: true,

                    anticipatePin: 1,

                });

            });

        });

        return () => {

            ctx.revert();

            ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        };

    }, []);

    return null;

}