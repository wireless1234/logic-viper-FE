import React from "react";
import { TbBriefcase } from "react-icons/tb";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FaRegNewspaper } from "react-icons/fa";
import { BsChatQuote } from "react-icons/bs";
type Props = {};

const CompanyDropdown = (props: Props) => {
  return (
    <div className="lg:absolute lg:top-20 lg:left-0 w-full max-h-[80vh] overflow-y-auto lg:overflow-hidden bg-[#0f0e1b] border-b-2 border-[#7cc0ab] lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible transition-all duration-300">
      <div className=" w-full text-white px-10  lg:px-32.5 pt-5 lg:pt-10 pb-10 lg:pb-25">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
          <div className=" group">
            <BsChatQuote className=" text-3xl md:text-4xl scale-x-[-1] group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              About Us
            </h3>
            <p>Learn more about Logic Viper, our mission, and values</p>
          </div>
          <div className="group">
            <TbBriefcase className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Careers
            </h3>
            <p>Explore exciting career opportunities with Logic Viper</p>
          </div>
          <div className="group">
            <FaRegNewspaper className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              News & Awards
            </h3>
            <p>Stay updated on the latest industry news and our achievements</p>
          </div>
          <div className="group">
            <TiLocationArrowOutline className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Locations
            </h3>
            <p>Discover our global presence and office locations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDropdown;
