import React from "react";
import { createContext } from "react";

type ToggleContextType = {
  on: boolean;
  toggle: () => void;
};

const ToggleContext = createContext<ToggleContextType>({
  on: false,
  toggle: () => {},
});

export default function Toggle({ children }: { children: React.ReactNode }) {
  const [on, setOn] = React.useState(false);
  function toggle() {
    setOn((prev) => !prev);
  }
  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
