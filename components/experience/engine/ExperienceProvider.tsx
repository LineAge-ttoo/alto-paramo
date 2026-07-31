"use client";

import { useEffect } from "react";
import { useExperienceStore } from "./ExperienceStore";

export function ExperienceProvider({

    children,

}: {

    children: React.ReactNode;

}) {

    const setMouse =
        useExperienceStore(
            s => s.setMouse
        );

    useEffect(() => {

        const move = (
            e: PointerEvent
        ) => {

            setMouse({

                x: e.clientX,

                y: e.clientY,

            });

        };

        window.addEventListener(
            "pointermove",
            move,
            {
                passive: true,
            }
        );

        return () =>
            window.removeEventListener(
                "pointermove",
                move
            );

    }, [setMouse]);

    return children;

}