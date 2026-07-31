export default function HeroFog() {

    return (

        <>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                <div
                    className="
                        absolute
                        -left-40
                        bottom-0
                        h-[420px]
                        w-[900px]
                        rounded-full
                        bg-white/10
                        blur-[120px]
                        animate-fogOne
                    "
                />

                <div
                    className="
                        absolute
                        right-[-250px]
                        top-24
                        h-[320px]
                        w-[700px]
                        rounded-full
                        bg-white/5
                        blur-[120px]
                        animate-fogTwo
                    "
                />

                <div
                    className="
                        absolute
                        left-1/3
                        bottom-24
                        h-[260px]
                        w-[550px]
                        rounded-full
                        bg-white/5
                        blur-[90px]
                        animate-fogThree
                    "
                />

            </div>

        </>

    );

}
