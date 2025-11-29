import React from "react";
import { createContext } from "react";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";
import useToggle from "../../hooks/useToggle";

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
  const [on, toggle] = useToggle();

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
