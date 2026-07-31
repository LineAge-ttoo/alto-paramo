"use client";

import CoffeeCard from "./CoffeeCard";

export default function CoffeeLines(){

    return(

        <section className="relative bg-[#090909] py-40">

            <div className="mx-auto max-w-7xl px-8">

                <div className="mb-28 text-center">

                    <p className="uppercase tracking-[0.45em] text-[#d7c18a]">

                        NUESTRAS DOS LÍNEAS

                    </p>

                    <h2 className="mt-8 text-6xl font-black text-white md:text-7xl">

                        Dos expresiones.

                        <br/>

                        Un mismo territorio.

                    </h2>

                    <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-white/70">

                        Alto Páramo nace de un único origen, pero se expresa
                        a través de dos propuestas cuidadosamente diseñadas
                        para diferentes formas de disfrutar el café.

                    </p>

                </div>

                <div className="grid gap-10 lg:grid-cols-2">

                    <CoffeeCard

                        title="Especial"

                        subtitle="MICROLOTES"

                        image="/coffee/specialty.jpg"

                        description="Variedades seleccionadas, procesos controlados y perfiles sensoriales únicos para quienes buscan descubrir la identidad de cada finca."

                    />

                    <CoffeeCard

                        title="Regional"

                        subtitle="TRADICIÓN"

                        image="/coffee/regional.jpg"

                        description="Una expresión equilibrada del territorio, pensada para el consumo cotidiano sin perder el carácter y la calidad del origen."

                    />

                </div>

            </div>

        </section>

    );

}