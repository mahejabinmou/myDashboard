import { useState } from "react";
// jeita tumi Home component hishebe banale

import { useNavigate } from "react-router-dom";
import BussinesInputForm from "../../pages/BussinesInputForm";
import Home from "../../pages/Home";
import ServiceProvidersStep from "../../pages/ServiceProvidersStep ";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  // selectedServices state ta BussinesInputForm e use hocche, so setState pass korte hobe

  // Also jodi tumi form data ekta ekta step e collect korte chao, tar jonno state thakbe
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceProviders, setServiceProviders] = useState(null); // ✅ Store step 4 selection

  // Step increment/decrement handler
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const navigate = useNavigate();
  // ✅ Define handleSubmit here
  const handleSubmit = () => {
    const formData = {
      selectedServices,
      serviceProviders,
    };
    navigate("/dasboardLayout");

    console.log("🚀 Final Submitted Data:", formData);
    // alert("Form submitted successfully!");
    // You can send this `formData` to a backend API here
  };

  return (
    <div>
      {step === 1 && <Home onNext={nextStep} />}
      {step === 2 && (
        <BussinesInputForm
          step={2}
          onNext={nextStep}
          onBack={prevStep}
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          showServiceSelection={false}
        />
      )}

      {step === 3 && (
        <BussinesInputForm
          step={3}
          onNext={nextStep}
          onBack={prevStep}
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          showServiceSelection={true}
        />
      )}

      {step === 4 && (
        <ServiceProvidersStep
          onBack={prevStep}
          onSubmit={handleSubmit}
          selectedOption={serviceProviders}
          setSelectedOption={setServiceProviders}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
