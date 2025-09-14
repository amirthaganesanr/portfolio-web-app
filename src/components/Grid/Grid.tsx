import { AgGridReact } from "ag-grid-react";
import type { GridProps } from "@/types/Grid.types";
import styles from "./Grid.module.css";
import LineChart from "../LineChart/LineChart";
import type { CardCellRendererProps } from "@/types/Grid.types";
import type { SparkLineItem } from "@/types/Instrument.types";

const CardCellRenderer: React.FC<CardCellRendererProps> = (params) => {
  const data = params?.data?.sparkline?.map((s: SparkLineItem) => s.level);
  const negativeValue = params?.data?.pnl < 0;

  return <LineChart data={data} height={40} negative={negativeValue} />;
};

const Grid: React.FC<GridProps> = ({ rowData, colDefs }) => {
  const updatedColDefs = colDefs.map((col) =>
    col.field === "sparkline" ? { ...col, cellRenderer: CardCellRenderer } : col
  );

  return (
    <div className={styles.gridContainer}>
      <div className={styles["portfolio-grid"]}>
        <AgGridReact rowData={rowData} columnDefs={updatedColDefs} />
      </div>
    </div>
  );
};

export default Grid;
