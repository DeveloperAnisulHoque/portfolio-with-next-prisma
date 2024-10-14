"use client";
import { cn } from "@/lib/utils";
import {
  LayoutDashboardIcon,
  Home,
  FolderKanban,
  TrashIcon,
  BookCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Array of nav links
const navLinks = [
  {
    href: "/dashboard",
    label: "Home",
    icon: Home,
  },
  {
    href: "/dashboard/projects",
    label: "Projects",
    icon: FolderKanban,
  },
  {
    href: "/dashboard/blogs",
    label: "Blogs",
    icon: BookCheck,
  },
  {
    href: "/dashboard/trash",
    label: "Trash",
    icon: TrashIcon,
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="w-64 h-screen bg-primary text-white shadow-lg flex flex-col">
      {/* <|===============| Logo |==============|> */}
      <div className="flex items-center p-6 border-b border-slate-700">
        <LayoutDashboardIcon className="text-3xl" />
        <span className="ml-3 text-2xl font-semibold tracking-wide">
          Dashboard
        </span>
      </div>
      {/* <|===============| NavItems |==============|> */}
      <div className="flex flex-col py-6 space-y-1">
        {navLinks.map((navItem) => {
          const Icon = navItem.icon;
          const isActive = pathName === navItem.href;

          return (
            <Link
              key={navItem.href}
              href={navItem.href}
              className={cn(
                "flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-200 ms-2 ",
                {
                  "bg-slate-800 text-white border-r-4 border-r-indigo-500":
                    isActive,
                  "text-slate-400 hover:bg-slate-700 hover:text-white":
                    !isActive,
                }
              )}
            >
              <Icon
                className={cn("h-5 w-5", { "text-indigo-500": isActive })}
              />
              {navItem.label}
            </Link>
          );
        })}
      </div>
      {/* <|===============| Footer |==============|> */}
      <div className="mt-auto px-6 py-4 text-xs text-slate-500">
        © 2024 Anisul hoque
      </div>
    </div>
  );
};

export default Sidebar;
