import Image from "next/image";

import RegionalButton from "./RegionalButton";

export default function Regional() {
  return (
    <section className="bg-[#111]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[720px] overflow-hidden">
          <Image
            src="/coffee/regional.jpg"
            alt="Regional Coffee"
            fill
            quality={100}
            className="parallax-image object-cover scale-110"
          />
        </div>

        <div
          className="
                        flex
                        items-center
                        justify-center
                        px-14
                        py-24
                    "
        >
          <div className="max-w-xl">
            <span
              className="
                                reveal
                                uppercase
                                tracking-[0.45em]
                                text-[#C7A96B]
                            "
            >
              REGIONAL
            </span>

            <h2
              className="
                                reveal
                                mt-8
                                text-6xl
                                font-black
                                leading-tight
                                text-white
                            "
            >
              El café para todos los días.
            </h2>

            <p
              className="
                                reveal
                                mt-10
                                text-lg
                                leading-9
                                text-white/70
                            "
            >
              Alto Páramo Regional mantiene el mismo respeto por el origen y las
              familias cafeteras, ofreciendo un perfil pensado para disfrutar
              diariamente sin perder la identidad del territorio.
            </p>

            <div className="reveal">
              <RegionalButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
