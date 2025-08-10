import React from "react";
import CustomButton from "../components/ui/CustomButton/CustomButton";

const ServiceProvidersStep = ({ onBack, onSubmit }) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const providerOptions = [
    {
      id: 1,
      title: "Just Me",
      count: "1",
    },
    {
      id: 2,
      title: "Medium",
      count: "5-15",
    },
    {
      id: 3,
      title: "Small",
      count: "2-4",
    },
    {
      id: 4,
      title: "Large",
      count: "16+",
    },
  ];

  // Function to determine number of circles based on title
  const getCircleCount = (title) => {
    switch (title) {
      case "Just Me":
        return 1;
      case "Medium":
        return 8;
      case "Small":
        return 3;
      case "Large":
        return 28;
      default:
        return 1;
    }
  };

  // Component to render multiple circles
  const renderCircles = (count, isSelected) => {
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={index}
        className={`
          w-4 h-4 rounded-full  mt-[10px]
          ${isSelected ? " bg-[#F2D4F9]" : "bg-[#A5A5A5]"}
          ${index > 0 ? "" : ""}
        `}
      >
        {isSelected && <div className="w-4 h-4 rounded-full  "></div>}
      </div>
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#121218]">
      {/* Header Logo */}
      <div className="h-[54px] w-[146px] mx-auto mt-[40px] mb-[105px]">
        <img
          src="/images/bbr.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Form Container */}
      <div className="mx-auto w-full max-w-2xl px-4">
        <div className="bg-[#1E1D2B] border border-[#373737] rounded-2xl p-6">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              How many Service Providers do you have?
            </h2>
            <p className="text-[#A5A5A5]">
              Select the option that best describes your business
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {providerOptions.map((option) => {
              const isSelected = selectedOption === option.id;
              const circleCount = getCircleCount(option.title);

              return (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`
                     border h-[290px] rounded-lg cursor-pointer transition-all flex flex-col  justify-center items-center
                    ${
                      isSelected
                        ? "border-[#8C5FF7] bg-[#070706]"
                        : "border-[#373737] hover:border-[#8C5FF7] bg-[#1E1D2B]"
                    }
                  `}
                >
                  <div>
                    {option.title && (
                      <h3 className="text-white py-[10px]">{option.title}</h3>
                    )}
                    <p className="text-[#A5A5A5]">{option.count}</p>
                  </div>

                  {/* Dynamic Circles */}
                  <div className="grid grid-cols-7  gap-[10px]">
                    {renderCircles(circleCount, isSelected)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Navigation */}
          <div className="flex justify-between items-center pt-4 border-t border-[#373737]">
            <span className="text-sm text-[#8C5FF7]">Step 4 of 4</span>
            <div className="flex gap-2">
              <CustomButton variant="secondary" onClick={onBack}>
                Back
              </CustomButton>
              <CustomButton
                variant="primary"
                onClick={onSubmit}
                disabled={!selectedOption}
              >
                Next
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvidersStep;
