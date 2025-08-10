import {
  FaCheck,
  FaFileAlt,
  FaFileInvoice,
  FaFolderOpen,
} from "react-icons/fa";
import InvoiceCard from "../InvoiceCard/InvoiceCard";

const InvoiceStats = () => {
  const stats = [
    {
      title: "All Invoice",
      count: 110,
      amount: 433.3,
      color: "#3A0CA3",
      lineColor: "#A855F7",
      icon: <FaFileInvoice className="text-white" />,
    },
    {
      title: "Draft",
      count: 20,
      amount: 137.6,
      color: "#8D6E63",
      lineColor: "#F59E0B",
      icon: <FaFileAlt className="text-white" />,
    },
    {
      title: "Paid",
      count: 50,
      amount: 215.4,
      color: "#B91C1C",
      lineColor: "#EF4444",
      icon: <FaCheck className="text-white" />,
    },
    {
      title: "Open",
      count: 40,
      amount: 132.2,
      color: "#7E22CE",
      lineColor: "#A855F7",
      icon: <FaFolderOpen className="text-white" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <InvoiceCard key={i} {...s} />
      ))}
    </div>
  );
};

export default InvoiceStats;
