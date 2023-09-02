import { useEffect } from "react";
import { useTheme } from "../context/ThemeProvider";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

const DarkLightThemes = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
        document.body.classList.add("bg-dark-mode-pastel");
        document.body.classList.remove("bg-white");
    } else {
        document.body.classList.add("bg-white");
      document.body.classList.remove("bg-dark-mode-pastel");
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "text-color-white-pastel" : ""}>
      <button
        onClick={toggleTheme}
        className={`py-2 px-4 bg-transparent rounded-full border border-color-white-pastel ${isDarkMode ? "dark" : ""}`}
      >
        {isDarkMode ? "" : ""}
        <div className="icons text-color-white-pastel">{isDarkMode ? <IoMdSunny /> : <IoMdMoon />}</div>
      </button>
    </div>
  );
};

export default DarkLightThemes;
