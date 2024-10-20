import React from "react";
import { ChartNoAxesGantt, LogOut, Menu, User, User2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Topbar = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (i: boolean) => void;
}) => {
  return (
    <div className=" flex  py-2 px-4 lg:px-11 items-center  bg-secondary  shadow gap-3  ">
      {" "}
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="ms-auto">
          <Button className="px-2 h-fit" variant="outline">
            <User2 className=" h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52 me-5">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link href={"/profile"} className="flex  items-center">
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
  );
};

export default Topbar;
