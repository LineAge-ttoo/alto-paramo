import { create } from "zustand";

export interface MousePosition {
    x: number;
    y: number;
}

export type CatState =
    | "hidden"
    | "idle"
    | "walk"
    | "sit"
    | "sleep"
    | "look";

interface ExperienceStore {

    mouse: MousePosition;

    catState: CatState;

    hoverElement: HTMLElement | null;

    setMouse: (mouse: MousePosition) => void;

    setCatState: (state: CatState) => void;

    setHoverElement: (
        element: HTMLElement | null
    ) => void;
}

export const useExperienceStore =
    create<ExperienceStore>((set) => ({

        mouse: {
            x: 0,
            y: 0,
        },

        catState: "idle",

        hoverElement: null,

        setMouse: (mouse) =>
            set({
                mouse,
            }),

        setCatState: (catState) =>
            set({
                catState,
            }),

        setHoverElement: (hoverElement) =>
            set({
                hoverElement,
            }),

    }));