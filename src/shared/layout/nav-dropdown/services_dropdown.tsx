import React from "react";
import { TbCloudLock, TbCloudCog } from "react-icons/tb";
import { LuChartColumnIncreasing } from "react-icons/lu";
import { MdOutlinePeople, MdOutlineImportantDevices } from "react-icons/md";
import { AiOutlineDatabase } from "react-icons/ai";
type Props = {};

function ServicesDropdown({}: Props) {
  return (
    <div className="lg:absolute max-h-[77vh] overflow-y-auto lg:overflow-hidden lg:top-20 left-0 w-full border-b-2 border-[#7cc0ab] bg-[#0f0e1b] lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible transition-all duration-300">
      <div className=" w-full text-white px-10  lg:px-32.5 pt-5 lg:pt-10 pb-10 lg:pb-25">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
          <div className=" group">
            <TbCloudLock className="text-3xl md:text-4xl scale-x-[-1] group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Cyber Security Solutions
            </h3>
            <p>
              Advanced threat detection, incident response, & vulnerability
              management.
            </p>
          </div>
          <div className="group">
            <AiOutlineDatabase className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Managed Security Services
            </h3>
            <p>24/7 security monitoring, SIEM, and endpoint protection</p>
          </div>
          <div className="group">
            <LuChartColumnIncreasing className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Project Management
            </h3>
            <p>
              Efficient project planning, risk management, and resource
              optimization.
            </p>
          </div>
          <div className="group">
            <MdOutlinePeople className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              IT Consulting Service
            </h3>
            <p>
              Strategic technology planning, infrastructure assessment, and
              business continuity services
            </p>
          </div>
          <div className="group">
            <TbCloudCog className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Managed IT Solutions
            </h3>
            <p>
              Outsourcing, IT Support, Maintenance, Managed Services with
              Technical Expertise
            </p>
          </div>
          <div className="group">
            <MdOutlineImportantDevices className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Application Development
            </h3>
            <p>
              Custom software solutions tailored to meet clients' unique
              requirements built with robust frameworks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDropdown;
