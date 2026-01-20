"use client";
import React, { useState } from "react";
import TableOfContents from "@/shared/table-of-content/table-of-content";
import {
  cybersecuritySolutionToc,
  accordionData,
} from "@/lib/servicesData/cyberData";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";

const CybersecuritySolution = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/privacy.webp')] bg-cover bg-no-repeat bg-center relative">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/cyber.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Cybersecurity Solution</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="space-y-5 px-3 font-rubik text-[15px]">
              {/* Effective Date */}
              <section id="elementor-toc__heading-anchor-0">
                <p>
                  At Logic Viper, we understand that cybersecurity is not just
                  about monitoring and responding to threats; it’s about
                  creating a resilient defense that anticipates and prevents
                  risks, while ensuring your business operations remain secure.
                  Our Cybersecurity Solutions focus on safeguarding your
                  enterprise by deploying advanced threat detection systems,
                  orchestrating rapid incident response, and conducting thorough
                  vulnerability management. We provide proactive, strategic
                  security measures to ensure your business is protected against
                  both current and emerging cyber threats.
                </p>
              </section>

              {/* Scope */}
              <section id="elementor-toc__heading-anchor-1">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Advanced Threat Detection
                </h2>
                <p>
                  In today&apos;s threat landscape, sophisticated cyberattacks
                  are becoming more frequent, and traditional security defenses
                  often fail to detect them. At Logic Viper, we go beyond
                  conventional defenses with our Advanced Threat Detection
                  solution, utilizing a multi-layered approach to identify and
                  stop complex, hard-to-detect threats before they can harm your
                  business.
                </p>
              </section>
              <section
                id="elementor-toc__heading-anchor-2"
                className="w-full  mx-auto"
              >
                {accordionData.slice(0, 3).map((item, index) => (
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
                        openIndex === index ? "max-h-96 py-3 border" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-700 text-sm font-rubik">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </section>

              {/* Information We Collect */}
              <section id="elementor-toc__heading-anchor-3">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Incident Response
                </h2>
                <p>
                  When a security incident occurs, speed and precision are
                  essential. Logic Viper&apos;s Incident Response services are
                  designed to handle cyber incidents swiftly and efficiently,
                  ensuring that the damage is minimized, and your systems are
                  quickly restored to full operation. Our incident response team
                  acts as your first line of defense, ensuring a smooth,
                  coordinated response to security breaches.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {accordionData.slice(3, 7).map((item, index) => (
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

                <section id="elementor-toc__heading-anchor-4">
                  <h2 className="text-[30px] font-bold font-serif my-4">
                    Vulnerability Management
                  </h2>
                  <p>
                    ulnerabilities in your software, applications, or
                    infrastructure can be easily exploited by cybercriminals if
                    not identified and remediated. Our Vulnerability Management
                    service is designed to provide continuous protection by
                    identifying, assessing, and eliminating weaknesses within
                    your systems.
                  </p>
                  <div className="w-full mt-5 mb-3 mx-auto">
                    {accordionData.slice(7, 11).map((item, index) => (
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
              </section>

              {/* How We Use Your Information */}
              <section id="elementor-toc__heading-anchor-5">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Security Posture Assessment
                </h2>
                <p>
                  A strong cybersecurity posture is critical for defending
                  against cyber threats. Logic Viper’s Security Posture
                  Assessment provides a thorough evaluation of your
                  organization’s security readiness, identifying areas of
                  strength as well as weaknesses that may expose your business
                  to attacks.
                </p>

                <div className="w-full mt-5 mb-3 mx-auto">
                  {accordionData.slice(11, 15).map((item, index) => (
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

              <section id="elementor-toc__heading-anchor-6">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Data Protection and Encryption
                </h2>
                <p>
                  Data is one of the most valuable assets for any organization,
                  and protecting it is paramount. Our Data Protection and
                  Encryption solutions ensure that sensitive information,
                  whether at rest or in transit, is fully protected against
                  unauthorized access and breaches.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {accordionData.slice(15, 19).map((item, index) => (
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

              <section id="elementor-toc__heading-anchor-7">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Cyber Risk Assessments
                </h2>
                <p>
                  Understanding and managing cyber risks is crucial for
                  preventing business disruption and safeguarding against
                  financial losses. Logic Viper’s Cyber Risk Assessment
                  evaluates your current cybersecurity risks and helps you build
                  a strategy to mitigate them.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {accordionData.slice(19, 23).map((item, index) => (
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
                    className="object-cover"
                  />
                </div>
              </section>

              <section id="elementor-toc__heading-anchor-8">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Cybersecurity Strategy and Consulting
                </h2>
                <p>
                  Building a resilient cybersecurity program requires careful
                  planning and expert guidance. Logic Viper’s Cybersecurity
                  Strategy and Consulting services help businesses develop
                  long-term security strategies that align with their growth
                  goals while ensuring robust protection.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {accordionData.slice(23, 26).map((item, index) => (
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

              <section id="elementor-toc__heading-anchor-9">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Identity and Access Management (IAM)
                </h2>
                <p>
                  Controlling access to sensitive systems and data is critical
                  in preventing unauthorized access and data breaches. Our
                  Identity and Access Management (IAM) solutions ensure that
                  only the right people, with the right permissions, can access
                  your critical assets.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {accordionData.slice(26, 30).map((item, index) => (
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

              {/* How We Share Your Information */}
              <section id="elementor-toc__heading-anchor-10">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Security Awareness and Training
                </h2>
                <p>
                  Human error is one of the leading causes of security breaches.
                  Our Security Awareness and Training programs are designed to
                  arm your employees with the knowledge they need to identify
                  and respond to potential security threats.
                </p>

                <div className="w-full mt-5 mb-3 mx-auto">
                  {accordionData.slice(30, 33).map((item, index) => (
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
              <TableOfContents tocData={cybersecuritySolutionToc} />
            </div>
          </div>
          <section id="elementor-toc__heading-anchor-11">
            <h2 className="text-[40px] text-center font-bold font-serif my-4">
              Cybersecurity Resources
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CybersecuritySolution;
