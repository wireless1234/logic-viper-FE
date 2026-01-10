import React from "react";
import Image from "next/image";
import { GrBug } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { MdSupportAgent } from "react-icons/md";
import { GiConversation } from "react-icons/gi";

const data = [
  {
    icon: <GrBug />,
    title: "Leaders You Can Trust",
    description:
      "Our leadership team, led by Founder/CEO Ziyaddeen Mohammed, boasts a wealth of experience in cybersecurity, IT services, and technological innovation. Each member brings a unique perspective, forging a collective wisdom that guides our every decision and strategy.",
  },
  {
    icon: <GiConversation />,
    title: "A Network of Expertise",
    description:
      "Beyond our core team, we have cultivated a network of trusted partners - the best minds in the cybersecurity and IT world. This deep well of expertise allows us to tap into unparalleled knowledge and resources, ensuring you receive the most advanced and effective solutions available.",
  },
  {
    icon: <MdSupportAgent />,
    title: "Continuous Learning and Growth",
    description:
      "We believe in perpetual evolution. Our team actively engages in ongoing training and professional development, ensuring we stay abreast of the latest trends, technologies, and threats. This constant learning translates into superior solutions and unwavering vigilance for your security.",
  },
  {
    icon: <ImProfile />,
    title: "Experience You Can Rely On",
    description:
      "Logic Viper Tech does not only provide services; but seasoned partnership with the wisdom and courage to navigate the ever-changing digital landscape. We stand behind our expertise, confident in our ability to build your digital fortress, brick by digital brick, protecting your business and empowering your success.",
  },
];

const ServiceCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
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
            <div className="  text-white font-semibold mb-5 transition-colors">
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
              <h3 className="text-[20px] font-serif mb-2.25">{item.title}</h3>
            </div>

            <p className=" text-[15px] text-white text-justify transition-colors font-rubik">
              {item.description}
            </p>
          </div>
          <span
            className="
      absolute
      bottom-0
      right-0
      w-0
      h-0
      border-l-40
      border-l-transparent
      border-t-40
      border-t-[#f9b2cb]
      rotate-90
      z-10
    "
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
