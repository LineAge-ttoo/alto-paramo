"use client";

interface ReadabilityMaskProps {

    variant?: "left" | "right" | "center" | "full";

    intensity?: "soft" | "normal" | "strong";

}

export default function ReadabilityMask({

    variant = "left",

    intensity = "normal"

}: ReadabilityMaskProps) {

    const opacity = {

        soft: .55,

        normal: .72,

        strong: .86

    };

    const alpha = opacity[intensity];

    const gradients = {

        left: `
            linear-gradient(
                90deg,
                rgba(10,9,8,${alpha}) 0%,
                rgba(10,9,8,.55) 35%,
                rgba(10,9,8,.18) 65%,
                transparent 100%
            )
        `,

        right: `
            linear-gradient(
                270deg,
                rgba(10,9,8,${alpha}) 0%,
                rgba(10,9,8,.55) 35%,
                rgba(10,9,8,.18) 65%,
                transparent 100%
            )
        `,

        center: `
            radial-gradient(
                ellipse at center,
                rgba(10,9,8,.62),
                rgba(10,9,8,.18) 58%,
                transparent
            )
        `,

        full: `
            linear-gradient(
                180deg,
                rgba(10,9,8,.45),
                rgba(10,9,8,.12) 35%,
                rgba(10,9,8,.40)
            )
        `

    };

    return (

        <>

            {/* Máscara */}

            <div

                className="absolute inset-0"

                style={{

                    background: gradients[variant]

                }}

            />

            {/* Luz cálida */}

            <div

                className="absolute inset-0"

                style={{

                    background: `
                        radial-gradient(
                            circle at 72% 18%,
                            rgba(223,184,108,.12),
                            transparent 42%
                        )
                    `

                }}

            />

            {/* Viñeta */}

            <div

                className="absolute inset-0"

                style={{

                    background: `
                        radial-gradient(
                            ellipse at center,
                            transparent 55%,
                            rgba(0,0,0,.18)
                        )
                    `

                }}

            />

            {/* Capa ambiental */}

            <div

                className="absolute inset-0"

                style={{

                    background: `
                        linear-gradient(
                            180deg,
                            rgba(22,18,14,.10),
                            transparent,
                            rgba(18,14,12,.12)
                        )
                    `

                }}

            />

        </>

    );

}