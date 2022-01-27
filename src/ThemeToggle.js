import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const light = {
    body: "#FFFFFF"
  };
  const dark = {
    body: "#000000"
  };
  const GlobleStyle = createGlobalStyle`

  body{
    background-color:${({ theme }) => theme.body}
  }
  `;

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobleStyle />
      <button
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        Change
      </button>
    </ThemeProvider>
  );
}
