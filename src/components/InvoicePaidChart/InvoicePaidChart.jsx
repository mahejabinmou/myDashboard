import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const InvoicePaidChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Invoice Paid",
        data: [150, 250, 100, 280, 170, 433, 200, 150, 250, 270, 160, 240],
        backgroundColor: "#A855F7",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#9CA3AF" } },
      y: { ticks: { color: "#9CA3AF" } },
    },
  };

  return (
    <div className="bg-[#1B1B2F] p-4 rounded-xl">
      <h3 className="text-gray-300 mb-4">Invoice Paid</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default InvoicePaidChart;
