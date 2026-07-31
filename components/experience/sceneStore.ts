import { create } from "zustand";

export type SceneName =
    | "hero"
    | "territory"
    | "specialty"
    | "coffee"
    | "journey"
    | "about";

interface SceneStore {

    scene: SceneName;

    ambient:number;

    brightness:number;

    warmth:number;

    setScene:(scene:SceneName)=>void;

}

export const useSceneStore=create<SceneStore>((set)=>({

    scene:"hero",

    ambient:1,

    brightness:1,

    warmth:1,

    setScene:(scene)=>{

        const presets={

            hero:{
                ambient:1,
                brightness:1.15,
                warmth:1.1
            },

            territory:{
                ambient:.85,
                brightness:1.05,
                warmth:.95
            },

            specialty:{
                ambient:.70,
                brightness:1,
                warmth:.90
            },

            coffee:{
                ambient:.60,
                brightness:.98,
                warmth:1
            },

            journey:{
                ambient:.75,
                brightness:1.08,
                warmth:1.05
            },

            about:{
                ambient:.95,
                brightness:1.12,
                warmth:1.08
            }

        };

        set({

            scene,

            ...presets[scene]

        });

    }

}));