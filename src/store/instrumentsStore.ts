import { create } from "zustand";
import { fetchInstruments } from "../services/fetchInstruments";
import type { InstrumentState } from "@/types/InstrumentState.type";
import type { OverviewItem, OverviewData } from "@/types/Overview.types";
import { calculateOverviewData } from "../utils/helper";

const emptyOverviewItem: OverviewItem = {
  value: 0,
  pnl: 0,
  symbol: "",
  data: [],
};

const initialOverviewData: OverviewData = {
  totalPortfolioValue: emptyOverviewItem,
  topGainer: emptyOverviewItem,
  topLoser: emptyOverviewItem,
};
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
