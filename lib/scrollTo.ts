import gsap from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function scrollToSection(target: string) {

    const element = document.querySelector(target);

    if (!element) return;

    gsap.to(window, {

        duration: 1.35,

        ease: "power3.inOut",

        scrollTo: {

            y: element,

            autoKill: true,

            offsetY: 0

        }

    });

}