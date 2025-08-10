import CustomButton from "../components/ui/CustomButton/CustomButton";
import ThemeSwitcher from "../utilities/toggleTheme";

const RegistrationLayOut = ({
  children,
  step,
  onNext,
  logoSrc,
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col p-4 bg-bg-primary">
      {/* Logo and theme toggle */}
      <div className="flex justify-between items-center">
        <div className="h-[54px] w-[146px] mx-auto mt-[40px] mb-[105px]">
          <img
            src={logoSrc || "/images/bbr.png"}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute top-10 right-10 border-2 rounded-full px-3 pt-1.5">
        {/* <ThemeMode /> */}
        <ThemeSwitcher />
      </div>

      {/* Content */}
      <div className="flex flex-col w-[650px] mx-auto mb-[199px] py-[32px] rounded-[16px] px-[24px] bg-bg-secondary border border-[#373737]">
        <div className="text-center">
          <h2 className="head text-form-head mb-[24px]">{title}</h2>
          <p className="para mb-[16px] w-[456px] mx-auto">{subtitle}</p>
        </div>

        {/* Render the children passed into the Layout */}
        {children}

        {/* Step & Buttons */}
        {step && (
          <div className="flex justify-between items-center pt-4">
            <span className="text-sm text-[#8C5FF7]">Step {step} of 4</span>
            <div className="space-x-2">
              <CustomButton variant="secondary" type="button">
                Back
              </CustomButton>
              <CustomButton onClick={onNext} variant="primary" type="submit">
                Next
              </CustomButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationLayOut;
