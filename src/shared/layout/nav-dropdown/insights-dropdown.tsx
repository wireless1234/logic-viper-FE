import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { PiArticleNyTimesLight, PiCalendarDots } from "react-icons/pi";
import { RiFilePaper2Line } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";

type Props = {};

const InsightsDropdown = (props: Props) => {
  return (
    <div className="lg:absolute max-h-[80vh] overflow-y-auto lg:overflow-hidden lg:top-20 lg:left-0 w-full border-b-2 border-[#7cc0ab] bg-[#0f0e1b] lg:opacity-0 lg:invisible group-hover:opacity-100 lg:group-hover:visible transition-all duration-300">
      <div className=" w-full text-white px-10  lg:px-32.5 pt-5 lg:pt-10 pb-10 lg:pb-25">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
          <div className=" group">
            <AiOutlinePlayCircle className="text-4xl scale-x-[-1] group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Video
            </h3>
            <p>
              Watch client stories and uncover the power of strategic IT
              solutions
            </p>
          </div>
          <div className="group">
            <PiArticleNyTimesLight className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Blog
            </h3>
            <p>
              Dive into the latest industry trends and cutting-edge IT insights
            </p>
          </div>
          <div className="group">
            <PiCalendarDots className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Webinars & Events
            </h3>
            <p>
              Join us in person or online to stay ahead in the world of IT
              innovation
            </p>
          </div>
          <div className="group">
            <RiFilePaper2Line className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Whitepapers & Data Sheets
            </h3>
            <p>
              Access expert-driven technical insights and valuable resources
            </p>
          </div>
          <div className="group">
            <GoShieldCheck className="text-3xl md:text-4xl group-hover:text-[#7cc0ab]" />
            <h3 className="font-serif font-semibold text-2xl mt-5 group-hover:text-[#7cc0ab]">
              Success Stories
            </h3>
            <p>
              Discover how we turn IT challenges into success for our clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsDropdown;
