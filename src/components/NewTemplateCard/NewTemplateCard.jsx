const NewTemplateCard = () => {
  return (
    <div className="bg-[#1B1B2F] p-6 rounded-xl flex flex-col justify-between">
      <span className="bg-purple-500 text-white px-3 py-1 rounded-lg w-fit">
        New
      </span>
      <h3 className="text-white mt-4 text-lg font-semibold">
        We have Added New Invoicing Templates
      </h3>
      <p className="text-gray-400 text-sm mt-2">
        New templates focused on helping you improve your business
      </p>
      <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg">
        Download Now
      </button>
    </div>
  );
};

export default NewTemplateCard;
