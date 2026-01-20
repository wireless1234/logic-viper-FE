"use client";
import React, { useState } from "react";
import TableOfContents from "@/shared/table-of-content/table-of-content";
import { securityAccordionData } from "@/lib/servicesData/manageData";
import {
  managedSolutionToc,
  manageSecurityAccordionData,
} from "@/lib/servicesData/managedSolutionData";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionSectionProps {
  data: AccordionItem[];
  openIndex: number | null;
  toggleAccordion: (index: number) => void;
}

const ManagedSolution = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/privacy.webp')] bg-cover bg-no-repeat bg-center relative">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/managed.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Managed IT Solutions</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="space-y-5 px-3 font-rubik text-[15px]">
              {/* Effective Date */}
              <section id="elementor-toc__heading-anchor-0">
                <p>
                  At Logic Viper, we provide reliable, forward-thinking managed
                  IT solutions that allow businesses to thrive in an
                  ever-evolving digital landscape. From robust IT support to
                  proactive maintenance and seamless system management, our
                  services are designed to empower your operations with optimal
                  efficiency, security, and scalability.
                </p>
              </section>

              {/* Scope */}
              <section id="elementor-toc__heading-anchor-1">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Outsourcing Products and Equipment
                </h2>
                <p>
                  Optimizing your IT environment often requires access to the
                  latest and most reliable technology. Our product and equipment
                  outsourcing services give you a competitive edge by providing
                  access to cutting-edge hardware and technology solutions
                  without the hassle of managing procurement, logistics, and
                  maintenance.
                </p>
                <div className="w-full  mx-auto mt-5">
                  {manageSecurityAccordionData
                    .slice(0, 5)
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
              </section>

              <section className="mt-5" id="elementor-toc__heading-anchor-2">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  IT Support Services
                </h2>
                <p>
                  Ensuring that your systems are running smoothly is at the
                  heart of everything we do. Our IT support services are
                  designed to quickly address any technical issues and minimize
                  downtime, allowing you to focus on what matters most: your
                  business.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {manageSecurityAccordionData
                    .slice(5, 9)
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
                <div className="relative w-full aspect-video">
                  <Image
                    src="/images/vulnerable.webp"
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
                  Proactive Maintenance & Optimization
                </h2>
                <p>
                  Prevention is always better than cure when it comes to your IT
                  systems. Our proactive maintenance services ensure your
                  infrastructure remains secure, up-to-date, and performing at
                  its best. This keeps your business moving forward without any
                  unexpected slowdowns or technical setbacks.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {manageSecurityAccordionData
                    .slice(9, 13)
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
              </section>
              <section id="elementor-toc__heading-anchor-4">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Comprehensive Managed IT Services
                </h2>
                <p>
                  Our comprehensive managed services cover every aspect of your
                  IT environment, from network performance to cloud management,
                  ensuring your infrastructure remains efficient, secure, and
                  ready to scale.
                </p>

                <div className="w-full mt-5 mb-3 mx-auto">
                  {manageSecurityAccordionData
                    .slice(13, 17)
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
                <div className="relative w-full aspect-video">
                  <Image
                    src="/images/cyber-risk.webp"
                    alt="vulnerability"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-fit"
                  />
                </div>
              </section>

              {/* How We Use Your Information */}
              <section id="elementor-toc__heading-anchor-5">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Technical Expertise & Project Execution
                </h2>
                <p>
                  We don't just manage your IT environment; we drive it forward.
                  Our technical teams bring deep industry knowledge and hands-on
                  experience to ensure that your systems, infrastructure, and
                  processes are optimized for peak performance.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {manageSecurityAccordionData
                    .slice(17, 21)
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
              </section>
            </div>
            <div className="">
              <TableOfContents tocData={managedSolutionToc} />
            </div>
          </div>
          <section id="elementor-toc__heading-anchor-6">
            <h2 className="text-[40px] text-center font-bold font-serif my-4">
              Managed IT Solutions Resources
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ManagedSolution;
