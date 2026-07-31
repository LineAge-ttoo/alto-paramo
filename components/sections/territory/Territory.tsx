import Image from "next/image";

import TerritoryStats from "./TerritoryStats";

export default function Territory(){

    return(

        <section className="bg-[#0b0b0b]">

            <div className="relative h-[90vh] overflow-hidden reveal">

                <Image
                    src="/coffee/territory.jpg"
                    alt="Territorio Alto Páramo"
                    fill
                    className="parallax-image object-cover scale-110"
                />

                <div className="absolute inset-0 bg-black/45"/>

            </div>

            <div className="mx-auto max-w-7xl px-8 py-28">

                <span
                    className="
                        reveal
                        uppercase
                        tracking-[0.45em]
                        text-[#C7A96B]
                    "
                >

                    EL TERRITORIO

                </span>

                <h2
                    className="
                        reveal
                        mt-8
                        max-w-4xl
                        text-6xl
                        font-black
                        leading-tight
                        text-white
                    "

                >

                    Antes del café,
                    existe el paisaje.

                </h2>

                <p
                    className="
                        reveal
                        mt-10
                        max-w-3xl
                        text-xl
                        leading-10
                        text-white/75
                    "
                >

                    Alto Páramo nace en las montañas del Macizo Colombiano.
                    Nuestro café es consecuencia del agua, del bosque,
                    de la biodiversidad y de las familias cafeteras.

                </p>

                <div className="reveal">

                    <TerritoryStats/>

                </div>

            </div>

        </section>

    );

}