import React, { useState } from "react";
import Header from "./components/Theme/Header";
import SwitchThemeButton from "./components/Theme/SwitchThemeButton";
import DropdownComponent from "./components/Menu/DropdownComponent";
import Star from "./components/Star";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`
          min-h-screen flex flex-col items-center gap-4
          ${
            theme === "dark"
              ? "bg-sky-900 text-sky-50"
              : "bg-sky-50 text-sky-900"
          }
        `}
      >
        <Header />
        <Star onChange={() => console.log("change")} />

        <SwitchThemeButton />
        <DropdownComponent />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;

export { ThemeContext };
