import Card from "../Card/Card";
import styles from "./Overview.module.css";
import { overviewConfig } from "../../utils/constants";
import type { OverviewData, OverviewProps } from "@/types/Overview.types";

const Overview: React.FC<OverviewProps> = ({ title }) => {
  const overviewData: OverviewData = {
    totalPortfolioValue: {
      value: 250000,
      pnl: 2.5,
      symbol: "GOOG",
      data: [1, 2, 3, 4, 5, 4, 3, 2, 5, 6],
    },
    topGainer: {
      value: 250000,
      pnl: 2.5,
      symbol: "GOOG",
      data: [1, 2, 3, 4, 5, 4, 3, 2, 5, 6],
    },
    topLoser: {
      value: 250000,
      pnl: 2.5,
      symbol: "GOOG",
      data: [1, 2, 3, 4, 5, 4, 3, 2, 5, 6],
    },
  };

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles["cards-container"]}>
        {overviewConfig.map((config) => {
          const data = overviewData[config.fieldName];
          return (
            <Card
              key={config.fieldName}
              titlePrefix={config.titlePrefix}
              title={config.title}
              value={data.value}
              indicator={`${data.pnl}%`}
              prefix={config.prefix}
              symbol={data.symbol}
              sparkLine={data.data}
            />
          );
        })}
      </div>
    </>
  );
};

export default Overview;
