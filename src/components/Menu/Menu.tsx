import React, { useState } from "react";

type MenuContextType = {
  open: boolean;
  toggleMenu: () => void;
};

const MenuContext = React.createContext<MenuContextType>({
  open: false,
  toggleMenu: () => {},
});

export default function Menu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <MenuContext.Provider value={{ open, toggleMenu }}>
      <div className="relative inline-block" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
