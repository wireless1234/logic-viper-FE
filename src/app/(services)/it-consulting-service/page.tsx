"use client";
import React, { useState } from "react";
import TableOfContents from "@/shared/table-of-content/table-of-content";
import { itAccordionData, itConsultingToc } from "@/lib/servicesData/itData";
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

const ItConsulting = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/privacy.webp')] bg-cover bg-no-repeat bg-center relative">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/consulting.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">IT Consulting Services</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="">
              <TableOfContents tocData={itConsultingToc} />
            </div>
            <div className="space-y-5 px-3 font-rubik text-[15px]">
              {/* Effective Date */}
              <section id="elementor-toc__heading-anchor-0">
                <p>
                  At <strong>Logic Viper</strong>, we offer comprehensive IT
                  consulting services that empower businesses to leverage
                  technology as a strategic enabler. Our expert consultants
                  partner with organizations to design and implement robust IT
                  solutions that drive growth, improve efficiency, and foster
                  innovation. We specialize in understanding the unique needs of
                  your business, providing you with a roadmap for success that
                  aligns technology investments with your business goals.
                  Whether you are looking to modernize your infrastructure,
                  improve business continuity, or adopt new technologies, Logic
                  Viper ensures that your IT strategy not only supports your
                  current operations but also prepares you for future
                  challenges. Below is an overview of our key IT consulting
                  offerings:
                </p>
              </section>

              {/* Scope */}
              <section id="elementor-toc__heading-anchor-1">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Strategic Technology Planning
                </h2>
                <p>
                  In an era where technology is at the core of every successful
                  business, strategic technology planning is essential for
                  maintaining a competitive edge. Logic Viper provides
                  businesses with forward-thinking, customized IT roadmaps that
                  are designed to meet both current and future business needs.
                  We conduct in-depth assessments of your business objectives,
                  market trends, and IT landscape to craft a strategic plan that
                  ensures your organization remains agile and competitive. Our
                  approach to strategic technology planning includes:
                </p>
                <div className="w-full  mx-auto mt-5">
                  {itAccordionData
                    .slice(0, 4)
                    .map((item: AccordionItem, index: number) => (
                      <div key={index} className=" border-gray-300 ">
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full border font-serif-display text-[10px] flex justify-between items-center py-2 px-3 focus:outline-none transition-colors"
                          aria-expanded={openIndex === index}
                        >
                          <span className="text-[15px] font-bold">
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
                <div className="relative w-full aspect-video mt-5">
                  <Image
                    src="/images/vulnerable.webp"
                    alt="vulnerability"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[25px] font-serif font-black mt-4">
                  Key Deliverables
                </h3>
                <ol className="text-[15px] ml-7 font-rubik space-y-2 list-decimal ">
                  <li>Comprehensive IT strategy documentation</li>
                  <li>Customized technology roadmaps</li>
                  <li>Projected ROI and cost analysis</li>
                  <li>Change management and training plans</li>
                </ol>
              </section>

              <section className="mt-5" id="elementor-toc__heading-anchor-2">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Infrastructure Assessment
                </h2>
                <p>
                  Your IT infrastructure is the foundation of your business’s
                  day-to-day operations. Our infrastructure assessment services
                  provide a holistic view of your current systems, identifying
                  potential risks, bottlenecks, and areas for improvement. At
                  Logic Viper, we believe that a resilient, high-performing
                  infrastructure is critical to operational success. We perform
                  rigorous assessments to evaluate your existing networks,
                  servers, hardware, and software, ensuring that your technology
                  environment is optimized for security, performance, and
                  reliability. Our process includes:
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {itAccordionData.slice(4, 9).map((item, index) => (
                    <div key={index} className=" border-gray-300 ">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full border font-serif-display text-[10px] flex justify-between items-center py-2 px-3 focus:outline-none transition-colors"
                        aria-expanded={openIndex === index}
                      >
                        <span className="text-[15px] font-bold">
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

                <div className="relative w-full aspect-video mt-5">
                  <Image
                    src="/images/consulting.webp"
                    alt="vulnerability"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[25px] font-serif font-black mt-4">
                  Key Deliverables
                </h3>
                <ol className="text-[15px] ml-7 font-rubik space-y-2 list-decimal ">
                  <li>Detailed infrastructure audit reports</li>
                  <li>Performance improvement recommendations</li>
                  <li>Security gap analysis and remediation plans</li>
                  <li>Cloud migration strategy (if applicable)</li>
                </ol>
              </section>

              {/* Information We Collect */}
              <section id="elementor-toc__heading-anchor-3">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Business Continuity Services
                </h2>
                <p>
                  Business continuity is a critical element of any robust IT
                  strategy. The ability to maintain operations in the face of
                  disruptions—whether from natural disasters, cyberattacks, or
                  internal system failures—can make or break an organization.
                  Logic Viper’s business continuity services focus on building
                  resilient systems and processes that ensure your business can
                  quickly recover from unexpected events and continue to operate
                  without significant loss. Our business continuity services
                  include:
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {itAccordionData.slice(7, 14).map((item, index) => (
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

                <div className="relative w-full aspect-video mt-5">
                  <Image
                    src="/images/cyber-risk.webp"
                    alt="vulnerability"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[25px] font-serif font-black mt-4">
                  Key Deliverables
                </h3>
                <ol className="text-[15px] ml-7 font-rubik space-y-2 list-decimal ">
                  <li>
                    Tailored disaster recovery and business continuity plans
                  </li>
                  <li>Backup and data restoration strategies</li>
                  <li>
                    Implementation of redundant systems and failover protocols
                  </li>
                  <li>
                    Regular testing and validation of business continuity plans
                  </li>
                </ol>
              </section>
            </div>
          </div>
          <section id="elementor-toc__heading-anchor-4">
            <h2 className="text-[40px] text-center font-bold font-serif my-4">
              IT Consultation Resources
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ItConsulting;
