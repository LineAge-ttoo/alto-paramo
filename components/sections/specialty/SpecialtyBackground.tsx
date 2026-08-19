import Image from "next/image";

export default function SpecialtyBackground() {
    return (
        <>
            <Image
                src="/coffee/specialty.jpg"
                alt="Café de Especialidad"
                fill
                quality={88}
                sizes="100vw"
                className="
                    object-cover
                    brightness-[1.10]
                    contrast-[1.04]
                    saturate-[1.10]
                    transition-all
                    duration-[1800ms]
                "
            />

            {/* Color ambiental del Universo */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "rgba(var(--scene-overlay-color), calc(var(--scene-overlay-opacity) * .40))"
                }}
            />

            {/* Gradiente de continuidad */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, #0d120d 0%, transparent 20%, transparent 75%, #121410 100%)"
                }}
            />
        </>
    );
}