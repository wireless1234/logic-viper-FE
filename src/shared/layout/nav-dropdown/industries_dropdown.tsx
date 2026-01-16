import React from "react";
import { BsBank2 } from "react-icons/bs";
import { IoMdCar } from "react-icons/io";
import { PiBuildingsLight, PiCarProfileLight } from "react-icons/pi";
import { LiaRocketSolid } from "react-icons/lia";
import {
  FaGraduationCap,
  FaCalculator,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { GiCaduceus } from "react-icons/gi";
import Link from "next/link";

export const industryData = [
  {
    id: 1,
    link: "/government-and-social-sector-mdas",
    label: "Government and Social Sector (MDAS)",
    icon: <BsBank2 />,
  },
  {
    id: 3,
    link: "/travel-hospitality",
    label: "Travel & Hospitality",
    icon: <PiCarProfileLight className="scale-x-[-1]" />,
  },
  {
    id: 7,
    link: "/financial-service",
    label: "Financial Services",
    icon: <PiBuildingsLight />,
  },
  { id: 5, link: "/retail", label: "Retail", icon: <FaCalculator /> },
  {
    id: 4,
    link: "/insurance",
    label: "Insurance",
    icon: <FaHandHoldingUsd />,
  },
  { id: 2, link: "/automotive", label: "Automotive", icon: <IoMdCar /> },
  {
    id: 9,
    link: "/healthcare",
    label: "Healthcare",
    icon: <GiCaduceus />,
  },
  {
    id: 6,
    link: "/educational-and-knowledge-services",
    label: "Educational & Knowledge Services",
    icon: <FaGraduationCap />,
  },
  { id: 8, link: "/fmcg-mdas", label: "FMCG", icon: <LiaRocketSolid /> },
  {
    id: 10,
    link: "/transportation-logistics",
    label: "Transportation Logistics",
    icon: <FiTruck />,
  },
];

function IndustriesDropdown() {
  return (
    <div className="lg:absolute lg:top-20 lg:left-0 w-full border-b-2 border-[#7cc0ab] max-h-[73vh] overflow-y-auto lg:overflow-hidden bg-[#0f0e1b] lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible transition-all duration-300">
      <div className=" w-full text-white px-10 lg:px-32.5 pt-5 lg:pt-10 pb-10 lg:pb-25">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
          {industryData.map((item) => (
            <Link key={item.id} href={item.link}>
              <div className="group/menu flex flex-col items-start gap-2">
                <div className="text-3xl md:text-4xl group-hover/menu:text-[#7cc0ab] transition-colors duration-200">
                  {item.icon}
                </div>
                <h3 className="font-serif font-semibold text-2xl group-hover/menu:text-[#7cc0ab] transition-colors duration-200">
                  {item.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IndustriesDropdown;
