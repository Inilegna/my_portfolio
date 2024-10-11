"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { PhoneIcon } from "@heroicons/react/24/solid"; // Import de l'icône

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({
  children,
  className,
}: PrimaryButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={twMerge(
        className,
        "flex items-center justify-center space-x-2 rounded-full bg-primaryColor text-white py-2 pr-2"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-xs md:text-sm">{children}</span>
      {hovered ? (
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
          <PhoneIcon className="w-4 h-4 text-primaryColor" />
        </div>
      ) : (
        <img src="/me.png" alt="Avatar" className="w-6 h-6 rounded-full" />
      )}
    </button>
  );
}
