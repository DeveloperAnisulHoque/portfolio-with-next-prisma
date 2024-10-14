"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../prisma";
import { uploadFile } from "@/lib/uploadFile";
import { headers } from "next/headers";

// Retrieve all non-trashed projects
export const fetchActiveProjects = async () => {
  return await prisma?.project?.findMany({
    where: {
      isTrashed: false,
    },
  });
};

// Retrieve all trashed projects
export const fetchTrashedProjects = async () => {
  return await prisma?.project?.findMany({
    where: {
      isTrashed: true,
    },
  });
};

// Create a new project
export const createNewProject = async (formData: FormData) => {
  try {
    const title = formData.get("title") as string | null;
    const type = formData.get("type") as string | null;
    const live = formData.get("live") as string | null;
    const github = formData.get("github") as string | null;
    const description = formData.get("description") as string | null;
    const file = formData.get("photo") as File | null;

    // Create the project in the database
    const data = await prisma.project.create({
      data: { title, live, github, description, type },
    });

    // Revalidate the cache for the projects list
    revalidatePath("/dashboard/projects");

    return data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error; // Rethrow the error after logging it
  }
};

// Update an existing project by its ID
export const updateProjectById = async (id: string, formData: FormData) => {
  try {
    const title = formData.get("title") as string | null;
    const type = formData.get("type") as string | null;
    const live = formData.get("live") as string | null;
    const github = formData.get("github") as string | null;
    const description = formData.get("description") as string | null;
    const file = formData.get("photo") as File | null;

    // Update the project in the database
    const data = await prisma.project.update({
      where: { id },
      data: { title, live, github, description, type },
    });

    // Revalidate the cache for the projects list
    revalidatePath("/dashboard/projects");

    return data;
  } catch (error) {
    console.error("Error updating project:", error);
    throw error; // Rethrow the error after logging it
  }
};

// Soft delete a project by setting its `isTrashed` flag to true
export const softDeleteProject = async (id: string) => {
  try {
    await prisma.project.update({
      where: { id },
      data: {
        isTrashed: true,
      },
    });

    // Revalidate the cache for the projects list
    revalidatePath("/dashboard/projects");
  } catch (error) {
    console.error("Error soft deleting project:", error);
    throw error; // Ensure proper error handling
  }
};

// Recover a soft-deleted project
export const restoreTrashedProject = async (formData: FormData) => {
  try {
    const id = formData.get("id") as string | null;

    await prisma.project.update({
      where: { id },
      data: {
        isTrashed: false,
      },
    });

    // Revalidate the cache for the trashed projects list
    revalidatePath("/dashboard/trash");
  } catch (error) {
    console.error("Error recovering project:", error);
    throw error; // Ensure proper error handling
  }
};

// Permanently delete a project
export const softpermanentlyDeleteProject = async (id: string) => {
  try {
    await prisma.project.delete({
      where: {
        id,
      },
    });

    // Revalidate the cache for the trashed projects list
    revalidatePath("/dashboard/trash");
  } catch (error) {
    console.error("Error hard deleting project:", error);
    throw error; // Ensure proper error handling
  }
};

// Record a visitor's user-agent
export const logVisitor = async () => {
  try {
    const headersList = headers();
    const userAgent = headersList.get("user-agent") || "Unknown User Agent";

    // Log the visitor's user-agent to the database
    await prisma.visitor.create({ data: { userAgent } });
  } catch (error) {
    console.error("Error recording visitor:", error);
    throw error; // Ensure proper error handling
  }
};

// Get the total count of visitors
export const countVisitors = async () => {
  try {
    return await prisma.visitor.count();
  } catch (error) {
    console.error("Error counting visitors:", error);
    throw error; // Ensure proper error handling
  }
};

// Get the total count of projects
export const countProjects = async () => {
  try {
    return await prisma.project.count();
  } catch (error) {
    console.error("Error counting projects:", error);
    throw error; // Ensure proper error handling
  }
};

// Get the total count of blogs
export const countBlogs = async () => {
  try {
    return await prisma.blog.count();
  } catch (error) {
    console.error("Error counting blogs:", error);
    throw error; // Ensure proper error handling
  }
};
