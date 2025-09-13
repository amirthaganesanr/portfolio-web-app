import { AgGridReact } from "ag-grid-react";
import type { GridProps } from "@/types/Grid.types";
import styles from "./Grid.module.css";
import LineChart from "../LineChart/LineChart";

const CardCellRenderer = () => {
  const data = [1, 2, 3, 4, 5, 4, 3, 2, 5, 6];

  return <LineChart data={data} height={40} />;
};

const Grid: React.FC<GridProps> = ({ rowData, colDefs }) => {
  const updatedColDefs = colDefs.map((col) =>
    col.field === "make" ? { ...col, cellRenderer: CardCellRenderer } : col
  );

  return (
    <div className={styles["grid-container"]}>
      <div className={styles["portfolio-grid"]}>
        <AgGridReact rowData={rowData} columnDefs={updatedColDefs} />
      </div>
    </div>
  );
};

export default Grid;
