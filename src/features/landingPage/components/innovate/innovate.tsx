import React from "react";
import Image from "next/image";
import SlidingTabs from "./innovatedata";
type Props = {};

const Innovate = (props: Props) => {
  return (
    <div className="bg-[#010C16]">
      <div className="max-w-330 mx-auto py-25 px-2.5">
        <div className="p-2.5">
          <div className="max-w-210 mx-auto text-center">
            <h2 className="mb-8 text-white text-[40px] leading-12 font-bold  font-serif">
              Innovative Electronic Protection for Office and Home Control
              Online
            </h2>
            <p className="text-[15px] text-white">
              At Logic Viper, our goal is to deliver top-quality security
              services by using trusted products from reputable vendors. We
              offer advanced electronic security solutions such as intercom
              systems, CCTV surveillance, and online control, tailored to
              protect both offices and homes.
            </p>
          </div>
          <div className="px-3 mt-10 lg:mt-5 grid lg:grid-cols-2 gap-7 lg:gap-0 ">
            <div className="lg:px-3 flex items-center">
              <SlidingTabs />
            </div>
            <div className="lg:px-3">
              <div className="relative lg:ml-3  aspect-546/478 ">
                <Image
                  src="/images/innovate.webp"
                  alt="innovate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovate;
