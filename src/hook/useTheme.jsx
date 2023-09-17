import { useEffect } from "react";
import { useTheme } from "../context/ThemeProvider";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

const DarkLightThemes = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
        document.body.classList.add("bg-black");
        document.body.classList.remove("bg-white");
    } else {
        document.body.classList.add("bg-white");
      document.body.classList.remove("bg-black");
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "text-white" : ""}>
      <button
        onClick={toggleTheme}
        className={`py-2 px-4 bg-transparent rounded-full ${isDarkMode ? "dark" : ""}`}
      >
        {isDarkMode ? "" : ""}
        <div className="icons text-gray border border-white rounded-full p-2">{isDarkMode ? <IoMdSunny /> : <IoMdMoon />}</div>
      </button>
    </div>
  );
};

export default DarkLightThemes;

