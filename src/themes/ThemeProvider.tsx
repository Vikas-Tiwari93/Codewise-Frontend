import React, { useCallback, useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

type ThemeProps = {
  children: React.ReactNode;
};
interface ThemeContextType {
  theme?: Themes;
  changeTheme?: (theme: Themes) => void;
}
type Themes = "light" | "dark";
type StyledTheme = {
  $theme: Themes;
};
const themeObj = {
  dark: {
    backgroundColor: "black",
    color: "white",
    fill: "white",
  },
  light: { backgroundColor: "white", color: "black", fill: "white" },
};
const GlobalStyles = createGlobalStyle<StyledTheme>`
  body {
    background-color: ${(props) => themeObj[props.$theme].backgroundColor};
    color: ${(props) => themeObj[props.$theme].color};
    fill:${(props) => themeObj[props.$theme].fill} ;
    font-size:12px; 

  }
  input{
    color: ${(props) => themeObj[props.$theme].color};
  }
`;

export const AppThemeContext = React.createContext<ThemeContextType>({});
export default function ThemeProvider({ children }: ThemeProps) {
  const [theme, setTheme] = useState<Themes>("light");

  const changeTheme = useCallback((theme: Themes) => {
    theme === "dark"
      ? setTheme((prev) => {
          prev = "light";
          localStorage.setItem("theme", "light");
          return prev;
        })
      : setTheme((prev) => {
          prev = "dark";
          localStorage.setItem("theme", "dark");
          return prev;
        });
  }, []);
  useEffect(() => {
    const themeStorage = localStorage.getItem("theme");
    themeStorage ? setTheme(themeStorage as Themes) : null;
  }, []);

  return (
    <AppThemeContext.Provider value={{ theme, changeTheme }}>
      <GlobalStyles $theme={theme} />
      {children}
    </AppThemeContext.Provider>
  );
}
