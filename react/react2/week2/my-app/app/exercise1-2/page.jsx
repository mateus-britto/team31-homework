"use client";

import MyProvider from "./MyProvider";
import { useContext } from "react";
import { ThemeContext } from "./Context";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Content() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <h1>1.2 Implementing a theme context using Material UI</h1>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme (Current: {mode})
      </Button>
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
