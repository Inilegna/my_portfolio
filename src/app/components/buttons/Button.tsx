"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface PrimaryButtonProps {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}

export default function PrimaryButton({
  children,
  variant = "primary",
  className,
}: PrimaryButtonProps) {
  return (
    <button
      className={twMerge(
        className,
        "flex items-center justify-center space-x-2 rounded-full h-12 py-2 transition-all duration-300 w-fit",
        variant === "primary"
          ? "pl-5 pr-1 bg-primaryColor text-white hover:bg-primaryColor/90"
          : "px-5 text-primaryColor bg-primaryColor/5 hover:bg-primaryColor/15"
      )}
    >
      <span className="text-sm leading-none flex items-center">{children}</span>
    </button>
  );
}
