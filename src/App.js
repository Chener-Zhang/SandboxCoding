import "./styles.css";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  const light = {
    body: "#E2E2E2"
  };
  const dark = {
    body: "#363537"
  };
  
  const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.body};
  }
  `c

  return (
    <ThemeProvider theme={theme === "light" ? dark : light}>
      <GlobalStyle />
      <button
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      >
        change
      </button>
    </ThemeProvider>
  );
}
