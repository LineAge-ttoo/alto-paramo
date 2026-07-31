import Image from "next/image";

export default function SpecialtyBackground() {

    return (

        <>

            <Image
                src="/coffee/specialty.jpg"
                alt="Café de Especialidad"
                fill
                quality={100}
                className="
                    object-cover
                    brightness-[1.06]
                    contrast-[1.02]
                    saturate-[1.08]
                "
            />

            <div className="absolute inset-0 bg-black/30"/>

            <div
                className="absolute inset-0"
                style={{
                    background:
                    "linear-gradient(to bottom, rgba(8,8,8,.85), rgba(8,8,8,.15) 30%, rgba(8,8,8,.75) 100%)"
                }}
            />

        </>

    );

}