import Image from "next/image";

import SpecialtyButton from "./SpecialtyButton";

export default function Specialty() {
  return (
    <section className="relative bg-black">
      <div className="relative h-screen overflow-hidden">
        <Image
          src="/coffee/specialty.jpg"
          alt="Specialty Coffee"
          fill
          quality={100}
          className="parallax-image object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-8">
            <span
              className="
                                reveal
                                uppercase
                                tracking-[0.45em]
                                text-[#D2B277]
                            "
            >
              SPECIALTY COFFEE
            </span>

            <h2
              className="
                                reveal
                                mt-8
                                max-w-4xl
                                text-7xl
                                font-black
                                leading-tight
                                text-white
                            "
            >
              Cada microlote cuenta una historia distinta.
            </h2>

            <p
              className="
                                reveal
                                mt-10
                                max-w-2xl
                                text-xl
                                leading-10
                                text-white/75
                            "
            >
              Seleccionamos pequeñas producciones para resaltar la identidad de
              cada finca, cada cosecha y cada proceso.
            </p>

            <div className="reveal">
              <SpecialtyButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
