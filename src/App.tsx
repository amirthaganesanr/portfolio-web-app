import Grid from "./components/Grid/Grid";
import { useEffect, useState } from "react";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { fetchInstruments } from "./services/fetchInstruments";

ModuleRegistry.registerModules([AllCommunityModule]);

import type { Instrument } from "@/types/Instrument.types";

function App() {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  useEffect(() => {
    fetchInstruments().then((results) => setInstruments(results));
  }, []);

  const colDefs = [
    { field: "symbol", filter: true, floatingFilter: true },
    { field: "price" },
    { field: "pnl" },
    { field: "sparkline" },
  ];

  return <Grid rowData={instruments} colDefs={colDefs} />;
}

export default App;
