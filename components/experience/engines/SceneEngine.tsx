"use client";

import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useSceneStore } from "../sceneStore";

gsap.registerPlugin(ScrollTrigger);

export default function SceneEngine() {

    const setScene = useSceneStore((state) => state.setScene);

    useEffect(() => {

        const sections = gsap.utils.toArray<HTMLElement>("[data-scene]");

        const ctx = gsap.context(() => {

            sections.forEach((section) => {

                const scene = section.dataset.scene;

                if (!scene) return;

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