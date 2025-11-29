import React from "react";
import { createContext } from "react";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";

type ToggleContextType = {
  on: boolean;
  toggle: () => void;
};

type ToggleProps = {
  children: React.ReactNode;
  onToggle?: () => void;
};

const ToggleContext = createContext<ToggleContextType>({
  on: false,
  toggle: () => {},
});

export default function Toggle({ children, onToggle = () => {} }: ToggleProps) {
  const [on, setOn] = React.useState(false);

  function toggle() {
    setOn((prev) => !prev);
  }

  useEffectOnUpdate({
    effectFunction: onToggle,
    deps: [on],
  });

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
