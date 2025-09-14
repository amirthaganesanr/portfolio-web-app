import Grid from "./components/Grid/Grid";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { colDefs } from "./utils/constants";

ModuleRegistry.registerModules([AllCommunityModule]);

import { useInstrumentsStore } from "./store/instrumentsStore";
import { useFetchInstruments } from "./hooks/useFetchInstruments";

function App() {
  const { instruments } = useInstrumentsStore();
  useFetchInstruments();

  return <Grid rowData={instruments} colDefs={colDefs} />;
}

export default App;
