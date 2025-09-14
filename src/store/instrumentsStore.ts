import { create } from "zustand";
import { fetchInstruments } from "../services/fetchInstruments";
import type { InstrumentState } from "@/types/InstrumentState.type";

export const useInstrumentsStore = create<InstrumentState>((set) => ({
  instruments: [],

  fetchAll: async () => {
    const data = await fetchInstruments();
    set({ instruments: data });
  },
}));
