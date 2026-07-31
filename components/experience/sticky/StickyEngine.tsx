"use client";

import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StickyEngine() {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".sticky-section");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,

        start: "top top",

        end: "bottom top",

        pin: section.querySelector(".sticky-content"),

        pinSpacing: false,
      });
    });
  }, []);

  return null;
}
