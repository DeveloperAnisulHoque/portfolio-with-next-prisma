import { Button } from "@/components/ui/button";
import { LayoutPanelLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="container py-24">
      <Link href={"/dashboard"}>
        <Button className="flex items-center justify-center gap-3">
          <LayoutPanelLeft />
          Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default Page;
