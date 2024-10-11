import React from "react";
import { twMerge } from "tailwind-merge";
import { CONTENT } from "./projectsContent";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  className?: string;
}

export default function ProjectsSection({ className }: ProjectsSectionProps) {
  // Convertir l'objet CONTENT en tableau puis trier les projets
  const projectList = Object.values(CONTENT).sort((a, b) => {
    // Les projets où perso est false apparaîtront avant ceux où perso est true
    return a.perso === b.perso ? 0 : a.perso ? 1 : -1;
  });

  return (
    <section className={twMerge(className, "")}>
      <p className="text-secondaryColor text-xs font-medium tracking-widest text-center md:text-start mb-3 md:mb-2">
        PROJECTS
      </p>
      <h2 className="text-[1.375rem] md:text-[2.5rem] font-medium text-center md:text-start leading-tight md:mb-9">
        Bringing Ideas to Life: <br className="hidden md:block" />
        Explore My Work
      </h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
        {projectList.map((project, id) => (
          <ProjectCard
            key={id}
            name={project.name}
            date={project.date}
            description={project.description}
            image={project.image}
            perso={project.perso}
          />
        ))}
      </div>
    </section>
  );
}
