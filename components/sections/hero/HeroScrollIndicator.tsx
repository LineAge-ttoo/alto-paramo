"use client";

import { scrollToSection } from "@/lib/scrollTo";

export default function HeroScrollIndicator() {
    return (
        <button
            type="button"
            onClick={() => scrollToSection("#territorio")}
            aria-label="Desplazarse a la sección Territorio"
            className="hero-scroll group absolute bottom-10 left-1/2 z-20 -translate-x-1/2 cursor-pointer transition-transform duration-300 hover:scale-105"
        >
            <div className="flex flex-col items-center gap-3">
                <span className="text-xs uppercase tracking-[0.3em] text-white/60 transition-colors group-hover:text-[#D7C18A]">
                    Scroll
                </span>

                <div className="h-10 w-px bg-white/40 transition-colors group-hover:bg-[#D7C18A]" />
            </div>
        </button>
    );
}
