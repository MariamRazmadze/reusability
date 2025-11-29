import React from "react";
import { useContext } from "react";
import { MenuContext } from "./Menu";

export default function MenuDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open } = useContext(MenuContext);
  return (
    <>
      {open ? (
        <div className="absolute left-0 mt-[3px] bg-white border border-gray-500 rounded-md">
          {children}
        </div>
      ) : null}
    </>
  );
}
