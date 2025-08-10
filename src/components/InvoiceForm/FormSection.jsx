const FormSection = ({ title, subtitle, children }) => {
  return (
    <div className="bg-[#1B1B2F] rounded-xl p-4 space-y-4">
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default FormSection;
