"use client";

import { site } from "@/config/site";
import { scrollToSection } from "@/lib/scrollTo";

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-[#050505] py-20 text-white">
            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                <div className="grid gap-12 lg:grid-cols-12">
                    {/* Brand & Manifesto */}
                    <div className="space-y-6 lg:col-span-6">
                        <button
                            type="button"
                            onClick={() => scrollToSection("#hero")}
                            className="text-2xl font-black uppercase tracking-[0.2em] text-white transition-colors hover:text-[#D7C18A]"
                        >
                            {site.name}
                        </button>
                        <p className="max-w-md text-sm leading-7 text-white/70">
                            Café de especialidad cultivado en las alturas de San Agustín, Huila,
                            en la intersección entre el patrimonio arqueológico, la biodiversidad
                            del bosque altoandino y la dedicación de las familias productoras.
                        </p>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#D7C18A]">
                            {site.tagline}
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-6">
                        {/* Explorar */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D7C18A]">
                                Plataforma
                            </p>
                            <ul className="mt-4 space-y-3">
                                {site.navigation.slice(0, 5).map((item) => (
                                    <li key={item.href}>
                                        <button
                                            type="button"
                                            onClick={() => scrollToSection(item.href)}
                                            className="text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
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
                            <ul className="mt-4 space-y-3">
                                {site.navigation.slice(5).map((item) => (
                                    <li key={item.href}>
                                        <button
                                            type="button"
                                            onClick={() => scrollToSection(item.href)}
                                            className="text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
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
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
                    </p>
                    <p className="tracking-widest uppercase text-[10px] text-white/40">
                        {site.origin.location} · {site.origin.region}
                    </p>
                </div>
            </div>
        </footer>
    );
}
