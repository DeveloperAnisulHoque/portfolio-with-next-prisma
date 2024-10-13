"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../prisma";
import { uploadFile } from "@/lib/uploadFile";

export const getAllProjects = async () => {
  return await prisma?.project?.findMany({
    where: {
      isTrashed: false,
    },
  });
};
export const getAllTrashedProjects = async () => {
  return await prisma?.project?.findMany({
    where: {
      isTrashed: true,
    },
  });
};
export const createProject = async (formData: FormData) => {
  try {
    const title = formData.get("title");
    const type = formData.get("type");
    const live = formData.get("live");
    const github = formData.get("github");
    const description = formData.get("description");
    const file = formData.get("photo") as File;

    // Assuming prisma is already set up
    const data = await prisma.project.create({
      data: { title, live, github, description, type },
    });

    // Invalidate the cache for the project list after creation
    revalidatePath("/dashboard/projects");

    return data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error; // Ensure that the error is thrown after logging it
  }
};
export const updateProject = async (id: string, formData: FormData) => {
  try {
    const title = formData.get("title");
    const type = formData.get("type");
    const live = formData.get("live");
    const github = formData.get("github");
    const description = formData.get("description");
    const file = formData.get("photo") as File;

    // Assuming prisma is already set up
    const data = await prisma.project.update({
      where: { id },
      data: { title, live, github, description, type },
    });

    // Invalidate the cache for the project list after creation
    revalidatePath("/dashboard/projects");

    return data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error; // Ensure that the error is thrown after logging it
  }
};
export const deleteProject = async (id: string) => {
  await prisma.project.update({
    where: { id },
    data: {
      isTrashed: true,
    },
  });
  revalidatePath("/dashboard/projects");
};
export const recoverDeleteProject = async (formData: FormData) => {
  const id = formData.get("id");

  await prisma.project.update({
    where: { id },
    data: {
      isTrashed: false,
    },
  });
  revalidatePath("/dashboard/trash");
};
export const deleteProjectHard = async (id: string) => {
  await prisma.project.delete({
    where: {
      id,
    },
  });
  revalidatePath("/dashboard/trash");
};
