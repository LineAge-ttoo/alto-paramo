"use client";

import Reveal from "@/components/effects/reveal/Reveal";

interface StoryBlockProps {

    eyebrow: string;

    title: string;

    story: string;

    importance?: string;

    curiosity?: string;

    reflection?: string;

    align?: "left" | "center";

}

export default function StoryBlock({

    eyebrow,

    title,

    story,

    importance,

    curiosity,

    reflection,

    align = "left"

}: StoryBlockProps){

    const centered = align === "center";

    return(

        <section
            className={`
                max-w-5xl
                ${centered ? "mx-auto text-center" : ""}
            `}
        >

            <Reveal>

                <p
                    className="
                        readability-gold
                        uppercase
                        tracking-[0.45em]
                        text-[#D7C18A]
                        text-xs
                    "
                >
                    {eyebrow}
                </p>

            </Reveal>

            <Reveal delay={0.10}>

                <h2
                    className="
                        readability-title
                        mt-6
                        text-5xl
                        font-black
                        leading-[1.02]
                        text-white
                        md:text-7xl
                    "
                >
                    {title}
                </h2>

            </Reveal>

            <Reveal delay={0.20}>

                <p
                    className="
                        readability-text
                        mt-10
                        text-xl
                        leading-10
                        text-white/82
                    "
                >
                    {story}
                </p>

            </Reveal>

            {

                importance && (

                    <Reveal delay={0.30}>

                        <div
                            className="
                                mt-14
                                rounded-[30px]
                                border
                                border-white/10
                                bg-white/[0.03]
                                p-8
                                backdrop-blur-xl
                            "
                        >

                            <p
                                className="
                                    uppercase
                                    tracking-[0.35em]
                                    text-[#D7C18A]
                                    text-xs
                                "
                            >
                                ¿POR QUÉ IMPORTA?
                            </p>

                            <p
                                className="
                                    readability-text
                                    mt-5
                                    leading-9
                                    text-white/80
                                "
                            >
                                {importance}
                            </p>

                        </div>

                    </Reveal>

                )

            }

            {

                curiosity && (

                    <Reveal delay={0.45}>

                        <div
                            className="
                                mt-8
                                rounded-[30px]
                                border
                                border-[#D7C18A]/20
                                bg-[#D7C18A]/[0.04]
                                p-8
                            "
                        >

                            <p
                                className="
                                    uppercase
                                    tracking-[0.35em]
                                    text-[#D7C18A]
                                    text-xs
                                "
                            >
                                ¿SABÍAS QUE...?
                            </p>

                            <p
                                className="
                                    readability-text
                                    mt-5
                                    leading-9
                                    text-white/78
                                "
                            >
                                {curiosity}
                            </p>

                        </div>

                    </Reveal>

                )

            }

            {

                reflection && (

                    <Reveal delay={0.60}>

                        <blockquote
                            className="
                                readability-title
                                mx-auto
                                mt-20
                                max-w-3xl
                                text-3xl
                                italic
                                leading-relaxed
                                text-white/90
                            "
                        >

                            “{reflection}”

                        </blockquote>

                    </Reveal>

                )

            }

        </section>

    );

}