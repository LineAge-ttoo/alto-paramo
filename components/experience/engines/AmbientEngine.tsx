"use client";

import { useEffect } from "react";

export default function AmbientEngine() {

    useEffect(() => {

        const body = document.body;

        let direction = 1;

        let light = 18;

        const interval = window.setInterval(() => {

            light += direction * 0.08;

            if (light > 21) direction = -1;

            if (light < 17) direction = 1;

            body.style.setProperty(
                "--ambient-light",
                `${light}%`
            );

        }, 60);

        return () => clearInterval(interval);

    }, []);

    return null;

}