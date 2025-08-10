// import emojiFlags from "emoji-flags";
// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import Select, { components } from "react-select";

// import _layoutRegistration from "../layouts/Register";
// // Helper function to convert country code to emoji flag
// function getFlagEmoji(countryCode) {
//   return countryCode
//     .toUpperCase()
//     .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
// }

// console.log(getFlagEmoji("US")); // 🇺🇸
// console.log(getFlagEmoji("IN")); // 🇮🇳
// console.log(getFlagEmoji("BD")); // 🇧🇩

// const countryOptions = [
//   { value: "+1", label: "United States", code: "US" },
//   { value: "+44", label: "United Kingdom", code: "GB" },
//   { value: "+91", label: "India", code: "IN" },
//   { value: "+880", label: "Bangladesh", code: "BD" },
//   { value: "+61", label: "Australia", code: "AU" },
//   { value: "+81", label: "Japan", code: "JP" },
//   { value: "+49", label: "Germany", code: "DE" },
//   { value: "+33", label: "France", code: "FR" },
//   { value: "+7", label: "Russia", code: "RU" },
//   { value: "+39", label: "Italy", code: "IT" },
// ];

// const Option = (props) => (
//   <components.Option {...props}>
//     <span className="mr-2">{getFlagEmoji(props.data.code)}</span>
//     {props.data.label} ({props.data.value})
//   </components.Option>
// );
// // Custom Option component for react-select:

// const Home = ({ onNext }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [selectedCode, setSelectedCode] = useState(countryOptions[0]);
//   const flag = emojiFlags.countryCode("US").emoji;
//   return (
//     <_layoutRegistration
//       step={1}
//       onNext={onNext}
//       title="Try Mangomint for free"
//       subtitle="See Mangomint in action instantly with pre-populated sample data. No credit card required. Free for 30 days."
//     >
//       <form
//         className="space-y-4"
//         onSubmit={(e) => {
//           e.preventDefault();
//           onNext?.();
//         }}
//       >
//         {/* Your form fields here */}
//         <div className="flex gap-4">
//           {/* First and Last Name */}
//           <div className="w-1/2">
//             <label htmlFor="firstName" className="block formLabelText">
//               First Name*
//             </label>
//             <input
//               id="firstName"
//               type="text"
//               placeholder="FirstName"
//               className="w-full formInputText autofill-fix"
//             />
//           </div>
//           <div className="w-1/2">
//             <label htmlFor="lastName" className="block formLabelText">
//               Last Name
//             </label>
//             <input
//               id="lastName"
//               type="text"
//               placeholder="LastName"
//               className="w-full formInputText autofill-fix"
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="relative">
//           <label htmlFor="email" className="block formLabelText">
//             Email*
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="email"
//             className="w-full formInputText"
//           />
//           <MdOutlineMailOutline
//             className="absolute right-3 top-[45px] text-[#A5A5A5] pointer-events-none"
//             size={20}
//           />
//         </div>

//         {/* Phone Number */}
//         <div>
//           <label htmlFor="phone" className="block formLabelText">
//             Phone Number*
//           </label>
//           <div className="flex gap-2">
//             <Select
//               options={countryOptions}
//               value={selectedCode} // <-- add this line
//               onChange={setSelectedCode}
//               getOptionLabel={(e) => (
//                 <div className="flex items-center">
//                   <span className="mr-2">
//                     {emojiFlags.countryCode(e.code)?.emoji}
//                   </span>
//                   {e.label} ({e.value})
//                 </div>
//               )}
//               components={{ Option }}
//               className="react-select-container"
//               classNamePrefix="react-select"
//               styles={{
//                 control: (base) => ({
//                   ...base,
//                   backgroundColor: "#070706",
//                   borderColor: "#373737",
//                   borderRadius: "12px",
//                   padding: "2px 0",
//                   color: "#F6F6F6",
//                 }),
//                 singleValue: (base) => ({
//                   ...base,
//                   color: "#F6F6F6",
//                   display: "flex",
//                   alignItems: "center",
//                 }),
//                 menu: (base) => ({
//                   ...base,
//                   backgroundColor: "#1e1e1e",
//                   color: "#fff",
//                 }),
//               }}
//             />

//             <input
//               id="phone"
//               type="tel"
//               placeholder="PhoneNumber"
//               className="w-[65%] formInputText autofill-fix"
//             />
//           </div>
//         </div>

