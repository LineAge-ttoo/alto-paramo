"use client";

import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useSceneStore, type SceneName } from "../sceneStore";

gsap.registerPlugin(ScrollTrigger);

const VALID_SCENES: readonly SceneName[] = [
    "hero",
    "territory",
    "specialty",
    "coffee",
    "journey",
    "about"
];

function isSceneName(scene: string): scene is SceneName {
    return (VALID_SCENES as readonly string[]).includes(scene);
}

export default function SceneEngine() {

    const setScene = useSceneStore((state) => state.setScene);

    useEffect(() => {

        const sections = gsap.utils.toArray<HTMLElement>("[data-scene]");

        const ctx = gsap.context(() => {

            sections.forEach((section) => {

                const scene = section.dataset.scene;

                if (!scene || !isSceneName(scene)) return;

                ScrollTrigger.create({

                    trigger: section,

                    start: "top center",

                    end: "bottom center",

                    onEnter: () => {

                        setScene(scene);

                        document.body.dataset.scene = scene;

                    },

                    onEnterBack: () => {

                        setScene(scene);

                        document.body.dataset.scene = scene;

                    }

                });

            });

        });

        return () => ctx.revert();

    }, [setScene]);

    return null;

}