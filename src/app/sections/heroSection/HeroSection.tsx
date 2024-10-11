import AvatarsHero from "@/app/components/avatarsHero/AvatarsHero";
import PrimaryButton from "@/app/components/buttons/PrimaryButton";
import React from "react";
import { twMerge } from "tailwind-merge";
import { CONTENT } from "../projectsSection/projectsContent";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  const h1Classname =
    "text-[1.75rem] md:text-[3.5rem] font-medium leading-none tracking-tight text-center md:text-start";
  const h1Gradient =
    "bg-gradient-to-b from-[#807B84] via-[#807B84] to-[#B3B0B5] text-transparent bg-clip-text";

  const projectList = Object.values(CONTENT);
  return (
    <section
      className={twMerge(
        className,
        "h-screen md:max-h-[800px] flex flex-col-reverse md:flex-col"
      )}
    >
      <div className="flex-grow flex space-x-6 md:mt-20 animate-infinite-scroll">
        {projectList.map((project, id) => (
          <div
            key={id}
            className="flex-grow max-h-[300px] md:max-h-none aspect-[1.6] shadow-lg rounded-2xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
      <div className="w-full mt-12 md:mt-14 md:mb-12">
        <AvatarsHero className="mb-3 md:mb-4 md:ml-[3px]" />
        <h1 className={h1Classname}>Elegant design. Fast code.</h1>
        <h1 className={twMerge(h1Classname, h1Gradient, "mt-2 md:mt-4")}>
          Guaranteed success.
        </h1>
      </div>
    </section>
  );
}
