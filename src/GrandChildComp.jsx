import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function GrandChildComp() {
  const value = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: value.lightTheme ? "#333" : "#CCC",
    color: value.lightTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem"
  };
  return <div style={themeStyles}>GrandChildComp</div>;
}
