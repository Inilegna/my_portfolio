import React from "react";
import { twMerge } from "tailwind-merge";

interface TagProps {
  perso?: boolean;
}

export default function Tag({ perso }: TagProps) {
  const persoBackground = "bg-white border border-";
  const proBackground =
    " bg-gradient-to-tr from-[#F5E8FD] via-[#FAE8FD] via-33% via-[#FCE8FA] via-66% to-[#FDE7F9] border border-[#F4DFFB]";
  return (
    <div
      className={twMerge(
        "rounded-full px-[10px] py-1 leading-none mt-[3px]",
        perso ? persoBackground : proBackground
      )}
    >
      <p
        className={twMerge(
          "text-xs font-medium",
          perso ? "text-pTextColor" : "text-[#AC65C8]"
        )}
      >
        {perso ? "Perso" : "Client"}
      </p>
    </div>
  );
}
