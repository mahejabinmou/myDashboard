import { FaArrowTrendUp } from "react-icons/fa6";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "01", earnings: 29400, scheduled: 1, cancel: 0, noShow: 0 },
  { date: "02", earnings: 29800, scheduled: 2, cancel: 0, noShow: 0 },
  { date: "03", earnings: 30200, scheduled: 3, cancel: 0, noShow: 0 },
  { date: "04", earnings: 30000, scheduled: 1, cancel: 0, noShow: 0 },
  { date: "05", earnings: 29300, scheduled: 2, cancel: 0, noShow: 0 },
  { date: "06", earnings: 29700, scheduled: 1, cancel: 0, noShow: 0 },
  { date: "07", earnings: 29950, scheduled: 1, cancel: 0, noShow: 0 },
  { date: "08", earnings: 29950, scheduled: 1, cancel: 0, noShow: 0 },
  { date: "09", earnings: 29800, scheduled: 2, cancel: 0, noShow: 0 },
  { date: "10", earnings: 29850, scheduled: 1, cancel: 0, noShow: 0 },
  { date: "11", earnings: 30250, scheduled: 3, cancel: 0, noShow: 0 },
  { date: "12", earnings: 30500, scheduled: 4, cancel: 0, noShow: 0 },
  { date: "13", earnings: 30450, scheduled: 3, cancel: 0, noShow: 0 },
  { date: "14", earnings: 30300, scheduled: 2, cancel: 0, noShow: 0 },
  { date: "15", earnings: 30400, scheduled: 2, cancel: 0, noShow: 0 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { scheduled, cancel, noShow } = payload[0].payload;
    return (
      <div
        style={{
          background: "#1e1e2f",
          padding: "10px",
          borderRadius: "8px",
          color: "#fff",
          fontSize: "14px",
        }}
      >
        <p>{`Sep ${label}, 2023`}</p>
        <p>● Scheduled: {scheduled}</p>
        <p>● Cancel: {cancel}</p>
        <p>● No Show: {noShow}</p>
      </div>
    );
  }
  return null;
};

const EarningsChart = () => {
  return (
    <div
      style={{
        background: "#1e1e2f",
        padding: "20px",
        borderRadius: "12px",
        color: "#fff",
        width: "100%",
        // maxWidth: "800px",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h3 style={{ margin: 0 }}>Earning</h3>

          <div className="flex gap-6 text-white">
            <h1 style={{ margin: "5px 0" }}>${"30,982.80"}</h1>
            <div className="flex gap-2 items-center justify-center">
              {" "}
              <FaArrowTrendUp
                className="text-[#ff4d6d]"
                size={12}
                style={{ marginRight: "4px" }}
              />
              <h1>+4.84%</h1>
            </div>
          </div>
        </div>
        <select
          style={{
            background: "#2a2339",
            color: "#fff",
            border: "none",
            padding: "6px 10px",
            borderRadius: "6px",
          }}
        >
          <option>September 2023</option>
          <option>october 2023</option>
          <option>november 2023</option>
        </select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="lineColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8a5eff" stopOpacity={1} />
              <stop offset="100%" stopColor="#8a5eff" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#2a2339" />
          <XAxis dataKey="date" tick={{ fill: "#aaa" }} />
          <YAxis
            domain={[29300, 30900]}
            tickFormatter={(val) => `$${(val / 1000).toFixed(1)}k`}
            tick={{ fill: "#aaa" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="url(#lineColor)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
