import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { MdOutlineDateRange } from "react-icons/md";
import EarningsChart from "./EarningsChart";
import ExpensesChart from "./ExpensesChart";
import TransactionsTable from "./TransactionsTable";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const cards = [
  {
    title: "New Orders",
    value: "150.00",
    bg: "bg-yellow-300",
    text: "text-yellow-900",
  },
  {
    title: "Unique Visitors",
    value: "150.00",
    bg: "bg-purple-300",
    text: "text-purple-900",
  },
  {
    title: "New Users",
    value: "250.00",
    bg: "bg-pink-300",
    text: "text-pink-900",
  },
];

export default function Reports() {
  return (
    <div className="text-gray-300 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Reports</h1>
        <div
          className="flex gap-x-2 jus items-center text-white"
          style={{
            background: "#2a2339",
            color: "#fff",
            border: "none",
            padding: "4px 8px",
            borderRadius: "6px",
          }}
        >
          <MdOutlineDateRange size={24} />
          <select
            style={{
              background: "#2a2339",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
            }}
          >
            <option> Monthly</option>
          </select>
        </div>
      </div>

      {/* Earnings and Expenses charts side by side */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-[auto,30%] gap-6 ">
        {/* Earnings Line Chart */}
        {/* <div className="bg-[#1e1e2f] rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Earnings</h2>
          <Line
            options={{
              ...commonOptions,
              plugins: {
                ...commonOptions.plugins,
                title: {
                  display: true,
                  text: "Monthly Earnings (Line Chart)",
                  color: "white",
                  font: { size: 18 },
                },
              },
            }}
            data={earningsData}
          />
        </div> */}
        <EarningsChart />

        {/* Expenses Bar Chart */}
        {/* <div className="bg-[#1e1e2f] rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Expenses</h2>
          <Bar
            options={{
              ...commonOptions,
              plugins: {
                ...commonOptions.plugins,
                title: {
                  display: true,
                  text: "Monthly Expenses (Bar Chart)",
                  color: "white",
                  font: { size: 18 },
                },
              },
            }}
            data={expensesBarData}
          />
        </div> */}

        <ExpensesChart />
      </div>

      {/* Cards */}
      <div className="flex gap-6 mb-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.bg} ${card.text} rounded-xl p-6 flex-1 shadow-lg`}
          >
            <h3 className="font-semibold">{card.title}</h3>
            <p className="text-3xl font-bold">{card.value}</p>
            <p className="text-sm mt-2">From last week</p>
          </div>
        ))}
      </div>

      <TransactionsTable />
    </div>
  );
}
