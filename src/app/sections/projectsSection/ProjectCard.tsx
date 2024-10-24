"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Tag from "@/app/components/tag/Tag";

interface ProjectCardProps {
  name: string;
  date: string;
  description: string;
  image: string;
  perso: boolean;
}

export default function ProjectCard({
  name,
  date,
  description,
  image,
  perso,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Empêche de scroller quand la modale est ouverte
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* ----- Project Card ----- */}
      <div
        onClick={openModal}
        className="w-full h-96 rounded-2xl bg-primaryColor/5 cursor-pointer"
      ></div>
      <span className="flex items-center space-x-[6px] mt-3">
        <p className="text-primaryColor font-medium truncate">{name}</p>
        <p className="text-primaryColor font-medium">·</p>
        <Tag perso={perso} />
      </span>
    </div>
  );
}
