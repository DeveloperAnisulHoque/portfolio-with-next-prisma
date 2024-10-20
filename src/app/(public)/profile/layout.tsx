"use client";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Calendar, Ellipsis, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navItems = [
  { name: "My Account", icon: User, url: "/profile" },
  { name: "Events", icon: Calendar, url: "/profile/events" },
];

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <div className="container-md py-14 space-y-3">
      <div className="flex gap-3 justify-between items-center flex-wrap">
        <h3 className="text-2xl font-bold">Account</h3>
        <Button className="px-0 w-9 h-8   lg:hidden" variant={"outline"}>
          <Ellipsis />
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="w-52  space-y-1 hidden lg:block">
          {navItems?.map((item, index: number) => {
            return (
              <Link
                key={index}
                href={item.url}
                className={cn(
                  "flex gap-3 items-center  rounded px-4 py-2  hover:bg-slate-50 duration-150",
                  {
                    "bg-white font-semibold": pathName == item.url,
                  }
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.name}{" "}
              </Link>
            );
          })}
        </div>
        <div className="flex-1 p-4 rounded-md border bg-white ">{children}</div>{" "}
      </div>
    </div>
  );
}
