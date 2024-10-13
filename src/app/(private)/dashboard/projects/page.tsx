import { Button } from "@/components/ui/button";
import React from "react";
import { getAllProjects } from "@/actions/actions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Github, Link as LinkIcon, Pencil } from "lucide-react";
import DeleteProjectModal from "@/components/custom/modals/DeleteProjectModal";
import CreateProjectModal from "@/components/custom/modals/CreateProjectModal";
import Link from "next/link";

const page = async () => {
  const projects = await getAllProjects();

  return (
    <div className="container space-y-3">
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="page-title">Your all projects</h1>
        <CreateProjectModal />
      </div>

      <div>
        <Table>
          <TableCaption>A list of your recent projects.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#Id</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Links</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">
                  {project?.id?.slice(7, 12)}
                </TableCell>
                <TableCell className="font-semibold">
                  {project.title?.slice(0, 40)}
                  {project.title?.length > 40 && "..."}
                </TableCell>
                <TableCell className="font-semibold space-x-2">
                  <Link href={project?.github}>
                    <Button
                      variant={"outline"}
                      className="px-2    hover:bg-gray-900 hover:text-white "
                    >
                      <Github />
                    </Button>
                  </Link>
                  <Link href={project?.live}>
                    <Button
                      variant={"outline"}
                      className="px-2    hover:bg-blue-500 hover:text-white "
                    >
                      <LinkIcon />
                    </Button>
                  </Link>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant={"outline"}
                    className="px-2 text-blue-500 hover:bg-blue-500 hover:text-white "
                  >
                    <Pencil />
                  </Button>
                  <DeleteProjectModal id={project.id} />
                </TableCell>
              </TableRow>
            ))}{" "}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
        </Table>
      </div>
    </div>
  );
};

export default page;
