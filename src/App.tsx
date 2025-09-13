import Card from "./components/Card/Card";

function App() {
  return (
    <Card
      titlePrefix="💲"
      title="Total Portfolio Value"
      value="250,000"
      indicator="2.5%"
      prefix="$"
      symbol="AAPL"
      symbolName="Apple Inc"
    />
  );
}

export default App;
