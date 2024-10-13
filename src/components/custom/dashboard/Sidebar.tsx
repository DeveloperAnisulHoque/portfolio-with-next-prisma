"use client";
import { cn } from "@/lib/utils";
import {
  LayoutDashboardIcon,
  Home,
  FolderKanban,
  TrashIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="w-64 h-screen bg-primary">
      {/* <|===============| Logo |==============|> */}
      <div className="flex gap-3 items-center  text-secondary p-4">
        <LayoutDashboardIcon />
        <span className="text-2xl font-bold ">Dashboard</span>
      </div>
      {/* <|===============| NavItems |==============|> */}
      <div className="py-11 text-secondary space-y-2">
        <Link
          href={"/dashboard"}
          className={cn(
            "flex gap-3 items-center px-4  py-2  hover:bg-slate-700 hover:text-slate-200 text-white text-sm",
            { "bg-slate-700 text-slate-200": pathName == "/dashboard" }
          )}
        >
          <Home />
          Home
        </Link>
        <Link
          href={"/dashboard/projects"}
          className={cn(
            "flex gap-3 items-center px-4  py-2  hover:bg-slate-700 hover:text-slate-200 text-white text-sm",
            { "bg-slate-700 text-slate-200": pathName == "/dashboard/projects" }
          )}
        >
          <FolderKanban />
          Projects
        </Link>
        <Link
          href={"/dashboard/trash"}
          className={cn(
            "flex gap-3 items-center px-4  py-2  hover:bg-slate-700 hover:text-slate-200 text-white text-sm",
            { "bg-slate-700 text-slate-200": pathName == "/dashboard/trash" }
          )}
        >
          <TrashIcon />
          Trash
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
