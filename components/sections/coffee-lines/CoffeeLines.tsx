"use client";

import CoffeeCard from "./CoffeeCard";

export default function CoffeeLines() {

    return (

        <section

            id="cafe"

            data-scene="coffee"

            className="
                relative
                bg-[#090909]
                py-40
            "

        >

            <div className="mx-auto max-w-7xl px-8">

                <div className="mb-28 text-center">

                    <p

                        className="
                            uppercase
                            tracking-[0.45em]
                            text-[#D7C18A]
                        "

                    >

                        NUESTRAS DOS LÍNEAS

                    </p>

                    <h2

                        className="
                            mt-8
                            text-6xl
                            font-black
                            leading-none
                            text-white
                            md:text-7xl
                        "

                    >

                        Dos expresiones.

                        <br />

                        Un mismo territorio.

                    </h2>

                    <p

                        className="
                            mx-auto
                            mt-10
                            max-w-3xl
                            text-xl
                            leading-9
                            text-white/70
                        "

                    >

                        El mismo territorio se expresa de dos maneras.
                        Una busca revelar toda la complejidad del origen;
                        la otra acompaña la vida cotidiana sin perder su esencia.

                    </p>

                </div>

                <div className="grid gap-10 lg:grid-cols-2">

                    <CoffeeCard

                        title="Especial"

                        subtitle="SPECIALTY COFFEE"

                        image="/coffee/specialty-line.jpg"

                        description="
                        Microlotes de producción limitada,
                        perfiles sensoriales complejos
                        y una trazabilidad completa desde la finca hasta la taza.
                        "

                    />

                    <CoffeeCard

                        title="Regional"

                        subtitle="ORIGEN"

                        image="/coffee/regional-line.jpg"

                        description="
                        Un café pensado para compartir todos los días,
                        manteniendo la identidad del Macizo Colombiano
                        en una taza cercana y honesta.
                        "

                    />

                </div>

            </div>

        </section>

    );

}