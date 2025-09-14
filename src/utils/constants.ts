import type { OverviewConfigItem } from "@/types/Overview.types";

export const colDefs = [
  {
    field: "symbol",
    filter: true,
    floatingFilter: true,
    flex: 1,
    minWidth: 150,
  },
  { field: "price", flex: 1, minWidth: 150 },
  { field: "pnl", flex: 1, minWidth: 150 },
  { field: "sparkline", flex: 1, minWidth: 150 },
];

export const overviewConfig: OverviewConfigItem[] = [
  {
    fieldName: "totalPortfolioValue",
    title: "Total Portfolio Value",
    titlePrefix: "💲",
    prefix: "$",
  },
  {
    fieldName: "topGainer",
    title: "Top Gainer",
    titlePrefix: "↗️",
    prefix: "$",
  },
  {
    fieldName: "topLoser",
    title: "Top Loser",
    titlePrefix: "↘️",
    prefix: "$",
  },
];
