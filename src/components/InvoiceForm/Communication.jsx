import FormSection from "./FormSection";

const Communication = () => {
  return (
    <FormSection
      title="Communication"
      subtitle="Any special promotions or offers, if applicable."
    >
      <div className="grid grid-cols-2 gap-4">
        <select className="bg-black text-white rounded-lg px-3 py-2">
          <option>Email</option>
        </select>
        <input
          type="text"
          defaultValue="Thank you for bus..."
          className="bg-black text-white rounded-lg px-3 py-2"
        />
      </div>
      <div className="flex gap-4">
        <button className="bg-black text-white border border-gray-600 px-4 py-2 rounded-lg w-1/2">
          Reset to Default
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg w-1/2">
          Save & Continue
        </button>
      </div>
    </FormSection>
  );
};

export default Communication;
