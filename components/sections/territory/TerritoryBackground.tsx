import Image from "next/image";

export default function TerritoryBackground() {

    return (

        <>

            <Image
                src="/coffee/territory.jpg"
                alt="Territorio Alto Páramo"
                fill
                quality={100}
                className="
                    object-cover
                    brightness-[1.08]
                    contrast-[1.02]
                    saturate-[1.05]
                "
            />

            <div className="absolute inset-0 bg-black/25"/>

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(9,9,9,.95), rgba(9,9,9,.25) 25%, rgba(9,9,9,.55) 100%)"
                }}
            />

        </>

    );

}