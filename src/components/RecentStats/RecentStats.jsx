import {
  LabelList,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

const rawData = [
  { x: 4.7, y: 80, z: 50, label: "" },
  { x: 5.7, y: 40, z: 100, label: "15,44" },
  { x: 6.7, y: 30, z: 80, label: "33" },
  { x: 7.7, y: 50, z: 200, label: "24,800" },
  { x: 8.7, y: 90, z: 60, label: "10" },
  { x: 9.7, y: 50, z: 150, label: "12,36" },
  { x: 6.2, y: 25, z: 40, label: "" },
  { x: 9.0, y: 45, z: 30, label: "" },
];

// Sort by z and mark top 5
const data = rawData
  .sort((a, b) => b.z - a.z)
  .map((item, index) => ({
    ...item,
    showLabel: index < 5,
  }));

const CustomLabel = ({ x, y, value, index }) => {
  const show = data[index]?.showLabel;
  if (!show) return null;
  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dy={4}
      fill="#fff"
      fontSize={12}
      fontWeight="bold"
    >
      {value}
    </text>
  );
};

const RecentStats = () => {
  return (
    <div className="bg-black text-white rounded-xl p-6 w-full ">
      <h2 className="text-xl font-semibold mb-4">Recent Stats</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <XAxis type="number" dataKey="x" stroke="#aaa" domain={[4, 10]} />
          <YAxis
            type="number"
            dataKey="y"
            stroke="#aaa"
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
          />
          <ZAxis type="number" dataKey="z" range={[60, 400]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={data} fill="#a855f7">
            <LabelList dataKey="label" content={<CustomLabel />} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RecentStats;
