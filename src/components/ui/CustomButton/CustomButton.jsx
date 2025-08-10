import React from "react";

const CustomButton = ({ children, variant = "primary", ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded transition-opacity duration-200 hover:opacity-90";

  const variants = {
    primary:
      "bg-[#8C5FF7] text-[#373737] w-[175px] py-[12px] pl-[20px] pr-[15px] rounded-[12px]",
    secondary:
      "bg-[#070706] text-[#8C5FF7] w-[175px] py-[12px] pl-[20px] pr-[15px] rounded-[12px]",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
