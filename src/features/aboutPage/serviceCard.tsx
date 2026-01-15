import React from "react";
import { GiWorld } from "react-icons/gi";
import { RiUserStarLine } from "react-icons/ri";
import { LuFileSearch } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";

const differentiators = [
  {
    icon: <GiWorld />,
    title: "Proven Expertise",
    description:
      "With years of experience in the cybersecurity industry, our team has a deep understanding of the threats facing businesses today. We bring this expertise to every engagement, ensuring your security is in the best possible hands.",
  },
  {
    icon: <RiUserStarLine />,
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest cybersecurity technologies to deliver unparalleled protection. From AI-driven threat detection to automated response tools, our solutions are designed to keep your business secure in an increasingly complex threat landscape.",
  },
  {
    icon: <LuFileSearch />,
    title: "Customized Solutions",
    description:
      "We understand that every business is unique. That’s why we offer tailored cybersecurity solutions that align with your specific needs, ensuring maximum protection without unnecessary complexity.",
  },
  {
    icon: <MdSupportAgent />,
    title: "24/7 Support",
    description:
      "Cyber threats don’t take breaks, and neither do we. Our dedicated support team is available around the clock to assist you with any security concerns, providing peace of mind that your business is always protected.",
  },
  {
    icon: <FaRegHandshake />,
    title: "Client-Centric Approach",
    description:
      "At Logic Viper, our clients are at the heart of everything we do. We take the time to understand your business, your challenges, and your goals, delivering solutions that not only meet but exceed your expectations.",
  },
];

const ServiceCard = () => {
  return (
    <div className="grid md:grid-col-2 lg:grid-cols-3 gap-5">
      {differentiators.map((item, i) => (
        <div
          key={i}
          className="py-8.75 pl-5 pr-6 flex gap-5 hover:border hover:border-[#75bda7] group cursor-pointer"
        >
          <div className="text-[40px] pt-2 group-hover:text-[#75bda7]">
            {item.icon}
          </div>
          <div>
            <h3 className="mb-2 text-[#0f0e1b] text-[23px] font-semibold font-serif group-hover:text-[#75bda7]">
              {item.title}
            </h3>
            <p className="text-[15px] text-[#565656] font-rubik">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
