import { AreaChart, Area, ResponsiveContainer } from "recharts";
import type { LineChartProps } from "@/types/LineChart.types";

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartsData = data.map((value) => ({ key: value }));
  console.log(chartsData);
  return (
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
        </defs>
        <Area
          type="monotone"
          dataKey="key"
          stroke="#8884d8"
          fill="url(#gradient)"
          activeDot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
