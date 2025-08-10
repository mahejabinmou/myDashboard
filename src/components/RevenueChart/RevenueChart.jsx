import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "1.1", yearRevenue: 55, netRevenue: 300 },
  { name: "1.2", yearRevenue: 65, netRevenue: 320 },
  { name: "1.3", yearRevenue: 75, netRevenue: 310 },
  { name: "1.4", yearRevenue: 85, netRevenue: 280 },
  { name: "1.5", yearRevenue: 92, netRevenue: 305 },
  { name: "1.6", yearRevenue: 100, netRevenue: 290 },
  { name: "1.7", yearRevenue: 110, netRevenue: 315 },
  { name: "1.8", yearRevenue: 115, netRevenue: 330 },
  { name: "1.9", yearRevenue: 122, netRevenue: 295 },
  { name: "2.0", yearRevenue: 132, netRevenue: 340 },
  { name: "2.1", yearRevenue: 140, netRevenue: 310 },
];

const RevenueChart = () => {
  return (
    <div className="bg-black text-white rounded-xl p-6 w-full ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Silicon Alley Inside <span className="text-purple-400">〰️</span> Chart
          Of the day
        </h2>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500" />
            <span>Net Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500" />
            <span>Year Revenue</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={424}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#333" vertical={false} />
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#aaa"
            domain={[0, 400]}
            tickFormatter={(v) => `$${v}`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#aaa"
            domain={[0, 150]}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip />
          <Bar
            yAxisId="left"
            dataKey="yearRevenue"
            fill="#a855f7"
            radius={[5, 5, 0, 0]}
            label={{ fill: "#fff", position: "top" }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="netRevenue"
            stroke="#f97316"
            strokeWidth={3}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
