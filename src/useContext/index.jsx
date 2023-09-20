import React, { createContext, useContext, useState } from "react";

const ThemeProvider = createContext(null);

export default function UseContext() {
  const [darkmode, setDarkMode] = useState("light");
  return (
    <>
      <ThemeProvider.Provider value={darkmode}>
        <From />
        <label>
          <input
            type="checkbox"
            checked={darkmode === "dark"}
            onChange={(e) => {
              setDarkMode(e.target.checked ? "dark" : "light");
            }}
          />
          dark
        </label>
      </ThemeProvider.Provider>
    </>
  );
}
function From({ child }) {
  return <Second text={"Bismillah"}></Second>;
}

function Second({ text, child }) {
  const theme = useContext(ThemeProvider);
  const className = "text-" + theme;
  return (
    <h1
      className={className}
      style={{ border: "1px solid black", height: "200px" }}
    >
      {text}
      {child}
    </h1>
  );
}

function Third({ child }) {
  const theme = useContext(ThemeProvider);
  const className = "button-" + theme;
  return <button className={className}>{child}</button>;
}
