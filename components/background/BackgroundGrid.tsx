"use client";

export default function BackgroundGrid() {

    return (

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:`
                        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
                    `,
                    backgroundSize:"80px 80px"
                }}
            />

            <div
                className="absolute inset-0"
                style={{
                    background:
                    "radial-gradient(circle at center, transparent 40%, rgba(9,9,9,.75) 100%)"
                }}
            />

        </div>

    );

}