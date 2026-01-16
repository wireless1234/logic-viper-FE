import React from "react";

import { LuShieldCheck } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import { BiSolidLock } from "react-icons/bi";
import { LuBadge } from "react-icons/lu";

const data = [
  {
    icon: <GoShieldCheck />,
    title: "Security",
    description:
      "Stay ahead of cyber threats with Logic Viper's cutting-edge security. We protect your business around the clock, so you can focus on what matters.",
  },
  {
    icon: <BiSolidLock />,
    title: "Privacy",
    description:
      "Your data, your rules. With Logic Viper, your information stays private and secure-always under your control.",
  },
  {
    icon: <LuBadge />,
    title: "Industry Certified",
    description:
      "Partner with a cybersecurity leader that's certified and trusted by industry giants. Logic Viper delivers excellence you can rely on.",
  },
];

const FeaturesCard = () => {
  return (
    <div className="grid lg:grid-cols-3 mt-8.75 lg:mt-28 lg:gap-5">
      {data.map((item, i) => (
        <div
          key={i}
          className="
      relative
      bg-[#140f14]
      px-5
      py-8
      lg:border-r-3 lg:border-[#7cc0ab]
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
            <div className="flex items-center gap-3 text-[40px] text-[#7cc0ab] font-serif font-semibold mb-5 group-hover:text-white transition-colors">
              {item.icon}
              <p className="text-2xl">{item.title}</p>
            </div>

            <p className="lg:w-[90%] text-[15px] text-white text-justify transition-colors font-rubik">
              {item.description}
            </p>
          </div>

          {/* Watermark icon */}
          <div
            className="
        pointer-events-none
        absolute bottom-2 right-2
        text-7xl
        text-[#292529]
        opacity-50
        z-10
      "
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesCard;
