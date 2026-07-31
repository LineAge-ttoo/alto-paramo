"use client";

interface Props {

    active: number;

    total: number;

}

export default function CoffeeBranch({

    active,

    total

}: Props) {

    return (

        <aside

            className="
                fixed
                right-8
                top-1/2
                z-40
                hidden
                -translate-y-1/2
                xl:flex
                pointer-events-none
                select-none
            "

        >

            <div className="relative flex flex-col items-center">

                {

                    Array.from({

                        length: total

                    }).map((_, index) => (

                        <div

                            key={index}

                            className="flex flex-col items-center"

                        >

                            <div

                                className={`

                                    rounded-full

                                    transition-all

                                    duration-700

                                    ease-out

                                    ${

                                        index === active

                                            ? "h-2.5 w-2.5 bg-[#D7C18A] opacity-100"

                                            : index < active

                                                ? "h-1.5 w-1.5 bg-white/45"

                                                : "h-1 w-1 bg-white/20"

                                    }

                                `}

                            />

                            {

                                index < total - 1 && (

                                    <div

                                        className="
                                            my-3
                                            h-10
                                            w-px
                                            bg-gradient-to-b
                                            from-white/18
                                            via-white/10
                                            to-transparent
                                        "

                                    />

                                )

                            }

                        </div>

                    ))

                }

            </div>

        </aside>

    );

}