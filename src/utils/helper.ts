import type { Instrument } from "@/types/Instrument.types";
import type { OverviewItem, OverviewData } from "@/types/Overview.types";

type CalculateOverviewDataParams = {
  instruments: Instrument[];
};

export const calculateOverviewData = ({
  instruments,
}: CalculateOverviewDataParams): OverviewData => {
  const totalValue = instruments.reduce((acc, i) => acc + i.price, 0);
  const totalPnL = instruments.reduce((acc, i) => acc + i.pnl, 0);
  const sparkLine = instruments[0].sparkline.map((s) => s.level);

  const totalPortfolioValue: OverviewItem = {
    value: totalValue,
    pnl: totalPnL,
    data: sparkLine,
  };

  const topGainerInstrument = instruments.reduce((max, i) =>
    i.pnl > max.pnl ? i : max
  );
  const topGainer: OverviewItem = {
    value: topGainerInstrument.price,
    pnl: topGainerInstrument.pnl,
    symbol: topGainerInstrument.symbol,
    data: topGainerInstrument.sparkline.map((s) => s.level),
  };

  const topLoserInstrument = instruments.reduce((min, i) =>
    i.pnl < min.pnl ? i : min
  );
  const topLoser: OverviewItem = {
    value: topLoserInstrument.price,
    pnl: topLoserInstrument.pnl,
    symbol: topLoserInstrument.symbol,
    data: topLoserInstrument.sparkline.map((s) => s.level),
  };

  return { totalPortfolioValue, topGainer, topLoser };
};

export const formatNumber = (value: number = 0): string => {
  if (isNaN(value)) return "0.00";

  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
