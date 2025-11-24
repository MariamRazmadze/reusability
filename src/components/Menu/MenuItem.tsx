import React from "react";

export default function MenuItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-gray-600 px-3 py-3 cursor-pointer min-w-[100px] flex justify-center items-center select-none hover:bg-gray-100 not-last:border-b not-last:border-gray-500 first:rounded-t-md last:rounded-b-md">
      {children}
    </div>
  );
}
