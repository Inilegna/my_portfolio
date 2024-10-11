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
        className="w-full h-96 rounded-lg bg-primaryColor/5 cursor-pointer"
      ></div>
      <span className="flex items-center space-x-[6px] mt-3">
        <p className="text-primaryColor font-medium truncate">{name}</p>
        <p className="text-primaryColor font-medium">·</p>
        <Tag perso={perso} />
      </span>

      {/* ----- Modale ----- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed top-0 left-0 w-full h-12 flex justify-end items-center px-4 bg-transparent z-50">
            <button onClick={closeModal}>
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Modale */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 48 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3 }}
            className="relative bg-white w-full h-[calc(100vh-40px)] rounded-t-lg"
          >
            {/* Contenu de la modale */}
            <div className="pt-10 p-4 overflow-y-auto h-[calc(100vh-80px)] w-full max-w-7xl">
              <h2 className="text-3xl font-bold text-primaryColor mb-2">
                {name}
              </h2>
              <p className="text-gray-600 mb-4">{date}</p>
              <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
              <p className="text-gray-700">{description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
