"use client";

import React from "react";
import Image from "next/image";
import image1 from "@/assets/graphics/1.webp";
import image2 from "@/assets/graphics/2.webp";
import image3 from "@/assets/graphics/3.webp";

const imageMap: {
  [key: string]: { src: any; width: number; height: number; alt: string };
} = {
  "1.webp": {
    src: image1,
    width: 150,
    height: 150,
    alt: "Four circles graphic",
  },
  "2.webp": {
    src: image2,
    width: 150,
    height: 150,
    alt: "Nine squares graphic",
  },
  "3.webp": {
    src: image3,
    width: 150,
    height: 150,
    alt: "Nested squares graphic",
  },
};

interface FeatureCardProps {
  backgroundColor: string;
  graphicFilename: string;
  graphicAlt: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  backgroundColor,
  graphicFilename,
  graphicAlt,
  title,
  description,
}) => {
  const graphicInfo = imageMap[graphicFilename];

  const cardClasses = `
    relative
    rounded-lg p-6 md:p-8 lg:p-10
    flex flex-col justify-between items-start
    text-left
    border border-gray-700 shadow-lg
    min-h-[350px] md:min-h-[400px] lg:min-h-[450px]
    transition-transform duration-300 ease-in-out
    overflow-hidden
    ${backgroundColor}
  `;

  const titleStyles =
    "text-2xl lg:text-3xl font-bold leading-tight mb-4 text-black dark:text-white";
  const descriptionStyles =
    "text-base lg:text-lg leading-relaxed text-gray-800 dark:text-gray-300";

  return (
    <div className={cardClasses}>
      <div className="w-full h-32 md:h-40 lg:h-48 flex items-center justify-center mb-6">
        {graphicInfo ? (
          <Image
            src={graphicInfo.src}
            alt={graphicAlt}
            width={graphicInfo.width}
            height={graphicInfo.height}
            objectFit="contain"
            className="w-auto h-auto max-w-full max-h-full"
          />
        ) : (
          <div className="text-red-500">
            Image not found for: {graphicFilename}
          </div>
        )}
      </div>

      <div>
        <h3 className={titleStyles}>{title}</h3>
        <p className={descriptionStyles}>{description}</p>
      </div>
    </div>
  );
};
