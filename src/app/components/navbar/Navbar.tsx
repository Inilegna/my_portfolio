import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const linksClassname =
    "text-pTextColor text-xs font-light hover:font-normal hover:text-primaryColor transition-colors duration-200";
  const spanClassname = "flex items-center space-x-2";
  const iconClassname = "h-[14px] w-[14px]";

  return (
    <div
      className="w-full bg-white bg-opacity-80 backdrop-blur-md fixed inset-x-0 z-30 h-fit mx-auto md:py-3 md:pr-3 md:pl-6
        bottom-6 md:top-0 md:bottom-0 flex items-center justify-start max-w-[1440px] px-6 lg:px-12 space-x-12 md:space-x-20"
    >
      {/* ----- Icons to other sites & CTA ----- */}
      <div className="flex items-center">
        <div className="flex items-center space-x-6">
          <Link href="" className={linksClassname}>
            <span className={spanClassname}>
              <p>Twitter/X</p> <ArrowUpRightIcon className={iconClassname} />
            </span>
          </Link>
          <Link href="" className={linksClassname}>
            <span className={spanClassname}>
              <p>Dribble</p> <ArrowUpRightIcon className={iconClassname} />
            </span>
          </Link>
          <Link href="" className={linksClassname}>
            <span className={spanClassname}>
              <p>LinkedIn</p>
              <ArrowUpRightIcon className={iconClassname} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
