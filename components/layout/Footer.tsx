"use client";

import { site } from "@/config/site";
import { scrollToSection } from "@/lib/scrollTo";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#151412] via-[#121110] to-[#0c0b0a] py-16 sm:py-20 text-white">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* Brand & Manifesto */}
                    <div className="space-y-4 lg:col-span-6">
                        <button
                            type="button"
                            onClick={() => scrollToSection("#hero")}
                            className="text-2xl font-black uppercase tracking-[0.2em] text-white transition-colors hover:text-[#D7C18A]"
                        >
                            {site.name}
                        </button>
                        <p className="max-w-md text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                            Café de especialidad cultivado en las alturas de San Agustín, Huila,
                            en la intersección entre el patrimonio arqueológico, la biodiversidad
                            del bosque altoandino y la dedicación de las familias productoras.
                        </p>
                        <p className="pt-1 text-xs uppercase tracking-[0.3em] text-[#D7C18A]">
                            {site.tagline}
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-6">
                        {/* Plataforma */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                                Plataforma
                            </p>
                            <ul className="mt-4 space-y-2.5">
                                {site.navigation.slice(0, 5).map((item) => (
                                    <li key={item.href}>
                                        <button
                                            type="button"
                                            onClick={() => scrollToSection(item.href)}
                                            className="min-h-[30px] text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ecosistema */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                                Ecosistema
                            </p>
                            <ul className="mt-4 space-y-2.5">
                                {site.navigation.slice(5).map((item) => (
                                    <li key={item.href}>
                                        <button
                                            type="button"
                                            onClick={() => scrollToSection(item.href)}
                                            className="min-h-[30px] text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom credits */}
                <div className="mt-12 sm:mt-14 flex flex-col items-center justify-between gap-3.5 border-t border-white/10 pt-6 sm:pt-8 text-xs text-white/50 sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
                    </p>
                    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                        {site.origin.location} · {site.origin.region}
                    </p>
                </div>
            </div>
        </footer>
    );
}
