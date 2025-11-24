import type { ReactNode } from "react";
import Button from "../Button";
import { useContext } from "react";
import { MenuContext } from "./Menu";

export default function MenuButton({ children }: { children: ReactNode }) {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <Button className="bg-white" onClick={toggleMenu}>
      {children}
    </Button>
  );
}
