"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";

export default function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const onScroll = () => {

            setScrolled(window.scrollY > 60);

        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, []);

    function goTo(id: string) {

        const section = document.querySelector(id);

        if (!section) return;

        section.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

    return (

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
                        ? "bg-black/55 backdrop-blur-2xl border-b border-white/10"
                        : "bg-transparent"
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
                    px-8

                    transition-all
                    duration-700

                    ${scrolled ? "h-16" : "h-24"}

                `}

            >

                <button

                    onClick={() => goTo("#hero")}

                    className={`
                        font-black
                        uppercase
                        tracking-[0.18em]
                        text-white
                        transition-all
                        duration-700

                        ${scrolled ? "text-2xl" : "text-4xl"}

                    `}

                >

                    {site.name}

                </button>

                <nav className="hidden items-center gap-10 md:flex">

                    {site.navigation.map((item) => (

                        <button

                            key={item.href}

                            onClick={() => goTo(item.href)}

                            className="
                                relative
                                uppercase
                                tracking-[0.28em]
                                text-xs
                                text-white/80
                                transition-all
                                duration-300

                                hover:text-white

                                after:absolute
                                after:left-0
                                after:-bottom-2
                                after:h-px
                                after:w-0
                                after:bg-[#C7A96B]
                                after:transition-all
                                after:duration-300

                                hover:after:w-full
                            "

                        >

                            {item.label}

                        </button>

                    ))}

                </nav>

            </div>

        </header>

    );

}