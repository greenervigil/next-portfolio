import { ProjectType } from "./project-type";

export type UserType = {
  name: string;
  title: string;
  aboutText: string;
  greenfield: string;
  projects: ProjectType[];
}