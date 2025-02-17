import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <main className="font-work-sans">
            <Navbar/>
            <div className="flex w-full py-14">
                <Sidebar/>
                {children}
            </div>
        </main>
    )
}