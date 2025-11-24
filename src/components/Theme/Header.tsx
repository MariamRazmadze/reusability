import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`
        h-24 w-full flex items-center pl-4
        ${
          theme === "light"
            ? "bg-sky-100 text-sky-900"
            : "bg-sky-700 text-sky-100"
        }
      `}
    >
      <h1 className="m-0">{theme[0].toUpperCase() + theme.slice(1)} Theme</h1>
    </header>
  );
}
