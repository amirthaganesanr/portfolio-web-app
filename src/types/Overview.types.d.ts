export type OverviewProps = {
  title: string;
};

export type OverviewItem = {
  value: number;
  pnl: number;
  symbol?: string;
  data: number[];
};

export type OverviewData = {
  totalPortfolioValue: OverviewItem;
  topGainer: OverviewItem;
  topLoser: OverviewItem;
};

export type OverviewConfigItem = {
  fieldName: keyof OverviewData;
  title: string;
  titlePrefix: string;
  prefix: string;
};
