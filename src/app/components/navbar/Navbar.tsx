import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const t = useTranslations("navbar");
  const links = t.raw("links");

  return (
    <nav className="w-fit fixed bottom-6 z-30 left-1/2 transform -translate-x-1/2 rounded-full h-16 pl-[14px] pr-6 flex items-center bg-primaryColor md:mx-0 md:transform-none md:bottom-12 md:right-12 md:left-auto navbar-breakpoint:right-[calc((100vw-1344px)/2)] shadow-navbar-shadow">
      <a
        className="cursor-pointer group"
        href="https://calendly.com/angelini-contactpro"
        target="_blank"
      >
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img
              src="/me.png"
              alt="Picture of me"
              className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <p className="text-white text-xs md:text-sm font-regular transition-colors duration-300 whitespace-nowrap">
            {t("button")}
          </p>
        </div>
      </a>
      <div className="h-6 bg-white/20 w-[1px] mx-4" />
      <div className="flex items-center space-x-6 overflow-hidden flex-nowrap">
        {Object.keys(links).map((key, index) => {
          const isLast = index === Object.keys(links).length - 1;
          return (
            <a
              key={key}
              href={links[key].href}
              target="_blank"
              className={isLast ? "hidden navbar-breakpoint-mobile:block" : ""}
            >
              <span className="flex items-center text-xs text-white/70 hover:text-white transition-all duration-300 cursor-pointer">
                {links[key].label}
                <ArrowUpRightIcon className="h-3 w-3 ml-2" />
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
