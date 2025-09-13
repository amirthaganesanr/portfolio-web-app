import type { ColDef } from "ag-grid-community";
import { SparkLineItem } from "./Instrument.types";
import { ICellRendererParams } from "ag-grid-community";

export type GridProps = {
  rowData: any[];
  colDefs: ColDef[];
};

export type CardCellRendererProps = ICellRendererParams & {
  data: {
    sparkline: SparklineItem[];
  };
};
