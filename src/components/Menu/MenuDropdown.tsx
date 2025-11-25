import React from "react";

export default function MenuDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="absolute left-0 mt-[3px] bg-white border border-gray-500 rounded-md">
      {children}
    </div>
  );
}
