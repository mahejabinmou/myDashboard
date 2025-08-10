import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { name: "Mon", value: 10 },
  { name: "Tue", value: 13 },
  { name: "Wed", value: 12 },
  { name: "Thu", value: 15.2 },
  { name: "Fri", value: 13 },
  { name: "Sat", value: 11 },
  { name: "Sun", value: 12 },
];

const COLORS = [
  "#FF8C00",
  "#5B3FFF",
  "#5B3FFF",
  "#A066FF",
  "#5B3FFF",
  "#5B3FFF",
  "#5B3FFF",
];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "4px 8px",
          borderRadius: "6px",
          fontSize: "12px",
          color: "#000",
          fontWeight: "bold",
        }}
      >
        ${payload[0].value}
      </div>
    );
  }
  return null;
}

export default function ExpensesChart() {
  return (
    <div
      style={{
        background: "#1e1e2f",
        padding: "20px",
        borderRadius: "12px",
        color: "#fff",
        width: "100%",
        // maxWidth: "320px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>All expenses</h3>
        <select
          style={{
            background: "#2a2339",
            color: "#fff",
            border: "none",
            padding: "4px 8px",
            borderRadius: "6px",
          }}
        >
          <option>Monthly</option>
        </select>
      </div>

      {/* Subtitle */}
      <p style={{ fontSize: "14px", margin: "8px 0 0", opacity: 0.8 }}>
        Monthly reports
      </p>
      <p
        style={{
          fontSize: "12px",
          margin: "2px 0 12px",
          opacity: 0.6,
        }}
      >
        "Tracking Progress: Monthly Performance Report."
      </p>

      {/* Highlight */}
      <h2 style={{ margin: 0, color: "#fff" }}>+${15.2}</h2>
      <p style={{ margin: "2px 0 20px", fontSize: "14px", opacity: 0.8 }}>
        More than last
      </p>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data} barSize={25}>
          <XAxis
            dataKey="name"
            tick={{ fill: "#aaa" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
