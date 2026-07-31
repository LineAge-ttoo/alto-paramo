"use client";

import Image from "next/image";

import { steps } from "./data";

export default function Journey(){

    return(

        <section
            className="
                sticky-section
                relative
                h-[650vh]
                bg-black
            "
        >

            <div
                className="
                    sticky-content
                    sticky
                    top-0
                    h-screen
                    overflow-hidden
                "
            >

                <Image
                    src="/coffee/process.jpg"
                    alt="Proceso del café"
                    fill
                    quality={100}
                    className="
                        parallax-image
                        object-cover
                        scale-110
                    "
                />

                <div className="absolute inset-0 bg-black/65"/>

                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                    "
                >

                    <div
                        className="
                            mx-auto
                            max-w-7xl
                            w-full
                            px-8
                        "
                    >

                        <span
                            className="
                                uppercase
                                tracking-[0.45em]
                                text-[#C7A96B]
                            "
                        >

                            EL VIAJE DEL CAFÉ

                        </span>

                        <div className="mt-24 space-y-20">

                            {steps.map((step)=>(

                                <div
                                    key={step.id}
                                    className="
                                        reveal
                                        max-w-2xl
                                    "
                                >

                                    <span
                                        className="
                                            text-[#C7A96B]
                                            text-sm
                                            tracking-[0.4em]
                                        "
                                    >

                                        0{step.id}

                                    </span>

                                    <h2
                                        className="
                                            mt-3
                                            text-6xl
                                            font-black
                                            text-white
                                        "
                                    >

                                        {step.title}

                                    </h2>

                                    <p
                                        className="
                                            mt-6
                                            text-xl
                                            leading-10
                                            text-white/70
                                        "
                                    >

                                        {step.text}

                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}