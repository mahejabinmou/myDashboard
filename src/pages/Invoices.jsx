import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import InvoicePaidChart from "../components/InvoicePaidChart/InvoicePaidChart";
import InvoiceStats from "../components/InvoiceStats/InvoiceStats";
import InvoiceTable from "../components/InvoiceTable/InvoiceTable";
import NewTemplateCard from "../components/NewTemplateCard/NewTemplateCard";

const Invoices = () => {
  return (
    <div className="p-6 bg-[#0F0F1E] min-h-screen rounded-lg text-white space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Invoice</h1>
        <Link to="/invoicePage">
          <button className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
            <FiPlus /> Add Invoice
          </button>
        </Link>
      </div>
      {/* Section 1 */}
      <InvoiceStats />

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
        <div className="md:col-span-2">
          <InvoicePaidChart />
        </div>
        <NewTemplateCard />
      </div>
      {/* Section 3 */}
      <InvoiceTable />
    </div>
  );
};

export default Invoices;
