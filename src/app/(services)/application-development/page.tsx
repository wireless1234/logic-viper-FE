"use client";
import React, { useState } from "react";
import TableOfContents from "@/shared/table-of-content/table-of-content";

import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";
import {
  appDevToc,
  appDevelopmentAccordionData,
} from "@/lib/servicesData/appdevData";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionSectionProps {
  data: AccordionItem[];
  openIndex: number | null;
  toggleAccordion: (index: number) => void;
}

const AppDevelopment = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/privacy.webp')] bg-cover bg-no-repeat bg-center relative">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/app.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Application Development Solutions</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="">
              <TableOfContents tocData={appDevToc} />
            </div>
            <div className="space-y-5 px-3 font-rubik text-[15px]">
              {/* Effective Date */}
              <section id="elementor-toc__heading-anchor-0">
                <p>
                  At <strong>Logic Viper</strong>, our application development
                  solutions are designed to cater to the unique and evolving
                  needs of businesses across various industries. Whether you
                  need a brand-new application, a redesign of an existing
                  system, or a modern solution for outdated technologies, we
                  provide comprehensive services that combine innovation,
                  reliability, and business-driven results. Our approach goes
                  beyond simply delivering software—we build scalable, secure,
                  and future-ready applications that empower your business to
                  achieve its strategic goals.
                </p>
              </section>

              {/* Scope */}
              <section id="elementor-toc__heading-anchor-1">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Custom Software Solutions Tailored to Your Business
                </h2>
                <p>
                  Every business has its own unique processes, goals, and
                  challenges, which means off-the-shelf solutions are often not
                  enough. At Logic Viper, we specialize in creating custom
                  software solutions that are tailor-made to align with your
                  specific business needs. Our team takes the time to understand
                  your objectives, map out your workflows, and identify pain
                  points before diving into development.
                </p>
                <div className="w-full  mx-auto mt-5">
                  {appDevelopmentAccordionData
                    .slice(0, 3)
                    .map((item: AccordionItem, index: number) => (
                      <div key={index} className=" border-gray-300 ">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full border font-serif-display text-[10px] flex justify-between items-center py-2 px-3 focus:outline-none transition-colors"
                          aria-expanded={openIndex === index}
                        >
                          <span className="text-[15px] font-semibold">
                            {item.title}
                          </span>
                          <span className="text-xl">
                            {openIndex === index ? (
                              <FaMinus className="text-gray-700" />
                            ) : (
                              <FaPlus className="text-gray-700" />
                            )}
                          </span>
                        </button>

                        <div
                          className={`px-3 overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index
                              ? "max-h-96 py-3 border"
                              : "max-h-0"
                          }`}
                        >
                          <p className="text-gray-700 text-sm font-rubik">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                <p className="mt-5">
                  By working closely with your team, we ensure that every
                  solution fits your operational needs and accelerates your
                  business growth. The flexibility of our custom software allows
                  you to make real-time changes as your business expands or
                  shifts focus.
                </p>
                <div className="relative w-full aspect-video mt-5">
                  <Image
                    src="/images/software.webp"
                    alt="vulnerability"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </section>

              <section className="mt-5" id="elementor-toc__heading-anchor-2">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Comprehensive Application Design and Development
                </h2>
                <p>
                  At Logic Viper, we follow a holistic, end-to-end application
                  development process that covers every aspect of the product
                  lifecycle, from ideation to deployment. We don’t just build
                  applications; we craft digital experiences designed with
                  precision, functionality, and user engagement in mind.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {appDevelopmentAccordionData
                    .slice(3, 7)
                    .map((item, index) => (
                      <div key={index} className=" border-gray-300 ">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full border font-serif-display text-[10px] flex justify-between items-center py-2 px-3 focus:outline-none transition-colors"
                          aria-expanded={openIndex === index}
                        >
                          <span className="text-[15px] font-semibold">
                            {item.title}
                          </span>
                          <span className="text-xl">
                            {openIndex === index ? (
                              <FaMinus className="text-gray-700" />
                            ) : (
                              <FaPlus className="text-gray-700" />
                            )}
                          </span>
                        </button>

                        <div
                          className={`px-3 overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index
                              ? "max-h-96 py-3 border"
                              : "max-h-0"
                          }`}
                        >
                          <p className="text-gray-700 text-sm font-rubik">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                <p>
                  With a deep focus on combining functionality with aesthetics,
                  we create applications that are not only powerful but also
                  engaging, keeping users coming back.
                </p>
                <div className="relative w-full aspect-video mt-5">
                  <Image
                    src="/images/app-design.webp"
                    alt="vulnerability"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </section>

              {/* Information We Collect */}
              <section id="elementor-toc__heading-anchor-3">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Legacy System Modernization: Future-Proof Your Business
                </h2>
                <p>
                  As technology evolves, legacy systems often become a
                  bottleneck, limiting your company’s ability to innovate and
                  scale. Logic Viper offers specialized services in legacy
                  system modernization, helping you re-engineer outdated
                  platforms into modern, high-performance systems without
                  disrupting your existing operations.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {appDevelopmentAccordionData
                    .slice(7, 11)
                    .map((item, index) => (
                      <div key={index} className=" border-gray-300 ">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full border font-serif-display text-[10px] flex justify-between items-center py-2 px-3 focus:outline-none transition-colors"
                          aria-expanded={openIndex === index}
                        >
                          <span className="text-[15px] font-semibold">
                            {item.title}
                          </span>
                          <span className="text-xl">
                            {openIndex === index ? (
                              <FaMinus className="text-gray-700" />
                            ) : (
                              <FaPlus className="text-gray-700" />
                            )}
                          </span>
                        </button>

                        <div
                          className={`px-3 overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index
                              ? "max-h-96 py-3 border"
                              : "max-h-0"
                          }`}
                        >
                          <p className="text-gray-700 text-sm font-rubik">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                <p>
                  Our legacy system modernization services ensure that your
                  systems can keep pace with your growing business needs, saving
                  you the cost and headache of developing new systems from
                  scratch.
                </p>
                <div className="relative w-full aspect-video mt-5">
                  <Image
                    src="/images/legacy.webp"
                    alt="vulnerability"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </section>
              <section id="elementor-toc__heading-anchor-4">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Application Maintenance and Support
                </h2>
                <p>
                  Even after deployment, Logic Viper provides ongoing
                  application maintenance and support to ensure your systems
                  continue to operate at peak performance. We offer:
                </p>

                <div className="w-full mt-5 mb-3 mx-auto">
                  {appDevelopmentAccordionData
                    .slice(11, 14)
                    .map((item, index) => (
                      <div key={index} className=" border-gray-300 ">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full border font-serif-display text-[10px] flex justify-between items-center py-2 px-3 focus:outline-none transition-colors"
                          aria-expanded={openIndex === index}
                        >
                          <span className="text-[15px] font-semibold">
                            {item.title}
                          </span>
                          <span className="text-xl">
                            {openIndex === index ? (
                              <FaMinus className="text-gray-700" />
                            ) : (
                              <FaPlus className="text-gray-700" />
                            )}
                          </span>
                        </button>

                        <div
                          className={`px-3 overflow-hidden transition-all duration-300 ease-in-out ${
                            openIndex === index
                              ? "max-h-96 py-3 border"
                              : "max-h-0"
                          }`}
                        >
                          <p className="text-gray-700 text-sm font-rubik">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
                <p>
                  Our ongoing support allows your team to focus on strategic
                  initiatives while we manage the day-to-day operations of your
                  applications.
                </p>
              </section>
            </div>
          </div>
          <section id="elementor-toc__heading-anchor-5">
            <h2 className="text-[40px] text-center font-bold font-serif my-4">
              Application Development Resources
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
