import React from "react";

interface SidebarChildProps {
  items: { id: number; title: string }[];
}

const SidebarChild = ({ items }: SidebarChildProps) => {
  return (
    <div className="px-5 space-y-1">
      {items.map((item) => (
        <p key={item.id} className="text-gray-300 hover:text-white">{item.title}</p>
      ))}
    </div>
  );
};

export default SidebarChild;