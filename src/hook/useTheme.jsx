import { useEffect } from "react";
import { useTheme } from "../context/ThemeProvider";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

const DarkLightThemes = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
        document.body.classList.add("bg-gray-900");
        document.body.classList.remove("bg-white");
    } else {
        document.body.classList.add("bg-white");
      document.body.classList.remove("bg-gray-900");
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "" : ""}>
      <button
        onClick={toggleTheme}
        className={`py-2 px-4 bg-transparent rounded-full border border-gray-300 ${isDarkMode ? "dark" : ""}`}
      >
        {isDarkMode ? "" : ""}
        <div className="icons">{isDarkMode ? <IoMdSunny /> : <IoMdMoon />}</div>
      </button>
    </div>
  );
};

export default DarkLightThemes;
