import Image from "next/image";

export default function TerritoryBackground() {
    return (
        <>
            <Image
                src="/coffee/territory.jpg"
                alt="Territorio Alto Páramo"
                fill
                quality={88}
                sizes="100vw"
                className="
                    object-cover
                    brightness-[1.10]
                    contrast-[1.03]
                    saturate-[1.08]
                    transition-all
                    duration-[1800ms]
                "
            />

            {/* Color ambiental del Universo */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "rgba(var(--scene-overlay-color), calc(var(--scene-overlay-opacity) * .45))"
                }}
            />

            {/* Gradiente de continuidad */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, #0f140e 0%, transparent 22%, transparent 75%, #0d120d 100%)"
                }}
            />
        </>
    );
}