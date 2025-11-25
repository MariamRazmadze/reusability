import type { ReactNode } from "react";
import Button from "../Button";
import Toggle from "../Toggle/index";

export default function MenuButton({ children }: { children: ReactNode }) {
  return (
    <Toggle.Button>
      <Button className="bg-white">{children}</Button>
    </Toggle.Button>
  );
}
