import React from "react";

export default function Menu({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block" role="menu">
      {children}
    </div>
  );
}
