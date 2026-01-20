"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { projectManagementAccordionData } from "@/lib/servicesData/projectData";

const ProjectManagement = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/gov.webp')] bg-cover bg-no-repeat bg-center relative">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/project.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Project Management</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20 gap-x-16">
            <div className="flex items-center">
              <div className="space-y-3.5 text-sm font-rubik">
                <h2 className="text-[30px] leading-13 font-serif font-extrabold">
                  Comprehensive Project Management Solutions
                </h2>
                <p>
                  At Logic Viper, we understand that successful project
                  management is the backbone of operational excellence. Our
                  project management solutions are designed to ensure that every
                  phase of your project, from initiation to completion, is
                  seamlessly executed with precision, agility, and measurable
                  results. Our approach encompasses efficient project planning,
                  comprehensive risk management, and strategic resource
                  optimization to deliver unmatched value. Here’s how Logic
                  Viper drives your projects to success:
                </p>
                <h2 className="text-[30px] leading-13 font-serif font-extrabold">
                  Efficient Project Planning
                </h2>
                <p>
                  We place a strong emphasis on meticulous project planning to
                  set the foundation for successful execution. Logic Viper's
                  project management experts work closely with your team to
                  define clear objectives, milestones, and deliverables. We
                  leverage cutting-edge project management tools and techniques
                  to:
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {projectManagementAccordionData
                    .slice(0, 3)
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
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[612px] aspect-[612/692] rounded overflow-hidden">
                <Image
                  src="/images/planning.webp"
                  alt="gov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 505px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[612px] aspect-[612/692] rounded overflow-hidden">
                <Image
                  src="/images/risk.webp"
                  alt="gov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 505px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="space-y-3.5 text-sm font-rubik pl-12">
                <h2 className="text-[30px] leading-13 font-serif font-extrabold">
                  Risk Management
                </h2>
                <p>
                  Proactive risk management is central to the success of any
                  project. At Logic Viper, we deploy a systematic risk
                  assessment approach to identify, evaluate, and mitigate
                  potential issues before they escalate. Our risk management
                  framework includes:
                </p>

                <div className="w-full mt-5 mb-3 mx-auto">
                  {projectManagementAccordionData
                    .slice(3, 6)
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

                <h2 className="text-[30px] leading-13 font-serif font-extrabold">
                  Resource Optimization
                </h2>
                <p>
                  Optimizing resources is essential for achieving maximum
                  efficiency and productivity. Logic Viper utilizes a
                  data-driven approach to ensure the right resources are
                  allocated to the right tasks, reducing waste and increasing
                  output. We provide:
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {projectManagementAccordionData
                    .slice(6, 9)
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
                <div className="mt-6 border-2 border-black w-10"></div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik pl-12">
                <h2 className="text-[30px] leading-13 font-serif font-extrabold">
                  Quality Assurance and Testing
                </h2>

                <p>
                  Delivering a high-quality product is at the heart of our
                  project management approach. At Logic Viper, we incorporate
                  rigorous quality assurance (QA) processes and thorough testing
                  protocols throughout the project lifecycle to ensure superior
                  outcomes:
                </p>

                <div className="w-full mt-5 mb-3 mx-auto">
                  {projectManagementAccordionData
                    .slice(9, 12)
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

                <h2 className="text-[30px] leading-13 font-serif font-extrabold">
                  Continuous Improvement and Adaptability
                </h2>

                <p>
                  At Logic Viper, we are committed to continuously enhancing our
                  processes. We ensure that our project management approach
                  evolves with industry trends, project feedback, and best
                  practices:
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {projectManagementAccordionData
                    .slice(12, 14)
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
                <div className="mt-6 border-2 border-black w-10"></div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/vulnerable.webp"
                  alt="gov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 505px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[50px] font-bold mt-25 text-center">
          Project Management Resources
        </h3>
      </div>
    </div>
  );
};

export default ProjectManagement;
