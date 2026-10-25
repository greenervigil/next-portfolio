import { ProjectType } from "./project-type";
import { Testimonial } from "./testimonial-type";

export type UserType = {
  name: string;
  title: string;
  aboutText: string;
  /** GreenField Dev, the studio Daniel runs: the one place its name and links live. */
  greenfield: {
    name: string;
    url: string;
    engineeringUrl: string;
  };
  projects: ProjectType[];
  testimonials: Testimonial[];
}