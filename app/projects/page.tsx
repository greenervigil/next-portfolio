"use client";

import {
  BentoGrid,
  BentoGridItem,
} from "../../components/bento-grid/bento-grid";
import React, { Suspense } from "react";

import Card2 from "../../components/card/card-2";
import Container from "../../components/container/container";
import Image from "next/image";
import { NextPage } from "next";
import { state } from "../../context/state";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const Projects: NextPage = () => {
  const [filterData, setFilterData] = React.useState(state.projects);
  const [active, setActive] = React.useState<string[]>([]);
  const tech: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "Bootstrap",
    "Wordpress",
    "Tailwind CSS",
    "Builder.io",
    "Algolia",
    "Jest",
    "React Testing Library",
    "Storybook",
    "MUI",
    "Storyblok",
    "NextSEO",
    "React Magma",
    "Gatsby",
    "Shadcn/ui",
    "turborepo",
    "Lerna",
    "Headless Wordpress",
  ];

  const handleFilter = (e: any) => {
    e.preventDefault();
    setActive([]);
    if (e.target.innerHTML === "All") {
      setFilterData(state.projects);
    } else {
      setFilterData(
        state.projects.filter((project) =>
          project.tech.includes(e.target.innerHTML)
        )
      );
      setActive(e.target.innerHTML);
    }
  };

  return (
    <div className="">
      <Container>
        <h1 className="font-mono text-center text-6xl mt-16">Projects</h1>
        <section className="text-center m-5">
          <p className="m-5">Select an option to filter:</p>
          <button
            className="pointer text-sm rounded-2xl m-1 py-2 px-4 border border-yellow-500 hover:bg-yellow-100 hover:text-slate-900 shadow-2xl shadow-yellow-500"
            onClick={handleFilter}
          >
            All
          </button>
          {tech.map((item) => {
            return (
              <button
                key={item}
                className={`pointer text-sm rounded-2xl m-1 py-2 px-4 border border-yellow-500 hover:bg-yellow-100 hover:text-slate-900 shadow-2xl shadow-yellow-500 ${
                  active.includes(item) ? "bg-teal-600" : ""
                }`}
                onClick={handleFilter}
              >
                {item}
              </button>
            );
          })}
        </section>
      </Container>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {filterData.map((project, i) => {
          return (
            <BentoGridItem
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              title={project.title}
              description={project.description}
              key={project.id}
              header={
                <Suspense fallback={<Skeleton />}>
                  <Image
                    src={project.imageSrc}
                    alt={project.imageDescription}
                    className="my-0 mx-auto rounded-lg"
                    width={300}
                    height={300}
                  />
                </Suspense>
              }
            />
          );
        })}
      </BentoGrid>
    </div>
  );
};

export default Projects;
