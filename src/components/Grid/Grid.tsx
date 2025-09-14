import type { CardCellRendererProps, GridProps } from "@/types/Grid.types";
import type { SparkLineItem } from "@/types/Instrument.types";
import {
  AllCommunityModule,
  ModuleRegistry,
  colorSchemeDarkBlue,
  colorSchemeLightCold,
  themeQuartz,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useInstrumentsStore } from "../../store/instrumentsStore";
import LineChart from "../LineChart/LineChart";
import styles from "./Grid.module.css";

ModuleRegistry.registerModules([AllCommunityModule]);

const CardCellRenderer: React.FC<CardCellRendererProps> = (params) => {
  const data = params?.data?.sparkline?.map((s: SparkLineItem) => s.level);
  const negativeValue = params?.data?.pnl < 0;

  return <LineChart data={data} height={40} negative={negativeValue} />;
};

const Grid: React.FC<GridProps> = ({ rowData, colDefs }) => {
  const { darkMode } = useInstrumentsStore();
  const updatedColDefs = colDefs.map((col) =>
    col.field === "sparkline" ? { ...col, cellRenderer: CardCellRenderer } : col
  );

  const colorScheme = darkMode
    ? themeQuartz.withPart(colorSchemeDarkBlue)
    : themeQuartz.withPart(colorSchemeLightCold);

  return (
    <div className={styles.gridContainer}>
      <div className={styles["portfolio-grid"]}>
        <AgGridReact
          rowData={rowData}
          columnDefs={updatedColDefs}
          theme={colorScheme}
        />
      </div>
    </div>
  );
};

export default Grid;
