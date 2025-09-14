import type { OverviewProps } from "@/types/Overview.types";
import { useFetchOverview } from "../../hooks/useFetchOverview";
import { useInstrumentsStore } from "../../store/instrumentsStore";
import { overviewConfig } from "../../utils/constants";
import Card from "../Card/Card";
import styles from "./Overview.module.css";

const Overview: React.FC<OverviewProps> = ({ title }) => {
  const { overviewData } = useInstrumentsStore();

  useFetchOverview();

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
              indicator={data.pnl}
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
