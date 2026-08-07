"use client";

import { ReactNode } from "react";

type Layer =
    | "background"
    | "fog"
    | "light"
    | "particles"
    | "content"
    | "foreground";

interface DepthProps {

    children: ReactNode;

    layer?: Layer;

    depth?: number;

    className?: string;

}

const DEPTH = {

    background: 0.22,

    fog: 0.06,

    light: 0.03,

    particles: 0.12,

    content: 0.30,

    foreground: 0.42

};

export default function Depth({

    children,

    layer,

    depth,

    className = ""

}: DepthProps) {

    const value =
        depth ??
        (layer ? DEPTH[layer] : 0.1);

    return (

        <div

            data-depth={value}

            className={`absolute inset-0 ${className}`}

        >

            {children}

        </div>

    );

}