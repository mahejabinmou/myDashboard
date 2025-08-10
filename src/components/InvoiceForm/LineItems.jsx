import FormSection from "./FormSection";

const LineItems = () => {
  return (
    <FormSection
      title="Line Items"
      subtitle="Any special promotions or offers, if applicable."
    >
      <div className="grid grid-cols-4 gap-4 items-center">
        <select className="bg-black text-white rounded-lg px-3 py-2">
          <option>Item</option>
        </select>
        <input
          type="number"
          defaultValue={2}
          className="bg-black text-white rounded-lg px-3 py-2"
        />
        <input
          type="text"
          defaultValue="$8.00"
          className="bg-black text-white rounded-lg px-3 py-2"
        />
        <input
          type="text"
          defaultValue="$48.00"
          className="bg-black text-white rounded-lg px-3 py-2"
        />
      </div>
      <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
        + Add New Item
      </button>
    </FormSection>
  );
};

export default LineItems;
