import type { Instrument } from "./Instrument.types";

export type InstrumentState = {
  instruments: Instrument[];
  fetchAll: () => Promise<void>;
};
