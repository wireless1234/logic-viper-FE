import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { PiArticleNyTimesLight, PiCalendarDots } from "react-icons/pi";
import { RiFilePaper2Line } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import Link from "next/link";

const insightData = [
  {
    id: 1,
    title: "Video",
    description:
      "Watch client stories and uncover the power of strategic IT solutions",
    icon: <AiOutlinePlayCircle className="scale-x-[-1]" />,
    link: "#",
  },
  {
    id: 2,
    title: "Blog",
    description:
      "Dive into the latest industry trends and cutting-edge IT insights",
    icon: <PiArticleNyTimesLight />,
    link: "#",
  },
  {
    id: 3,
    title: "Webinars & Events",
    description:
      "Join us in person or online to stay ahead in the world of IT innovation",
    icon: <PiCalendarDots />,
    link: "#",
  },
  {
    id: 4,
    title: "Whitepapers & Data Sheets",
    description:
      "Access expert-driven technical insights and valuable resources",
    icon: <RiFilePaper2Line />,
    link: "#",
  },
  {
    id: 5,
    title: "Success Stories",
    description:
      "Discover how we turn IT challenges into success for our clients",
    icon: <GoShieldCheck />,
    link: "#",
  },
];

const InsightsDropdown = () => {
  return (
    <div className="lg:absolute max-h-[80vh] overflow-y-auto lg:overflow-hidden lg:top-20 lg:left-0 w-full border-b-2 border-[#7cc0ab] bg-[#0f0e1b] lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible transition-all duration-300">
      <div className=" w-full text-white px-10  lg:px-32.5 pt-5 lg:pt-10 pb-10 lg:pb-25">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
          {insightData.map((item) => (
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

export default InsightsDropdown;
