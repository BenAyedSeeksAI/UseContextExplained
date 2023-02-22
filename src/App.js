import "./styles.css";
import React, { useState } from "react";
import ChildComp from "./ChildComp";

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [lightTheme, setLightTheme] = useState(true);
  function toggleHandler() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    setLightTheme((prevLightTheme) => !prevLightTheme);
  }
  const value = {
    darkTheme: darkTheme,
    lightTheme: lightTheme
  };
  return (
    <div className="App">
      <ThemeContext.Provider value={value}>
        <button onClick={toggleHandler}>Toggle</button>
        <ChildComp />
      </ThemeContext.Provider>
    </div>
  );
}
