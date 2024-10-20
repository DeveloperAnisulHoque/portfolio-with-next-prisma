"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChartNoAxesGantt, LogOut, Menu, User, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const LogoComponent = () => {
  return (
    <Link href={"/"} className="text-2xl font-bold font-mono ">
      AH
    </Link>
  );
};

const Header = () => {
  const [open, onOpenChange] = useState(false);
  const pathname = usePathname();

  const NavItems = [
    { title: "Home", link: "/" },
    { title: "Blogs", link: "/blogs" },
    { title: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    onOpenChange(false);
  }, [pathname]);

  return (
    <div className="w-full py-3 bg-white sticky top-0 left-0   z-20">
      <div className="container flex  justify-between gap-4 items-center">
        {LogoComponent()}
        <ul
          className="hidden lg:flex gap-5 items-center
        "
        >
          {NavItems.map((item, index: string) => {
            return (
              <li key={index}>
                <Link
                  href={item.link}
                  className={cn(
                    " text-gray-500  duration-300  hover:text-primary",
                    {
                      "font-semibold text-primary ": pathname == item.link,
                    }
                  )}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className="flex gap-3 items-center
"
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="ms-auto">
              <Button className="w-10 h-10 px-0 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 lg:h-6 lg:w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 me-5">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link href={"/profile"} className="flex  items-center w-full">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button onClick={() => onOpenChange(!open)}>
            {!open ? (
              <Menu className="lg:hidden" />
            ) : (
              <ChartNoAxesGantt className="lg:hidden" />
            )}
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side={"left"}
          className="w-fit p-8
        "
        >
          <p className="text-xl font-bold">Menu</p>
          <hr />
          <ul
            className="space-y-2 w-64 py-12 
        "
          >
            {NavItems.map((item, index: string) => {
              return (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={cn(
                      " text-gray-500  duration-300  hover:text-primary",
                      {
                        "font-semibold text-primary ": pathname == item.link,
                      }
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
