import { FaEnvelope, FaUpload } from "react-icons/fa";
import FormSection from "./FormSection";

const InvoiceDetails = () => {
  return (
    <FormSection
      title="Invoice Details"
      subtitle="Any special promotions or offers, if applicable."
    >
      {/* Logo Upload */}
      <div className="border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center h-28 bg-[#141428]">
        <FaUpload className="text-purple-400 text-xl mb-1" />
        <p className="text-purple-400 text-sm cursor-pointer">Upload</p>
        <p className="text-gray-500 text-xs">Or drag and drop</p>
      </div>

      {/* Invoice ID & Date */}
      <div className="flex gap-4">
        <select className="bg-black text-white rounded-lg px-3 py-2 flex-1 outline-none">
          <option>R - 0122464 -10</option>
        </select>
        <input
          type="date"
          defaultValue="2023-09-04"
          className="bg-black text-white rounded-lg px-3 py-2 flex-1 outline-none"
        />
      </div>

      {/* Email */}
      <input
        type="email"
        value="mrrahamathawdler@gmail.com"
        className="bg-black text-white rounded-lg px-3 py-2 w-full outline-none"
      />

      {/* Message */}
      <div className="relative">
        <input
          type="text"
          placeholder="Optional Message to Client"
          className="bg-black text-white rounded-lg px-3 py-2 w-full outline-none"
        />
        <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
      </div>

      {/* Checkbox */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          defaultChecked
          className="accent-purple-500 w-4 h-4"
        />
        <span className="text-gray-300 text-sm">
          Get Notified When Invoice is Paid
        </span>
      </label>
    </FormSection>
  );
};

export default InvoiceDetails;
