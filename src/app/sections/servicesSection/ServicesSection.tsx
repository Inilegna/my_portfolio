"use client";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import ServiceRow from "./ServiceRow";
import { useTranslations } from "next-intl";

interface ServicesSectionProps {
  className?: string;
}

export default function ServicesSection({ className }: ServicesSectionProps) {
  const t = useTranslations("services_section");

  const services = t.raw("services");

  const serviceImages = {
    service1: "/images/ux-ui-design.jpg",
    service2: "/images/front-end-development.jpg",
    service3: "/images/design-to-code.jpg",
  };

  const [openService, setOpenService] = useState<string>("service1");
  const [currentImage, setCurrentImage] = useState<string>(
    serviceImages["service1"]
  );
  const handleToggle = (serviceKey: "service1" | "service2" | "service3") => {
    if (openService === serviceKey) return;
    setOpenService(serviceKey);
    setCurrentImage(serviceImages[serviceKey]);
  };

  return (
    <section className={twMerge(className, "")}>
      <p className="text-secondaryColor text-[0.625rem] md:text-xs font-medium tracking-widest text-center md:text-start mb-3 md:mb-4">
        {t("subheader")}
      </p>
      <h2 className="text-[1.375rem] md:text-[2.5rem] font-medium text-center md:text-start leading-tight md:max-w-2xl">
        {t("title")}
      </h2>
      <p className="text-pTextColor text-xs md:text-sm text-center md:text-start md:max-w-[500px] mt-3 md:mt-4 mb-10 md:mb-[74px]">
        {t("subtitle")}
      </p>

      <div className="w-full grid md:grid-cols-2 md:gap-x-20">
        {/* Liste des services à gauche */}
        <div className="w-full md:-mt-8">
          {Object.keys(services).map((serviceKey) => (
            <ServiceRow
              key={serviceKey}
              title={services[serviceKey].name}
              description={services[serviceKey].description}
              tags={Object.values(services[serviceKey].tags)}
              isOpen={openService === serviceKey}
              onToggle={() =>
                handleToggle(serviceKey as "service1" | "service2" | "service3")
              }
              image={currentImage}
            />
          ))}
        </div>
        {/* Image à droite */}
        <div className="w-full bg-primaryColor rounded-2xl h-[500px] hidden md:block">
          <img
            src={currentImage || "/default-image.jpg"}
            alt="Service Image"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
