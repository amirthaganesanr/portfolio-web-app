import Grid from "./components/Grid/Grid";

import { colDefs } from "./utils/constants";

import Overview from "./components/Overview/Overview";
import { useFetchInstruments } from "./hooks/useFetchInstruments";
import { useInstrumentsStore } from "./store/instrumentsStore";

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
