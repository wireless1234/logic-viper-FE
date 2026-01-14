import React from "react";
import { TbBriefcase } from "react-icons/tb";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FaRegNewspaper } from "react-icons/fa";
import { BsChatQuote } from "react-icons/bs";
import Link from "next/link";

const menuData = [
  {
    id: 1,
    title: "About Us",
    description: "Learn more about Logic Viper, our mission, and values",
    icon: <BsChatQuote className="scale-x-[-1]" />,
    link: "#",
  },
  {
    id: 2,
    title: "Careers",
    description: "Explore exciting career opportunities with Logic Viper",
    icon: <TbBriefcase />,
    link: "#",
  },
  {
    id: 3,
    title: "News & Awards",
    description:
      "Stay updated on the latest industry news and our achievements",
    icon: <FaRegNewspaper />,
    link: "#",
  },
  {
    id: 4,
    title: "Locations",
    description: "Discover our global presence and office locations",
    icon: <TiLocationArrowOutline />,
    link: "#",
  },
];

const CompanyDropdown = () => {
  return (
    <div className="lg:absolute lg:top-20 lg:left-0 w-full max-h-[80vh] overflow-y-auto lg:overflow-hidden bg-[#0f0e1b] border-b-2 border-[#7cc0ab] lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible transition-all duration-300">
      <div className=" w-full text-white px-10  lg:px-32.5 pt-5 lg:pt-10 pb-10 lg:pb-25">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
          {menuData.map((item) => (
            <Link key={item.id} href={item.link}>
              <div className="group/menu">
                <div className="text-3xl md:text-4xl group-hover/menu:text-[#7cc0ab]">
                  {item.icon}
                </div>
                <h3 className="font-serif font-semibold text-2xl mt-5 group-hover/menu:text-[#7cc0ab]">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDropdown;
