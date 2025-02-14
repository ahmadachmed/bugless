"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SidebarMenuProps {
  menu: { title: string };
  children?: React.ReactNode;  // Untuk menampung dropdown child elements
}

const SidebarMenu = ({ menu, children }: SidebarMenuProps) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-2">
      {/* Parent Menu */}
      <button
        className="flex items-center px-4 py-2 space-x-2 text-left hover:bg-[#1E2028] rounded-md"
        onClick={() => setOpen(!open)}
      >
        <h3>{menu.title}</h3>
        <ChevronDown className={`w-4 h-auto transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Content */}
      {open && children && (
        <div className="ml-4 mt-2 space-y-2">{children}</div>
      )}
    </div>
  );
};

export default SidebarMenu;
