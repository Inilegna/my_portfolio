import { CONTENT } from "@/app/sections/projectsSection/projectsContent";
import React from "react";

export default function ScreensList() {
  const projectList = Object.values(CONTENT);
  return (
    <ul className="flex md:grow space-x-6 md:mt-12 ml-6 animate-infinite-scroll">
      {projectList.map((project, id) => (
        <li
          key={id}
          className="h-[45vh] md:h-full md:max-h-none aspect-[1.6] shadow-screens-illustration rounded-2xl"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </li>
      ))}
    </ul>
  );
}
