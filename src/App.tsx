import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LineChart from "./components/LineChart/LineChart";

function App() {
  const data = [1, 2, 3, 4, 5, 4, 3, 2, 5, 6];

  return <LineChart data={data} />;
}

export default App;
