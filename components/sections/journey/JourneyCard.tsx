type Props = {
    number:string;
    title:string;
    text:string;
};

export default function JourneyCard({
    number,
    title,
    text
}:Props){

    return(

        <section
            className="
                min-h-screen
                flex
                items-center
                border-b
                border-white/10
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    w-full
                    px-8
                    grid
                    lg:grid-cols-2
                    gap-20
                    items-center
                "
            >

                <div>

                    <span
                        className="
                            text-[#C7A96B]
                            text-7xl
                            font-black
                        "
                    >
                        {number}
                    </span>

                </div>

                <div>

                    <h2
                        className="
                            text-6xl
                            font-black
                            text-white
                        "
                    >
                        {title}
                    </h2>

                    <p
                        className="
                            mt-8
                            text-xl
                            leading-10
                            text-white/70
                        "
                    >
                        {text}
                    </p>

                </div>

            </div>

        </section>

    );

}
