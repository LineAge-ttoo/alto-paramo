"use client";

import CoffeeCard from "./CoffeeCard";

export default function CoffeeLines() {
    return (
        <section
            id="cafe"
            data-scene="coffee"
            className="relative bg-gradient-to-b from-[#121410] via-[#141712] to-[#141712] py-18 sm:py-22 md:py-26 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mb-12 text-center sm:mb-16 md:mb-20">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        NUESTRAS DOS LÍNEAS
                    </p>

                    <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Dos expresiones.
                        <br />
                        Un mismo territorio.
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8 md:text-xl">
                        El mismo territorio se expresa de dos maneras.
                        Una busca revelar toda la complejidad del origen;
                        la otra acompaña la vida cotidiana sin perder su esencia.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
                    <CoffeeCard
                        title="Especial"
                        subtitle="SPECIALTY COFFEE"
                        image="/coffee/products/borbon-rosado.png"
                        description="Microlotes de producción limitada, perfiles sensoriales complejos y una trazabilidad completa desde la finca hasta la taza."
                    />

                    <CoffeeCard
                        title="Regional"
                        subtitle="ORIGEN"
                        image="/coffee/products/regional.png"
                        description="Un café pensado para compartir todos los días, manteniendo la identidad del Macizo Colombiano en una taza cercana y honesta."
                    />
                </div>
            </div>
        </section>
    );
}