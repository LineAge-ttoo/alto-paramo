"use client";

import { useEffect } from "react";

export default function ScrollEngine() {

    useEffect(() => {

        const root = document.documentElement;

        const update = () => {

            const max =
                document.body.scrollHeight - window.innerHeight;

            const progress =
                max > 0 ? window.scrollY / max : 0;

            root.style.setProperty(
                "--scroll-progress",
                progress.toString()
            );

        };

        update();

        window.addEventListener("scroll", update);

        window.addEventListener("resize", update);

        return () => {

            window.removeEventListener("scroll", update);

            window.removeEventListener("resize", update);

        };

    }, []);

    return null;

}