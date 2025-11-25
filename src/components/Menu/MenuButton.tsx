import type { ReactNode } from "react";
import Button from "../Button";

export default function MenuButton({ children }: { children: ReactNode }) {
  return <Button className="bg-white">{children}</Button>;
}
