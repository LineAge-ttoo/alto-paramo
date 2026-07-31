"use client";

import { steps } from "./data";

interface JourneyProgressProps{

    active:number;

}

export default function JourneyProgress({

    active

}:JourneyProgressProps){

    return(

        <div
            className="
                fixed
                right-10
                top-1/2
                z-50
                -translate-y-1/2
                hidden
                lg:flex
                flex-col
                items-center
                gap-5
            "
        >

            {steps.map((step,index)=>(

                <div
                    key={step.id}
                    className="
                        flex
                        flex-col
                        items-center
                    "
                >

                    <div

                        className={`
                            h-3
                            w-3
                            rounded-full
                            transition-all
                            duration-500
                            ${
                                index===active
                                ? "bg-[#D7C18A] scale-150"
                                : "bg-white/20"
                            }
                        `}

                    />

                    {

                        index!==steps.length-1 &&

                        <div
                            className="
                                h-10
                                w-px
                                bg-white/10
                            "
                        />

                    }

                </div>

            ))}

        </div>

    );

}