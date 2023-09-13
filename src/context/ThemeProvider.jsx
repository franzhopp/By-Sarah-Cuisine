import { createContext, useContext, useState } from "react";

// Création de context 
const ThemeContext = createContext();

// Exportation du hook 
export const useTheme = () => {
    return useContext(ThemeContext);
}

// Fonctionnalité du dark mode 
const ThemeProvider = ({ children }) => {
    // Initialisation 
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const options = {
        isDarkMode,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={options}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;