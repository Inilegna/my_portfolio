import { twMerge } from "tailwind-merge";
import HeroSection from "./sections/heroSection/HeroSection";
import ServicesSection from "./sections/servicesSection/ServicesSection";
import ProjectsSection from "./sections/projectsSection/ProjectsSection";
import CtaSection from "./sections/ctaSection/CtaSection";

export default function Home() {
  const sectionClassname =
    "flex flex-col w-full max-w-[1440px] mx-auto px-6 lg:px-12 text-primaryColor";
  return (
    <main className="w-full mx-auto overflow-hidden relative">
      <HeroSection className={twMerge(sectionClassname)} />
      <ProjectsSection
        className={twMerge(
          sectionClassname,
          "flex flex-col justify-center md:my-40"
        )}
      />
      <ServicesSection className={twMerge(sectionClassname, "md:my-40")} />
      <CtaSection className={twMerge(sectionClassname)} />
    </main>
  );
}
