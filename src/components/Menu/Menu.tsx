import React from "react";
import useToggle from "../../hooks/useToggle";
import { createContext } from "react";

type MenuContextType = {
  open: boolean;
  toggleOpen: () => void;
};

const MenuContext = createContext<MenuContextType>({
  open: false,
  toggleOpen: () => {},
});

export default function Menu({
  children,
  onOpen,
}: {
  children: React.ReactNode;
  onOpen: () => void;
}) {
  const [open, toggleOpen] = useToggle({
    initialValue: true,
    onToggle: onOpen,
  });
  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      {open}
      <div className="relative inline-block" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
