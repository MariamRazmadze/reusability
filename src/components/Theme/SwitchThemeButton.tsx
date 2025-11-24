import Button from "../Button";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function SwitchThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button
      className={`
        ml-4 mt-4 shadow-sm focus:outline-none
        ${
          theme === "dark"
            ? "border-sky-50 bg-sky-900 text-sky-50"
            : "border-sky-900 bg-sky-50 text-sky-900"
        }
      `}
      size="sm"
      variant="danger"
      onClick={toggleTheme}
    >
      Switch Theme
    </Button>
  );
}
