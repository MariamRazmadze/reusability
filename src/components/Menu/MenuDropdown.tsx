import React from "react";
import Toggle from "../Toggle/index";

export default function MenuDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Toggle.On>
      <div className="absolute left-0 mt-[3px] bg-white border border-gray-500 rounded-md">
        {children}
      </div>
    </Toggle.On>
  );
}
