import { createContext, useCallback, useContext, useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "../../themes/Light";
import { DarkTheme } from "../../themes/Dark";
import { useState } from "react";



const ThemeContext = createContext({});

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    return themeName === 'light' ? LightTheme : DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
