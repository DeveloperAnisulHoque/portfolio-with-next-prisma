import { Button } from "@/components/ui/button";
import React from "react";
import { fetchActiveProjects } from "@/actions/actions";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Github, Link as LinkIcon, Pencil } from "lucide-react";
import CreateNewProjectModal from "@/components/custom/modals/createProjectModal";
import Link from "next/link";
import UpdateProjectByIdModal from "@/components/custom/modals/updateProjectByIdModal";
import { formatDate } from "@/lib/utils";
import EmptyDataSection from "@/components/custom/shared/EmptyDataSection";
import SoftDeleteProjectModal from "@/components/custom/modals/softDeleteProjectModal";

const page = async () => {
  const projects = await fetchActiveProjects();

  return (
    <div className="container space-y-3">
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="page-title">Your all projects</h1>
        <CreateNewProjectModal />
      </div>

      <div className="space-y-2">
        <Table>
          {/* <TableCaption>A list of your recent projects.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Links</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>createdAt</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-semibold">
                  {project.title?.slice(0, 40)}
                  {project.title?.length > 40 && "..."}
                </TableCell>
                <TableCell className="font-semibold  flex items-center  gap-2">
                  <Link href={project?.github}>
                    <Button
                      variant={"outline"}
                      className="px-2    bg-gray-900 text-white hover:bg-gray-700 hover:text-white "
                    >
                      <Github />
                    </Button>
                  </Link>
                  <Link href={project?.live}>
                    <Button
                      variant={"outline"}
                      className="px-2    bg-blue-500 text-white hover:bg-blue-400 hover:text-white "
                    >
                      <LinkIcon />
                    </Button>
                  </Link>
                </TableCell>
                <TableCell className="font-medium">{project?.type}</TableCell>
                <TableCell className="font-medium">
                  {" "}
                  {formatDate(project?.createdAt, "ll")}
                </TableCell>
                <TableCell className=" text-right font-semibold  flex items-center  justify-end gap-2">
                  <UpdateProjectByIdModal data={project} />
                  <SoftDeleteProjectModal id={project.id} />
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

        {projects?.length <= 0 ? (
          <EmptyDataSection />
        ) : (
          <>
            <hr />
            <Pagination className="justify-end ">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
