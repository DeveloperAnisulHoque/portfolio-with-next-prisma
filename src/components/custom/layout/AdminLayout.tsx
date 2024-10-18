"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const AdminLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [open, onOpenChange] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    onOpenChange(false);
  }, [pathName]);

  return (
    <div className="flex ">
      <aside className=" hidden lg:block">
        <Sidebar />
      </aside>
      <main className="flex-1 overflow-x-auto ">
        <Topbar open={open} onOpenChange={onOpenChange} />
        <Sheet open={open} onOpenChange={onOpenChange}>
          <SheetContent side={"left"} className="w-fit p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>

        <div className=" py-6 ">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
