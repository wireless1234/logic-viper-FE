import React from "react";
import Image from "next/image";
import { GrBug } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { MdSupportAgent } from "react-icons/md";
import { GiConversation } from "react-icons/gi";

const data = [
  {
    icon: <GrBug />,
    title: "Malware Detection Removal",
    description:
      "Keep your site secure with real-time malware scanning and swift removal. We neutralize threats before they can compromise your business operations.",
  },
  {
    icon: <GiConversation />,
    title: "Content Delivery Network",
    description:
      "Speed meets security. Our CDN guarantees fast, reliable content delivery while adding an extra layer of defense against cyber attacks.",
  },
  {
    icon: <MdSupportAgent />,
    title: "24/7 Cyber Security Support",
    description:
      "Vigilance around the clock. We monitor your site 24/7, instantly responding to any threats, so you can focus on growing your business with confidence.",
  },
  {
    icon: <ImProfile />,
    title: "Managed Web Application",
    description:
      "Continuous protection for your web applications. Our proactive monitoring and threat defense keep your online presence secure and dependable, ensuring you remain operational without interruptions.",
  },
];

const SecurityCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {data.map((item, i) => (
        <div
          key={i}
          className=" mx-3
      relative
      bg-[#140f14]
      p-7.5
      
      overflow-hidden
      h-fit
      group
    "
        >
          {/* Animated overlay (left → right) */}
          <span
            className="
        absolute inset-y-0 left-0
        w-0
        bg-linear-to-br from-[#75BDA7] to-[#3494BA]
        opacity-90
        transition-all duration-300 ease-out
        group-hover:w-full
        z-0
      "
          />

          {/* Foreground content */}
          <div className="relative z-20">
            <div className="  text-white font-semibold mb-1.5 transition-colors">
              <div
                className="
    mb-3.75
    text-2xl
    aspect-square
    size-12.5
    flex
    justify-center
    items-center
    rounded-full

    bg-linear-to-br from-[#75BDA7] to-[#3494BA]

    transition-colors duration-300
    transform-gpu

    group-hover:animate-[spinY3_0.9s_ease-in-out]
    group-hover:bg-linear-to-br
    group-hover:from-white
    group-hover:to-white
    group-hover:text-[#75BDA7]
  "
              >
                {item.icon}
              </div>
              <h3 className="text-[20px] font-serif">{item.title}</h3>
            </div>

            <p className=" text-[15px] text-white text-justify transition-colors font-rubik">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecurityCard;
