"use client";

import { site } from "@/config/site";

export default function Contact() {
    return (
        <section
            id="contacto"
            data-scene="about"
            className="relative overflow-hidden bg-[#070707] py-32 sm:py-40"
        >
            {/* Background radial glow */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 50% 100%, rgba(215,193,138,0.08), transparent 65%)"
                }}
            />

            <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 text-center">
                <span className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                    CANALES DIRECTOS
                </span>

                <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-6xl md:text-7xl">
                    Conversemos sobre el origen.
                </h2>

                <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
                    Estamos en San Agustín, Huila. Ya sea que busques microlotes de especialidad,
                    conocer nuestro proceso o colaborar con las familias productoras, estamos listos para escucharte.
                </p>

                <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
                    <a
                        href={`mailto:${site.contact.email}`}
                        className="
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            bg-[#D7C18A]
                            px-8
                            py-4
                            text-sm
                            font-semibold
                            tracking-wide
                            text-stone-900
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_12px_40px_rgba(215,193,138,0.3)]
                        "
                    >
                        <span>Escríbenos a {site.contact.email}</span>
                        <span>→</span>
                    </a>
                </div>

                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10 text-xs uppercase tracking-[0.25em] text-white/50">
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
