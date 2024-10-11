import React from "react";
import { twMerge } from "tailwind-merge";

interface ServicesSectionProps {
  className?: string;
}

export default function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section className={twMerge(className, "")}>
      <p className="text-secondaryColor text-xs font-medium tracking-widest text-center md:text-start mb-3 md:mb-2">
        SERVICES
      </p>
      <h2 className="text-[1.375rem] md:text-[2.5rem] font-medium text-center md:text-start leading-tight">
        Your Partner in Making Your <br className="hidden md:block" /> Products
        Shine
      </h2>
      <p className="text-pTextColor text-xs md:text-sm text-center md:text-start md:max-w-[500px] mt-3 md:mt-4 md:mb-10">
        I offer a wide range of services from UX-UI design to front-end
        development, I help businesses create impactful and engaging online
        experiences.
      </p>
      <div className="w-full grid md:grid-cols-2 md:gap-x-6">
        <div className="w-full bg-primaryColor rounded-2xl h-[500px]"></div>
        <div className="w-full"></div>
      </div>
    </section>
  );
}
