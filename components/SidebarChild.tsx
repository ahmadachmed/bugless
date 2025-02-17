import Link from "next/link";
import React from "react";

interface SidebarChildProps {
  url: string;
  items: 
    {
      id?: number;
      title: string;
      slug?: string
    }[];
}

const SidebarChild = ({ url, items }: SidebarChildProps) => {
  return (
    <div>
      {items.map((item) => (
        <Link href={item.slug ? `${url}/${item.slug}` : url} passHref
          key={item.id}
          className="px-4 py-2 w-fit text-gray-300 hover:bg-[#1E2028] rounded-md flex flex-col"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default SidebarChild;
