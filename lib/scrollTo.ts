import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollToPlugin);
}

export function scrollToSection(target: string) {
    if (typeof window === "undefined") return;

    const element = document.querySelector(target);
    if (!element) return;

    try {
        gsap.to(window, {
            duration: 1.2,
            ease: "power3.inOut",
            scrollTo: {
                y: element,
                autoKill: true,
                offsetY: 0
            }
        });
    } catch {
        element.scrollIntoView({ behavior: "smooth" });
    }
}