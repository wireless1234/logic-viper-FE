"use client";

import { useState } from "react";
import { services } from "@/lib/about-serviceData";

const ServicesAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full max-w-3xl mx-auto font-rubik text-[15px] "
      role="region"
      aria-label="Cybersecurity Services Accordion"
    >
      {services.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="    overflow-hidden">
            {/* Header */}
            <button
              onClick={() => toggle(index)}
              className="
                w-full
                flex
                items-center
                gap-5
                p-2.5
               
                text-base
                font-serif-display
                text-left
                rounded-md
                text-black
                border
                focus:text-[#75bda7]
                font-semibold
                focus:outline-none
                focus-visible:ring
                focus-visible:ring-[#75BDA7]
              "
              aria-expanded={isOpen}
            >
              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-8
                  h-8
                  rounded-full
                 
                 
                  transition-transform
                  duration-300
                "
              >
                {isOpen ? "-" : "+"}
              </span>
              <span className="text-base">{item.title}</span>
            </button>

            {/* Content */}
            <div
              className={`
                grid
                transition-all
                duration-400
                border
                rounded-md
              
                ease-in-out
                ${
                  isOpen
                    ? "grid-rows-[1fr] p-4 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
              `}
            >
              <div className="overflow-hidden">
                <div className=" text-black text-[15px] leading-relaxed">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesAccordion;
