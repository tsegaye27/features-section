"use client";

import React from "react";
import { FeatureCard } from "./FeatureCard";
import { Button } from "./ui/button";
import featureData from "@/data/featureSection.json";
import { PlusSquaresIcon } from "./graphics/PlusSquaresIcon";

export const FeatureSection: React.FC = () => {
  const buttonConfig = {
    name: "LEARN MORE ABOUT CODEX",
    link: "#how-we-work",
  };

  return (
    <section className="bg-black py-16 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[90rem]">
        {featureData.map((item) => (
          <FeatureCard
            key={item.id}
            backgroundColor={item.backgroundColor}
            graphicFilename={item.graphicFilename}
            graphicAlt={item.graphicAlt}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <div className="mt-16">
        <Button
          className="
            inline-flex p-0 bg-transparent border-none shadow-lg
            hover:opacity-90 transition-opacity duration-200
          "
          onClick={() => {
            if (buttonConfig.link) window.location.href = buttonConfig.link;
          }}
        >
          <div className="flex">
            <div
              className="flex 
                rounded-l-md bg-[#DFF757]
                px-3 py-3
              "
            >
              <div className="flex items-center justify-center border-2 border-[#dff757] rounded-md bg-black p-3">
                <PlusSquaresIcon className="h-4 w-4 text-[#DFF757]" />
              </div>
            </div>

            <div
              className="
                rounded-r-md bg-[#DFF757]
                px-6 py-3 flex items-center
              "
            >
              <span className="text-black uppercase font-semibold text-sm tracking-wider">
                {buttonConfig.name}
              </span>
            </div>
          </div>
        </Button>
      </div>
    </section>
  );
};
