"use client";

interface Props{

    active:number;

    total:number;

}

export default function JourneyProgress({

    active,

    total

}:Props){

    return(

        <aside

            className="
                fixed
                right-12
                top-1/2
                z-[80]
                hidden
                -translate-y-1/2
                xl:flex
                flex-col
                items-center
                select-none
            "

        >

            {

                Array.from({

                    length:total

                }).map((_,index)=>(

                    <div

                        key={index}

                        className="flex flex-col items-center"

                    >

                        <div

                            className={`

                                relative

                                transition-all

                                duration-700

                                rounded-full

                                ${

                                    index===active

                                    ?

                                    "h-4 w-4 bg-[#D7C18A] shadow-[0_0_18px_rgba(215,193,138,.6)] scale-125"

                                    :

                                    index<active

                                    ?

                                    "h-2 w-2 bg-[#D7C18A]/70"

                                    :

                                    "h-2 w-2 bg-white/18"

                                }

                            `}

                        />

                        {

                            index!==total-1 && (

                                <div

                                    className="
                                        h-12
                                        w-px
                                        bg-gradient-to-b
                                        from-white/25
                                        via-white/10
                                        to-transparent
                                    "

                                />

                            )

                        }

                    </div>

                ))

            }

        </aside>

    );

}