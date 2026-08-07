"use client";

export default function HeroButtons() {

    function goTo(id: string) {

        const section = document.querySelector(id);

        if (!section) return;

        section.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

    return (

        <div className="hero-buttons mt-14 flex flex-wrap gap-5">

            <button

                onClick={() => goTo("#territory")}

                className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-[#E2C184]
                    px-8
                    py-4
                    font-semibold
                    text-stone-900
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:scale-[1.02]
                    hover:shadow-[0_12px_40px_rgba(226,193,132,.35)]

                "

            >

                Comenzar el recorrido

                <span

                    className="
                        ml-3
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                    "

                >

                    →

                </span>

            </button>

            <button

                onClick={() => goTo("#coffee")}

                className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/5
                    px-8
                    py-4
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-500

                    hover:border-[#D7C18A]/50
                    hover:bg-white/10
                    hover:-translate-y-1

                "

            >

                Explorar nuestros cafés

                <span

                    className="
                        ml-3
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                    "

                >

                    →

                </span>

            </button>

        </div>

    );

}