//         {/* Passwords */}
//         <div className="flex gap-4">
//           <div className="w-1/2 relative">
//             <label htmlFor="password" className="block formLabelText">
//               Password*
//             </label>
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="w-full formInputText"
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-[48px] text-[#A5A5A5]"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
//             </button>
//           </div>

//           <div className="w-1/2 relative">
//             <label htmlFor="confirmPassword" className="block formLabelText">
//               Confirm Password*
//             </label>
//             <input
//               id="confirmPassword"
//               type={showConfirm ? "text" : "password"}
//               placeholder="ConfirmPassword"
//               className="w-full formInputText"
//             />
//             <button
//               type="button"
//               className="absolute right-3 top-[48px] text-[#A5A5A5]"
//               onClick={() => setShowConfirm(!showConfirm)}
//             >
//               {showConfirm ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
//             </button>
//           </div>
//         </div>
//       </form>
//     </_layoutRegistration>
//   );
// };

// export default Home;

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Select, { components } from "react-select";
import Flag from "react-world-flags"; // Import SVG flag component

import _layoutRegistration from "../layouts/Register";

const countryOptions = [
  { value: "+1", label: "United States", code: "US" },
  { value: "+44", label: "United Kingdom", code: "GB" },
  { value: "+91", label: "India", code: "IN" },
  { value: "+880", label: "Bangladesh", code: "BD" },
  { value: "+61", label: "Australia", code: "AU" },
  { value: "+81", label: "Japan", code: "JP" },
  { value: "+49", label: "Germany", code: "DE" },
  { value: "+33", label: "France", code: "FR" },
  { value: "+7", label: "Russia", code: "RU" },
  { value: "+39", label: "Italy", code: "IT" },
];

// Custom Option to show flag + label + code
const Option = (props) => (
  <components.Option {...props}>
    <Flag
      code={props.data.code}
      style={{ width: 24, height: 16, marginRight: 8, verticalAlign: "middle" }}
      alt={props.data.code}
    />
    {props.data.label} ({props.data.value})
  </components.Option>
);

const SingleValue = (props) => (
  <components.SingleValue {...props}>
    <Flag
      code={props.data.code}
      style={{ width: 24, height: 16, marginRight: 8, verticalAlign: "middle" }}
      alt={props.data.code}
    />
    {props.data.label} ({props.data.value})
  </components.SingleValue>
);

const Home = ({ onNext }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedCode, setSelectedCode] = useState(countryOptions[0]);

  return (
    <_layoutRegistration
      step={1}
      onNext={onNext}
      title="Try Mangomint for free"
      subtitle="See Mangomint in action instantly with pre-populated sample data. No credit card required. Free for 30 days."
    >
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onNext?.();
        }}
      >
        {/* First and Last Name */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="firstName" className="block formLabelText">
              First Name*
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="FirstName"
              className="w-full formInputText autofill-fix"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName" className="block formLabelText">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="LastName"
              className="w-full formInputText autofill-fix"
            />
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <label htmlFor="email" className="block formLabelText">
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="email"
            className="w-full formInputText"
          />
          <MdOutlineMailOutline
            className="absolute right-3 top-[45px] text-[#A5A5A5] pointer-events-none"
            size={20}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block formLabelText">
            Phone Number*
          </label>
          <div className="flex gap-2">
            <div className="w-[35%]">
              <Select
                options={countryOptions}
                value={selectedCode}
                onChange={setSelectedCode}
                components={{ Option, SingleValue }}
                className="react-select-container"
                classNamePrefix="react-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "#070706",
                    borderColor: "#373737",
                    borderRadius: "12px",
                    padding: "2px 0",
                    color: "#A5A5A5",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "#A5A5A5",
                    display: "flex",
                    alignItems: "center",
                  }),
                  menu: (base) => ({
                    ...base,
                    backgroundColor: "#1e1e1e",
                    color: "#fff",
                  }),
                }}
              />
            </div>

            <input
              id="phone"
              type="tel"
              placeholder="PhoneNumber"
              className="w-[65%] formInputText autofill-fix"
            />
          </div>
        </div>

        {/* Passwords */}
        <div className="flex gap-4">
          <div className="w-1/2 relative">
            <label htmlFor="password" className="block formLabelText">
              Password*
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full formInputText"
            />
            <button
              type="button"
              className="absolute right-3 top-[48px] text-[#A5A5A5]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          <div className="w-1/2 relative">
            <label htmlFor="confirmPassword" className="block formLabelText">
              Confirm Password*
            </label>
            <input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="ConfirmPassword"
              className="w-full formInputText"
            />
            <button
              type="button"
              className="absolute right-3 top-[48px] text-[#A5A5A5]"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
        </div>
      </form>
    </_layoutRegistration>
  );
};

export default Home;
