import type { Instrument } from "./Instrument.types";
import type { OverviewData } from "./Overview.types";

export type InstrumentState = {
  instruments: Instrument[];
  overviewData: OverviewData;
  fetchAll: () => Promise<void>;
  fetchOverviewData: () => void;
};
