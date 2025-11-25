import React from "react";
import Toggle from "../Toggle/Toggle";

export default function Menu({
  children,
  onOpen,
}: {
  children: React.ReactNode;
  onOpen: () => void;
}) {
  return (
    <Toggle onToggle={onOpen}>
      <div className="relative inline-block" role="menu">
        {children}
      </div>
    </Toggle>
  );
}
