import { AreaChart, Area, ResponsiveContainer } from "recharts";
import type { LineChartProps } from "@/types/LineChart.types";
import styles from "./LineChart.module.css";

const LineChart: React.FC<LineChartProps> = ({ data, height, negative }) => {
  const chartsData = data.map((value) => ({ key: value }));
  return (
    <div className={styles.container} style={{ height: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartsData}
          margin={{
            top: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="negativeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4d4f" stopOpacity={0.8} />{" "}
              <stop offset="95%" stopColor="#ff4d4f" stopOpacity={0} />{" "}
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="key"
            stroke={negative ? "#ff4d4f" : "#8884d8"}
            fill={negative ? "url(#negativeGradient)" : "url(#gradient)"}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
