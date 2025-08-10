const InvoiceCard = ({ title, count, amount, color, lineColor, icon }) => {
  return (
    <div className={`p-4 rounded-xl bg-[#1B1B2F] w-full`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg`} style={{ backgroundColor: color }}>
            {icon}
          </div>
          <h3 className="text-sm text-gray-300">
            {title} ({count})
          </h3>
        </div>
        <button className="text-gray-400">...</button>
      </div>
      <p className="text-2xl font-bold mt-3 text-white">${amount}k</p>
      <div className="mt-2">
        {/* Simulated line chart background */}
        <div className="h-12 w-full">
          <svg viewBox="0 0 100 30" className="w-full h-full">
            <path
              d="M0,20 C20,10 40,25 60,15 C80,5 100,20 120,10"
              stroke={lineColor}
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
