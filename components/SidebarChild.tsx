import React from "react";

interface SidebarChildProps {
  items: { id: number; title: string }[];
}

const SidebarChild = ({ items }: SidebarChildProps) => {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <p key={item.id} className="px-4 py-2 w-fit text-gray-300 hover:bg-[#1E2028] rounded-md">{item.title}</p>
      ))}
    </div>
  );
};

export default SidebarChild;