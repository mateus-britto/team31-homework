// page.jsx
"use client";
import MyProvider from "./MyProvider";
import { useContext } from "react";
import { ThemeContext } from "./Context";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Content() {
  const { mode, toggleTheme, language, changeLanguage } = useContext(ThemeContext);

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary", minHeight: "100vh", p: 2 }}>
      <h1>Material UI Theme & Localization Example</h1>
      <Button variant="contained" onClick={toggleTheme} sx={{ mr: 2 }}>
        Toggle Theme (Current: {mode})
      </Button>
      <Button variant="outlined" onClick={() => changeLanguage(language === "en" ? "fr" : "en")}>
        Switch Language (Current: {language})
      </Button>
      <p>Current language: {language === "en" ? "English" : "French"}</p>
    </Box>
  );
}

export default function Page() {
  return (
    <MyProvider>
      <Content />
    </MyProvider>
  );
}