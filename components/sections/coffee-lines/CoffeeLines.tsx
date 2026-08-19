"use client";

import CoffeeCard from "./CoffeeCard";

export default function CoffeeLines() {
    return (
        <section
            id="cafe"
            data-scene="coffee"
            className="relative bg-[#090909] py-28 sm:py-36 md:py-44"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="mb-20 text-center sm:mb-24 md:mb-28">
                    <p className="text-xs uppercase tracking-[0.45em] text-[#D7C18A]">
                        NUESTRAS DOS LÍNEAS
                    </p>

                    <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-6xl md:text-7xl">
                        Dos expresiones.
                        <br />
                        Un mismo territorio.
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9 md:text-xl">
                        El mismo territorio se expresa de dos maneras.
                        Una busca revelar toda la complejidad del origen;
                        la otra acompaña la vida cotidiana sin perder su esencia.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-12">
                    <CoffeeCard
                        title="Especial"
                        subtitle="SPECIALTY COFFEE"
                        image="/coffee/specialty-line.jpg"
                        description="Microlotes de producción limitada, perfiles sensoriales complejos y una trazabilidad completa desde la finca hasta la taza."
                    />

                    <CoffeeCard
                        title="Regional"
                        subtitle="ORIGEN"
                        image="/coffee/regional-line.jpg"
                        description="Un café pensado para compartir todos los días, manteniendo la identidad del Macizo Colombiano en una taza cercana y honesta."
                    />
                </div>
            </div>
        </section>
    );
}