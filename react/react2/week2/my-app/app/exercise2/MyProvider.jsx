"use client";

import { useState, useMemo } from "react";
import { ThemeContext } from "./Context";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import enUS from "date-fns/locale/en-US";
import fr from "date-fns/locale/fr";

const locales = {
  en: enUS,
  fr: fr,
};

export default function MyProvider({ children }) {
  const [mode, setMode] = useState("light");
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));
  const changeLanguage = (lang) => setLanguage(lang);

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, language, changeLanguage }}>
      <MuiThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={locales[language]}>
          {children}
        </LocalizationProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}