import type { Instrument } from "./Instrument.types";
import type { OverviewData } from "./Overview.types";

export type InstrumentState = {
  instruments: Instrument[];
  overviewData: OverviewData;
  darkMode: boolean;
  fetchAll: () => Promise<void>;
  fetchOverviewData: () => void;
  toggleDarkMode: () => void;
};
