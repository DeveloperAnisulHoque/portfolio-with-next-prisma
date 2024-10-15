import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const page = () => {
  return (
    <div className="container space-y-3">
      {" "}
      <h1 className="page-title">Landing UI</h1>
      <div className="p-4  bg-slate-100 rounded  border border-slate-200">
        <p>Service Section</p>
        <Label>Service 1</Label>
        <Input type="text" />
      </div>
    </div>
  );
};

export default page;
