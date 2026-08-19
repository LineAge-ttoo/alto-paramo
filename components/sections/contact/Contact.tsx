"use client";

import { site } from "@/config/site";

export default function Contact() {
    return (
        <section
            id="contacto"
            data-scene="about"
            className="relative overflow-hidden bg-gradient-to-b from-[#181614] via-[#161412] to-[#121110] py-28 sm:py-36 md:py-44"
        >
            {/* Broad centered warm ambient light pool */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(215,193,138,0.12), transparent 65%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
                <span className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                    CANALES DIRECTOS
                </span>

                <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Conversemos sobre el origen.
                </h2>

                <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9 md:text-xl">
                    Estamos en San Agustín, Huila. Ya sea que busques microlotes de especialidad,
                    conocer nuestro proceso o colaborar con las familias productoras, estamos listos para escucharte.
                </p>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                    <a
                        href={`mailto:${site.contact.email}`}
                        className="
                            inline-flex
                            min-h-[50px]
                            items-center
                            gap-3
                            rounded-full
                            bg-[#D7C18A]
                            px-8
                            py-3.5
                            text-xs sm:text-sm
                            font-semibold
                            tracking-wide
                            text-stone-900
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-[#e2ce9d]
                            hover:shadow-[0_8px_30px_rgba(215,193,138,0.3)]
                        "
                    >
                        <span>Escríbenos a {site.contact.email}</span>
                        <span>→</span>
                    </a>
                </div>

                <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 border-t border-white/10 pt-10 text-[11px] font-medium uppercase tracking-[0.25em] text-white/50">
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
