type SparkLineItem = {
  date: string;
  level: number;
};

export type Instrument = {
  id: number;
  symbol: string;
  price: number;
  pnl: number;
  sparkline: SparkLineItem[];
};
