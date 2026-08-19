"use client";

import Reveal from "@/components/effects/reveal/Reveal";

interface DiscoveryItem {

    title: string;

    value: string;

    description?: string;

}

interface DiscoveryBlockProps {

    eyebrow: string;

    title: string;

    items: DiscoveryItem[];

}

export default function DiscoveryBlock({

    eyebrow,

    title,

    items

}:DiscoveryBlockProps){

    return(

        <section className="mt-28">

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

            <Reveal delay={0.08}>

                <h3

                    className="
                        readability-title
                        mt-6
                        text-4xl
                        font-black
                        text-white
                        md:text-5xl
                    "

                >

                    {title}

                </h3>

            </Reveal>

            <div

                className="
                    mt-14
                    grid
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-3
                "

            >

                {

                    items.map((item,index)=>(

                        <Reveal

                            key={item.title}

                            delay={index*.08}

                        >

                            <article

                                className="
                                    group
                                    rounded-[28px]
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-7
                                    backdrop-blur-xl
                                    transition-all
                                    duration-500
                                    hover:border-[#D7C18A]/35
                                    hover:bg-white/[0.05]
                                    hover:-translate-y-1
                                "

                            >

                                <p

                                    className="
                                        text-[11px]
                                        uppercase
                                        tracking-[0.35em]
                                        text-[#D7C18A]
                                    "

                                >

                                    {item.title}

                                </p>

                                <h4

                                    className="
                                        mt-4
                                        text-2xl
                                        font-semibold
                                        text-white
                                    "

                                >

                                    {item.value}

                                </h4>

                                {

                                    item.description && (

                                        <p

                                            className="
                                                mt-5
                                                leading-8
                                                text-white/70
                                            "

                                        >

                                            {item.description}

                                        </p>

                                    )

                                }

                            </article>

                        </Reveal>

                    ))

                }

            </div>

        </section>

    );

}