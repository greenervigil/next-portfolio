import { ProjectType } from "./project-type";
import { Testimonial } from "./testimonial-type";

export type UserType = {
  name: string;
  title: string;
  aboutText: string;
  greenfield: string;
  projects: ProjectType[];
  testimonials: Testimonial[];
}