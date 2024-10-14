import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, RotateCcw, Trash, Trash2 } from "lucide-react";
import { fetchTrashedProjects, restoreTrashedProject } from "@/actions/actions";
import { formatDate } from "@/lib/utils";
import HardDeleteProjectModal from "@/components/custom/modals/HardDeleteProjectModal";
import EmptyDataSection from "@/components/custom/shared/EmptyDataSection";

const page = async () => {
  const projects = await fetchTrashedProjects();
  return (
    <div className="container space-y-3">
      <h1 className="page-title">Trashed memory</h1>
      {projects?.map((item) => {
        return (
          <Card
            key={item?.id}
            className="p-4 space-y-4 rounded-lg shadow-sm border border-slate-200"
          >
            <div className="flex gap-2 text-slate-700 items-center">
              <Clock className="w-4 h-4" />
              <time className="text-xs" dateTime="2024-10-14">
                {formatDate(item?.updatedAt, "ll")}
              </time>
            </div>

            <div className="flex gap-4 flex-wrap items-center">
              <h4 className="text-lg font-semibold">{item?.title}</h4>
              <div className="flex gap-2 ms-auto ">
                <form action={restoreTrashedProject}>
                  <input className="hidden" value={item?.id} name="id" />
                  <Button variant="outline" className="  space-x-2 ">
                    <RotateCcw className="" />
                    <span className="hidden md:block">Restore From Trash</span>
                  </Button>
                </form>
                <HardDeleteProjectModal id={item?.id} />
              </div>
            </div>

            <p className="text-sm text-slate-500">{item?.type}</p>
          </Card>
        );
      })}
      {projects?.length <= 0 && <EmptyDataSection />}{" "}
    </div>
  );
};

export default page;
