import { create } from "zustand";

interface JourneyStore {

    active:number;

    setActive:(value:number)=>void;

}

export const useJourneyStore = create<JourneyStore>((set)=>({

    active:0,

    setActive:(value)=>set({

        active:value

    })

}));