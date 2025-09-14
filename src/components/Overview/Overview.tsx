import type { OverviewProps } from "@/types/Overview.types";
import { useEffect } from "react";
import { useFetchOverview } from "../../hooks/useFetchOverview";
import { useInstrumentsStore } from "../../store/instrumentsStore";
import { overviewConfig } from "../../utils/constants";
import Card from "../Card/Card";
import styles from "./Overview.module.css";

const Overview: React.FC<OverviewProps> = ({ title }) => {
  const { overviewData, darkMode, toggleDarkMode } = useInstrumentsStore();

  useFetchOverview();
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
        <button onClick={toggleDarkMode} className={styles.button}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className={styles["cardsContainer"]}>
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
