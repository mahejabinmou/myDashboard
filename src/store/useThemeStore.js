import { create } from "zustand";

const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem("selectedTheme") || "light";

  // Set the theme on initial load based on saved preference
  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }

  return {
    isDarkMode: savedTheme === "dark",
    toggleTheme: () => {
      set((state) => {
        const newTheme = !state.isDarkMode ? "dark" : "light";
        document.body.setAttribute("data-theme", newTheme);
        localStorage.setItem("selectedTheme", newTheme);
        return { isDarkMode: !state.isDarkMode };
      });
    },
  };
});

export default useThemeStore;
