import Grid from "./components/Grid/Grid";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { colDefs } from "./utils/constants";

ModuleRegistry.registerModules([AllCommunityModule]);

import { useInstrumentsStore } from "./store/instrumentsStore";
import { useFetchInstruments } from "./hooks/useFetchInstruments";
import Overview from "./components/Overview/Overview";

function App() {
  const { instruments } = useInstrumentsStore();
  useFetchInstruments();

  return (
    <>
      <Overview title="Investor" />
      <Grid rowData={instruments} colDefs={colDefs} />
    </>
  );
}

export default App;
