import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Select from "react-select";

import _layoutRegistration from "../layouts/Register";
const countryOptions = [
  // Your country options
];

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
        {/* Your form fields here */}
        <div className="flex gap-4">
          {/* First and Last Name */}
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
                defaultValue={selectedCode}
                onChange={setSelectedCode}
                options={countryOptions}
                className="react-select-container"
                classNamePrefix="react-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "#070706",
                    borderColor: "#373737",
                    borderRadius: "12px",
                    padding: "2px 0",
                    color: "#F6F6F6",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "#F6F6F6",
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

// import { Form } from "antd";
// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import Select from "react-select";
// import RegistrationLayOut from "../layouts/RegistrationLayOut";

// const countryOptions = [
//   // my country options
//   { value: "+1", label: "🇺🇸 United States (+1)" },
//   { value: "+44", label: "🇬🇧 United Kingdom (+44)" },
//   { value: "+91", label: "🇮🇳 India (+91)" },
//   { value: "+880", label: "🇧🇩 Bangladesh (+880)" },
//   { value: "+61", label: "🇦🇺 Australia (+61)" },
//   { value: "+81", label: "🇯🇵 Japan (+81)" },
//   { value: "+49", label: "🇩🇪 Germany (+49)" },
//   { value: "+33", label: "🇫🇷 France (+33)" },
//   { value: "+7", label: "🇷🇺 Russia (+7)" },
//   { value: "+39", label: "🇮🇹 Italy (+39)" },
// ];

// const Home = ({ onNext }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [selectedCode, setSelectedCode] = useState(countryOptions[0]);

//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log("Form Values:", values);
//     onNext();
//   };
//   return (
//     <RegistrationLayOut
//       step={1}
//       onNext={() => form.submit()}
//       title="Try Mangomint for free"
//       subtitle="See Mangomint in action instantly with pre-populated sample data. No credit card required. Free for 30 days."
//     >
//       <Form
//         form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         className="space-y-4"
//       >
//         <div className="flex gap-4">
//           <Form.Item
//             label="First Name*"
//             name="firstName"
//             rules={[
//               { required: true, message: "Please input your first name" },
//             ]}
//             className="w-1/2"
//           >
//             <Input placeholder="FirstName" />
//           </Form.Item>

//           <Form.Item label="Last Name" name="lastName" className="w-1/2">
//             <Input placeholder="LastName" />
//           </Form.Item>
//         </div>

//         <Form.Item
//           label="Email*"
//           name="email"
//           rules={[
//             { required: true, message: "Please input your email" },
//             { type: "email", message: "Please enter a valid email" },
//           ]}
//           className="relative"
//         >
//           <Input placeholder="email" />
//           <MdOutlineMailOutline
//             className="absolute right-3 top-[45px] text-[#A5A5A5] pointer-events-none"
//             size={20}
//           />
//         </Form.Item>

//         <Form.Item
//           label="Phone Number*"
//           name="phone"
//           rules={[
//             { required: true, message: "Please input your phone number" },
//           ]}
//         >
//           <div className="flex gap-2">
//             <div className="w-[35%]">
//               <Select
//                 defaultValue={selectedCode}
//                 onChange={setSelectedCode}
//                 options={countryOptions}
//                 className="react-select-container"
//                 classNamePrefix="react-select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     backgroundColor: "#070706",
//                     borderColor: "#373737",
//                     borderRadius: "12px",
//                     padding: "2px 0",
//                     color: "#F6F6F6",
//                   }),
//                   singleValue: (base) => ({
//                     ...base,
//                     color: "#F6F6F6",
//                   }),
//                   menu: (base) => ({
//                     ...base,
//                     backgroundColor: "#1e1e1e",
//                     color: "#fff",
//                   }),
//                 }}
//               />
//             </div>
//             <Input
//               placeholder="PhoneNumber"
//               className="w-[65%]"
//               // onChange to sync with Form.Item will be automatic as it's inside Form.Item
//             />
//           </div>
//         </Form.Item>

//         <div className="flex gap-4">
//           <Form.Item
//             label="Password*"
//             name="password"
//             rules={[
//               { required: true, message: "Please input your password" },
//               { min: 6, message: "Password must be minimum 6 characters." },
//             ]}
//             className="w-1/2 relative"
//           >
//             <Input.Password
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               iconRender={(visible) => (visible ? <FaEyeSlash /> : <FaEye />)}
//               onClick={() => setShowPassword(!showPassword)}
//             />
//           </Form.Item>

//           <Form.Item
//             label="Confirm Password*"
//             name="confirmPassword"
//             dependencies={["password"]}
//             rules={[
//               { required: true, message: "Please confirm your password" },
//               ({ getFieldValue }) => ({
//                 validator(_, value) {
//                   if (!value || getFieldValue("password") === value) {
//                     return Promise.resolve();
//                   }
//                   return Promise.reject(
//                     new Error("The two passwords do not match!")
//                   );
//                 },
//               }),
//             ]}
//             className="w-1/2 relative"
//           >
//             <Input.Password
//               type={showConfirm ? "text" : "password"}
//               placeholder="ConfirmPassword"
//               iconRender={(visible) => (visible ? <FaEyeSlash /> : <FaEye />)}
//               onClick={() => setShowConfirm(!showConfirm)}
//             />
//           </Form.Item>
//         </div>
//       </Form>
//     </RegistrationLayOut>
//   );
// };

// export default Home;
