import type { InstrumentState } from "@/types/InstrumentState.type";
import { initialOverviewData } from "../utils/constants";
import { create } from "zustand";
import { fetchInstruments } from "../services/fetchInstruments";
import { calculateOverviewData } from "../utils/helper";

export const useInstrumentsStore = create<InstrumentState>((set, get) => ({
  instruments: [],
  overviewData: initialOverviewData,
  darkMode: false,

  fetchAll: async () => {
    const data = await fetchInstruments();
    set({ instruments: data });
  },

  fetchOverviewData: () => {
    const instruments = get().instruments;
    if (instruments.length === 0) {
      set({ overviewData: initialOverviewData });
      return;
    }
    const { totalPortfolioValue, topGainer, topLoser } = calculateOverviewData({
      instruments,
    });

    set({
      overviewData: {
        totalPortfolioValue,
        topGainer,
        topLoser,
      },
    });
  },
  toggleDarkMode: () => {
    set({ darkMode: !get().darkMode });
  },
}));
