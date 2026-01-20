import React from "react";
import { TbCloudLock, TbCloudCog } from "react-icons/tb";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { MdOutlinePeople, MdOutlineImportantDevices } from "react-icons/md";
import { AiOutlineDatabase } from "react-icons/ai";
import Link from "next/link";

const serviceData = [
  {
    id: 1,
    title: "Cyber Security Solutions",
    description:
      "Advanced threat detection, incident response, & vulnerability management.",
    icon: <TbCloudLock className="scale-x-[-1]" />,
    link: "/cyber-security-solution",
  },
  {
    id: 2,
    title: "Managed Security Services",
    description: "24/7 security monitoring, SIEM, and endpoint protection",
    icon: <AiOutlineDatabase />,
    link: "/managed-security-services",
  },
  {
    id: 3,
    title: "Project Management",
    description:
      "Efficient project planning, risk management, and resource optimization.",
    icon: <LuChartColumnIncreasing />,
    link: "/project-management",
  },
  {
    id: 4,
    title: "IT Consulting Service",
    description:
      "Strategic technology planning, infrastructure assessment, and business continuity services",
    icon: <MdOutlinePeople />,
    link: "/it-consulting-service",
  },
  {
    id: 5,
    title: "Managed IT Solutions",
    description:
      "Outsourcing, IT Support, Maintenance, Managed Services with Technical Expertise",
    icon: <TbCloudCog />,
    link: "/managed-solutions",
  },
  {
    id: 6,
    title: "Application Development",
    description:
      "Custom software solutions tailored to meet clients' unique requirements built with robust frameworks",
    icon: <MdOutlineImportantDevices />,
    link: "/application-development",
  },
];

function ServicesDropdown() {
  return (
    <div className="lg:absolute max-h-[77vh] overflow-y-auto lg:overflow-hidden lg:top-20 left-0 w-full border-b-2 border-[#7cc0ab] bg-[#0f0e1b] lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible transition-all duration-300">
      <div className=" w-full text-white px-10  lg:px-32.5 pt-5 lg:pt-10 pb-10 lg:pb-25">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
          {serviceData.map((item) => (
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
}

export default ServicesDropdown;
