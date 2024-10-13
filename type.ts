// types.ts
import { ProjectType } from "@prisma/client"; // Adjust the import based on your project structure

export const projectTypes = [
  ProjectType.frontend,
  ProjectType.backend,
  ProjectType.fullstack,
] as const;
