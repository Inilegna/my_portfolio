import AvatarsHero from "@/app/components/avatarsHero/AvatarsHero";
import React from "react";
import { twMerge } from "tailwind-merge";
import { CONTENT } from "../projectsSection/projectsContent";
import ScreensList from "@/app/components/screensList/ScreensList";
import { useTranslations } from "next-intl";
import Navbar from "@/app/components/Navbar/Navbar";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  const h1Classname =
    "text-[1.75rem] md:text-[3.5rem] font-medium leading-none tracking-tight text-center md:text-start";
  const h1Gradient =
    "bg-gradient-to-b from-[#807B84] via-[#807B84] to-[#B3B0B5] text-transparent bg-clip-text";

  const t = useTranslations("hero_section");

  return (
    <section
      className={twMerge(
        className,
        "h-screen md:max-h-[800px] justify-center flex-col-reverse md:flex-col"
      )}
    >
      <div className="w-full inline-flex flex-nowrap md:grow">
        <ScreensList />
        <ScreensList />
      </div>
      <div className="md:flex md:justify-between w-full md:mt-14 md:mb-12">
        <div className="mb-12 md:mb-0">
          <AvatarsHero className="mb-3 md:mb-4 md:ml-[3px]" />
          <h1 className={h1Classname}>{t("title1")}</h1>
          <h1 className={twMerge(h1Classname, h1Gradient, "mt-2 md:mt-4")}>
            {t("title2")}
          </h1>
        </div>
      </div>
      <Navbar />
    </section>
  );
}
