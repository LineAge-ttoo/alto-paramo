"use client";

import { site } from "@/config/site";

export default function Contact() {
    return (
        <section
            id="contacto"
            data-scene="about"
            className="relative overflow-hidden bg-gradient-to-b from-[#1a1918] via-[#1a1815] to-[#151412] py-18 sm:py-22 md:py-26 lg:py-28"
        >
            {/* Broad centered warm ambient light pool behind title */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 50% 45%, rgba(215,193,138,0.16), transparent 65%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
                <span className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                    CANALES DIRECTOS
                </span>

                <h2 className="mt-4 text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    Conversemos sobre el origen.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8 md:text-xl">
                    Estamos en San Agustín, Huila. Ya sea que busques microlotes de especialidad,
                    conocer nuestro proceso o colaborar con las familias productoras, estamos listos para escucharte.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-6">
                    <a
                        href={`mailto:${site.contact.email}`}
                        className="
                            inline-flex
                            min-h-[48px]
                            items-center
                            gap-3
                            rounded-full
                            bg-[#D7C18A]
                            px-8
                            py-3
                            text-xs sm:text-sm
                            font-semibold
                            tracking-wide
                            text-stone-900
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-[#e2ce9d]
                            hover:shadow-[0_8px_30px_rgba(215,193,138,0.35)]
                        "
                    >
                        <span>Escríbenos a {site.contact.email}</span>
                        <span>→</span>
                    </a>
                </div>

                <div className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6 border-t border-white/10 pt-8 sm:pt-10 text-[11px] font-medium uppercase tracking-[0.25em] text-white/55">
                    <span>{site.origin.location}</span>
                    <span>·</span>
                    <span>{site.origin.ecosystem}</span>
                    <span>·</span>
                    <span>{site.origin.altitude}</span>
                </div>
            </div>
        </section>
    );
}
