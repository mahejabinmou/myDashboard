// import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

// const Header = ({ toggleSidebar }) => {
//   return (
//     <header className="flex justify-between items-center px-6 py-4 bg-[#14141f] text-gray-300">
//       <div className="flex items-center gap-4">
//         {/* Hamburger button - visible on mobile only */}
//         <button
//           onClick={toggleSidebar}
//           className="text-gray-400 hover:text-white focus:outline-none md:hidden"
//           aria-label="Toggle sidebar"
//         >
//           <FaBars size={20} />
//         </button>

//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-[#1e1e2f] rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none"
//           />
//           <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
//         </div>
//       </div>

//       <div className="flex items-center gap-4">
//         <FaBell className="text-gray-400 hover:text-white cursor-pointer" />
//         <FaUserCircle className="text-gray-400 hover:text-white cursor-pointer" />
//       </div>
//     </header>
//   );
// };

// export default Header;

import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import ThemeSwitcher from "../../utilities/toggleTheme";

/**
 * Header - receives optional onMenuClick (if you later want mobile toggle)
 */
export default function Header({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between px-6 py-4  text-[#A5A5A5]">
      <div className="flex items-center gap-4">
        {/* If you want a mobile hamburger you can pass onMenuClick prop */}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="md:hidden text-gray-400 hover:text-white"
            aria-label="open menu"
          >
            <FaBars />
          </button>
        )}

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#1E1D2B] rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none"
          />
          <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className=" rounded-full">
          {/* <IoMailOutline
            size={10}
            className="text-[#1E1D2B] hover:text-white cursor-pointer"
          /> */}
          <ThemeSwitcher />
        </div>
        <div className="p-2 bg-[#A5A5A5]  rounded-full">
          <IoMailOutline
            size={10}
            className="text-[#1E1D2B] hover:text-white cursor-pointer"
          />
        </div>
        <div className="p-2 bg-[#A5A5A5]  rounded-full">
          <FaBell
            size={10}
            className="text-[#1E1D2B] hover:text-white cursor-pointer"
          />
        </div>
        <div className="p-2 bg-[#A5A5A5]  rounded-full">
          <FaUserCircle
            size={10}
            className="text-[#1E1D2B] hover:text-white cursor-pointer"
          />
        </div>

        <div className="p-2 bg-[#A5A5A5]  rounded-full">
          <FaGear
            size={10}
            className=" text-[#1E1D2B] hover:text-white cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
