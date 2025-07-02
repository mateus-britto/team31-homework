"use client";

import MyProvider from "./MyProvider";
import { useContext } from "react";
import { ThemeContext } from "./Context";

function Content() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#222" : "#fff",
        minHeight: "100vh",
        padding: "10px",
      }}
    >
      <h1>Theme Context Example</h1>
      <button onClick={toggleTheme}>Toggle Theme (Current: {theme})</button>
    </div>
  );
}

export default function Page() {
  return (
    <MyProvider>
      <Content />
    </MyProvider>
  );
}