import React, { useEffect, useRef } from "react";
import { createContext } from "react";

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
  const firstRender = useRef(true);
  function toggle() {
    setOn((prev) => !prev);
  }
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      onToggle();
    }
  }, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
