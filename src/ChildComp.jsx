import React, { useContext } from "react";
import { ThemeContext } from "./App";
import GrandChildComp from "./GrandChildComp";

export default function ChildComp() {
  const value = useContext(ThemeContext);
  const darkStyles = {
    backgroundColor: value.darkTheme ? "#333" : "#CCC",
    color: value.darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem"
  };
  return (
    <>
      <div style={darkStyles}>ChildComp</div>
      <GrandChildComp />
    </>
  );
}
