"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { scrollToSection } from "@/lib/scrollTo";
import MobileMenu from "@/components/navigation/MobileMenu";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (href: string) => {
        setMobileOpen(false);
        scrollToSection(href);
    };

    return (
        <>
            <header
                className={`
                    fixed
                    top-0
                    left-0
                    z-50
                    w-full
                    transition-all
                    duration-700
                    ease-out

                    ${
                        scrolled
                            ? "bg-black/65 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                            : "bg-gradient-to-b from-black/60 to-transparent"
                    }
                `}
            >
                <div
                    className={`
                        mx-auto
                        flex
                        max-w-7xl
                        items-center
                        justify-between
                        px-6
                        sm:px-8

                        transition-all
                        duration-700

                        ${scrolled ? "h-16" : "h-24"}
                    `}
                >
                    {/* Brand Logo */}
                    <button
                        onClick={() => handleNav("#hero")}
                        aria-label="Alto Páramo Inicio"
                        className={`
                            font-black
                            uppercase
                            tracking-[0.20em]
                            text-white
                            transition-all
                            duration-700
                            hover:text-[#D7C18A]
                            text-left

                            ${scrolled ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}
                        `}
                    >
                        {site.name}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-7 lg:gap-9 md:flex">
                        {site.navigation.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNav(item.href)}
                                className="
                                    relative
                                    uppercase
                                    tracking-[0.24em]
                                    text-[11px]
                                    font-medium
                                    text-white/75
                                    transition-all
                                    duration-300

                                    hover:text-white

                                    after:absolute
                                    after:left-0
                                    after:-bottom-2
                                    after:h-px
                                    after:w-0
                                    after:bg-[#D7C18A]
                                    after:transition-all
                                    after:duration-300

                                    hover:after:w-full
                                "
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={mobileOpen}
                        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 p-2 backdrop-blur-md transition-all hover:border-[#D7C18A]/50 md:hidden"
                    >
                        <span
                            className={`h-[1.5px] w-5 bg-white transition-all duration-300 ${
                                mobileOpen ? "translate-y-[4.5px] rotate-45 bg-[#D7C18A]" : ""
                            }`}
                        />
                        <span
                            className={`h-[1.5px] w-5 bg-white transition-all duration-300 ${
                                mobileOpen ? "-translate-y-[4.5px] -rotate-45 bg-[#D7C18A]" : ""
                            }`}
                        />
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        </>
    );
}