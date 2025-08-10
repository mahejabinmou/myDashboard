import { HiOutlineScissors } from "react-icons/hi";
import CustomButton from "../components/ui/CustomButton/CustomButton";

const BussinesInputForm = ({
  step,
  onNext,
  onBack,
  selectedServices,
  setSelectedServices,
  showServiceSelection,
}) => {
  const handleServiceClick = (service) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(service)
        ? prevSelected.filter((item) => item !== service)
        : [...prevSelected, service]
    );
  };

  return (
    <div className="flex flex-col">
      <div className="h-[54px] w-[146px] mx-auto mt-[40px] mb-[105px]">
        <img
          src="/images/bbr.png"
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col mx-[395px] mb-[199px] py-[32px] rounded-[16px] px-[24px] bg-[#1E1D2B] border border-[#373737]">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (showServiceSelection) {
              onNext(); // Add this to proceed to step 4
            } else {
              onNext();
            }
          }}
        >
          {/* Step 2: Business Name & Website */}
          {!showServiceSelection && (
            <>
              <label className="block formLabelText" htmlFor="businessName">
                Business Name*
              </label>
              <input
                id="businessName"
                type="text"
                placeholder="Name of your Business"
                className="w-full formInputText"
              />

              <label className="block formLabelText" htmlFor="website">
                Website
              </label>
              <input
                id="website"
                type="text"
                placeholder="Your Website"
                className="w-full formInputText"
              />
            </>
          )}

          {/* Step 3: Service Selection */}
          {showServiceSelection && (
            <>
              <div className="text-center mb-6">
                <h2 className="head mb-2">What services do you offer?</h2>
                <p className="para">
                  Select services below to customize your trial experience.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Haircuts & styling",
                  "Injectables",
                  "Lashes & eyebrows",
                  "Facials & skincare",
                  "Massage",
                  "Tattoos & piercings",
                  "Nail services",
                  "Waxing",
                  "Makeup",
                  "Hair extensions",
                  "Barbering",
                  "Other",
                ].map((service, index) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleServiceClick(service)}
                      className={`border rounded-[8px] py-[10px] px-[12px] text-sm font-medium transition-all flex items-center gap-2 justify-center ${
                        isSelected
                          ? "bg-[#121218] text-white border-[#8C5FF7]"
                          : "bg-[#121218] text-[#F6F6F6] border-[#373737] hover:bg-[#8c5ff7]/20"
                      }`}
                    >
                      {isSelected && (
                        <div className="flex justify-center items-center rounded-full w-[16px] h-[16px] bg-gray-400">
                          <HiOutlineScissors size={9} className="text-white" />
                        </div>
                      )}
                      {service}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {/* Step Footer */}
          <div className="flex justify-between items-center pt-4 mt-6">
            <span className="text-sm text-[#8C5FF7]">Step {step} of 4</span>
            <div className="space-x-2">
              <CustomButton variant="secondary" type="button" onClick={onBack}>
                Back
              </CustomButton>

              <CustomButton
                variant="primary"
                type="button"
                onClick={onNext}
                disabled={showServiceSelection && selectedServices.length === 0}
              >
                {showServiceSelection ? "Next" : "Next"}
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BussinesInputForm;
