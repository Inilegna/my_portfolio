import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface ServiceRowProps {
  title: string;
  description: string;
  tags: string[];
  isOpen: boolean;
  image: string;
  onToggle: () => void;
}

export default function ServiceRow({
  title,
  description,
  isOpen,
  tags,
  image,
  onToggle,
}: ServiceRowProps) {
  return (
    <motion.div
      onClick={onToggle}
      className={twMerge(
        "w-full max-w-2xl text-primaryColor bg-white pt-6 pb-8 border-b border-grayColor cursor-pointer transition-colors duration-300"
      )}
      initial={{ height: "auto" }}
      animate={{
        backgroundColor: isOpen ? "#color-active" : "#color-inactive",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between space-x-6">
        <p
          className={twMerge(
            "text-base md:text-xl leading-none",
            isOpen ? "font-medium" : "text-secondaryColor font-regular"
          )}
        >
          {title}
        </p>
        <ChevronDownIcon
          className={`h-6 w-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0 text-secondaryColor"
          }`}
        />
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden md:max-w-lg"
      >
        <p className="text-pTextColor text-sm mt-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-7">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primaryColor text-white px-3 py-2 leading-none rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="w-full bg-primaryColor rounded-2xl h-96 mt-7 md:hidden">
          <img
            src={image}
            alt="Service Image"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
