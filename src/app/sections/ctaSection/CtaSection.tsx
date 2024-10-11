import React from "react";
import { twMerge } from "tailwind-merge";

interface CtaSectionProps {
  className?: string;
}

export default function CtaSection({ className }: CtaSectionProps) {
  return (
    <section className={twMerge(className, "lg:py-12")}>
      <div className=" relative overflow-hidden w-full md:h-[600px] bg-ctaBackground rounded-2xl p-12 flex flex-col justify-center">
        <p className="text-white/50 text-xs font-medium tracking-widest text-center md:text-start mb-3 md:mb-2">
          CONTACT ME
        </p>
        <h2 className="text-[1.375rem] md:text-[2.5rem] font-medium text-center md:text-start text-white leading-tight">
          Your Project Starts Here!
        </h2>
        <p className="text-white/80 text-xs md:text-sm text-center md:text-start md:max-w-[400px] mt-3 md:mt-4">
          Have a project that needs intuitive design and seamless development?
          Whether you’re starting from scratch or need help refining your
          vision, I’m here to bring your project to life.
        </p>
        <img src="/rayLight.svg" className="absolute h-full" />
      </div>
    </section>
  );
}
