"use client";

import { useMemo } from "react";

export default function CoffeeParticles() {

    const beans = useMemo(() => {

        return Array.from({ length: 18 }).map((_, i) => ({

            id: i,

            left: Math.random() * 100,

            top: Math.random() * 100,

            size: 10 + Math.random() * 18,

            duration: 18 + Math.random() * 20,

            delay: Math.random() * 12,

            rotate: Math.random() * 360

        }));

    }, []);

    return (

        <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">

            {

                beans.map(bean => (

                    <div

                        key={bean.id}

                        className="coffee-bean"

                        style={{

                            left: `${bean.left}%`,

                            top: `${bean.top}%`,

                            width: bean.size,

                            height: bean.size * 1.4,

                            animationDuration: `${bean.duration}s`,

                            animationDelay: `${bean.delay}s`,

                            transform: `rotate(${bean.rotate}deg)`

                        }}

                    />

                ))

            }

        </div>

    );

}