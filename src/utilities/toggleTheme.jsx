import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import useThemeStore from "../store/useThemeStore";

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <button>
      {isDarkMode ? (
        <IoIosSunny
          title="Toggle Light Mode"
          className="text-[#A5A5A5] hover:text-white cursor-pointer size-4"
          onClick={() => toggleTheme(false)}
        />
      ) : (
        <FaMoon
          title="Toggle Dark Mode"
          className="text-[#1E1D2B] hover:text-white cursor-pointer size-4"
          onClick={() => toggleTheme(true)}
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;
