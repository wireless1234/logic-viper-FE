"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RiPlayLargeFill } from "react-icons/ri";
import FeaturesCard from "./featuresCard";

type Props = {};

const Hero = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className=" bg-[url('/images/hero.webp')] bg-cover bg-no-repeat bg-center h-full min-h-screen relative">
      {/* <Image
        src="/images/hero.webp"
        fill
        alt="hero"
        className="object-cover h-full"
      /> */}
      <div className="  px-[19.5px] lg:px-8.75 xl:px-17.5 pb-16">
        <div className=" w-full z-20  max-w-330 mx-auto flex items-center  justify-items-start  lg:px-3">
          <div className="flex flex-col mt-40 xl:mt-56">
            <div className="flex flex-col lg:flex-row w-full items-center justify-between">
              <div className="text-white w-full  text-center lg:text-left max-w-175 ">
                <p className="mb-3 text-[18px] font-serif">
                  Leveraging the Latest in Cybersecurity for Unmatched
                  Protection
                </p>
                <h1 className="text-[35px] md:text-[40px] lg:text-[70px] font-serif xl:text-[80px] mb-5 lg:mb-6.25 font-bold xl:leading-21">
                  Advanced Cybersecurity Solutions For The Modern Era
                </h1>
                <p className="text-base mb-6.25 lg:mb-8.75">
                  Empowering businesses with robust cybersecurity measures
                  designed to outsmart even the most advanced threats. Your
                  data&apos;s safety is our top priority
                </p>
                <div className="flex items-center gap-6 w-fit mx-auto lg:mx-0 font-rubik">
                  <a
                    href="/contact-us"
                    className="relative px-7.5 py-2.5 overflow-hidden font-medium text-gray-600 bg-[#75bda7] shadow-inner group"
                  >
                    {/* Left fill */}
                    <span className="absolute top-0 left-0 h-full w-0 transition-all duration-300 delay-200 bg-black group-hover:w-1/2"></span>

                    {/* Right fill */}
                    <span className="absolute top-0 right-0 h-full w-0 transition-all duration-300 delay-200 bg-black group-hover:w-1/2"></span>

                    {/* Final overlay */}
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>

                    {/* Text */}
                    <span className="relative text-white transition-colors duration-300 delay-200 group-hover:text-white">
                      Get Started
                    </span>
                  </a>
                  <a
                    href="/about"
                    className="relative px-7.5 py-2.5 overflow-hidden font-medium text-gray-600 bg-white shadow-inner group"
                  >
                    {/* Left fill */}
                    <span className="absolute top-0 left-0 h-full w-0 transition-all duration-300 delay-200 bg-[#75bda7] group-hover:w-1/2"></span>

                    {/* Right fill */}
                    <span className="absolute top-0 right-0 h-full w-0 transition-all duration-300 delay-200 bg-[#75bda7] group-hover:w-1/2"></span>

                    {/* Final overlay */}
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#75bda7] opacity-0 group-hover:opacity-100"></span>

                    {/* Text */}
                    <span className="relative transition-colors duration-300 text-[#2a1f42] delay-200 group-hover:text-white">
                      Learn More
                    </span>
                  </a>
                </div>
              </div>
              <div className=" mx-auto mt-7">
                <button
                  type="button"
                  onClick={openModal}
                  className="relative flex items-center justify-center bg-[#7cc0ab] p-5"
                >
                  {/* Ping ring */}
                  <span className="absolute inset-0 bg-[#7cc0ab] animate-ping opacity-75" />

                  {/* Icon */}
                  <RiPlayLargeFill className="relative z-10 text-white text-3xl" />
                </button>
              </div>
            </div>

            <FeaturesCard />
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="relative w-full flex flex-col gap-2 justify-end max-w-4xl mx-4 lg:mx-0  overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="self-end w-fit text-white text-3xl z-20"
            >
              &times;
            </button>
            {/* YouTube iframe */}
            <div className="w-full aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/sdpxddDzXfE?autoplay=1"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
