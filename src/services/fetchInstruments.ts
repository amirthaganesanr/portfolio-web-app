import type { Instrument } from "@/types/Instrument.types";

export const fetchInstruments = async (): Promise<Instrument[]> => {
  const response = await fetch("instruments.json");
  const instruments = await response.json();
  return instruments;
};
