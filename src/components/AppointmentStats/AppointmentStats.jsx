import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { time: "8:00 AM", Offline: 25, Online: -25 },
  { time: "9:00 AM", Offline: 40, Online: -20 },
  { time: "10:00 AM", Offline: 28, Online: -24 },
  { time: "11:00 AM", Offline: 10, Online: -15 },
  { time: "12:00 PM", Offline: 30, Online: -18 },
  { time: "2:00 PM", Offline: 25, Online: -10 },
  { time: "3:00 PM", Offline: 24, Online: -20 },
  { time: "4:00 PM", Offline: 27, Online: -18 },
];

const AppointmentStats = () => {
  return (
    <div className="bg-black text-white rounded-xl p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Appointment Stats</h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="text-sm">Offline</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="text-sm">Online</span>
          </div>
          <div className="flex gap-2 ml-4">
            <button className="bg-purple-600 px-2 py-1 rounded-full text-xs">
              1D
            </button>
            <button className="bg-gray-800 px-2 py-1 rounded-full text-xs">
              1W
            </button>
            <button className="bg-gray-800 px-2 py-1 rounded-full text-xs">
              1M
            </button>
            <button className="bg-gray-800 px-2 py-1 rounded-full text-xs">
              1Y
            </button>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="time" stroke="#aaa" />
          <YAxis
            domain={[-50, 50]}
            stroke="#aaa"
            tickFormatter={(tick) => `${tick}`}
          />
          <Tooltip />
          <Bar dataKey="Offline" fill="#a855f7" radius={[5, 5, 0, 0]} />
          <Bar dataKey="Online" fill="#f97316" radius={[0, 0, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppointmentStats;
