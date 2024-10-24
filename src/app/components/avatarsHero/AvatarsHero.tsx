import { PlusIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

interface AvatarsHeroProps {
  className?: string;
}

export default function AvatarsHero({ className }: AvatarsHeroProps) {
  const avatarsClassname = "h-6 w-6 rounded-full border border-white shadow-lg";
  const t = useTranslations("hero_section");

  return (
    <span
      className={twMerge(
        className,
        "flex items-center justify-center md:justify-start text-sm gap-x-2"
      )}
    >
      {t("avatar_part1")}
      <div className="flex items-center -space-x-2.5">
        {["/cyril.jpeg", "/ilya.jpeg", "/romaric.jpeg"].map((src, index) => (
          <img key={index} src={`./${src}`} className={avatarsClassname} />
        ))}
        <div className="relative">
          <img src="/me.png" className={avatarsClassname} />
          <div className="absolute inset-0 bg-primaryColor bg-opacity-70 border border-white rounded-full flex items-center justify-center">
            <PlusIcon className="h-3 w-3 text-white stroke-2" />
          </div>
        </div>
      </div>
      {t("avatar_part2")}
    </span>
  );
}
