import FormSection from "./FormSection";

const ClientDetails = () => {
  return (
    <FormSection
      title="Client Details"
      subtitle="Any special promotions or offers, if applicable."
    >
      <input
        type="text"
        placeholder="Name,Email or Phone number"
        className="bg-black text-white rounded-lg px-3 py-2 w-full outline-none"
      />
    </FormSection>
  );
};

export default ClientDetails;
