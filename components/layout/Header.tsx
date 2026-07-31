"use client";

import Link from "next/link";
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
                    ? "bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
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
        <Link
          href="/"
          className={`
                        font-black
                        tracking-[0.18em]
                        uppercase
                        text-white
                        transition-all
                        duration-700

                        ${scrolled ? "text-2xl" : "text-4xl"}
                    `}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {site.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
