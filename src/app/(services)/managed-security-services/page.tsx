"use client";
import React, { useState } from "react";
import TableOfContents from "@/shared/table-of-content/table-of-content";
import {
  ManageSecurityTocData,
  securityAccordionData,
} from "@/lib/servicesData/manageData";
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
          src="/images/security.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute  w-full h-full font-serif bg-black/50 text-center text-white text-[35px] md:text-[50px] lg:text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Managed Security Services</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-10 lg:py-25">
        <div className="px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="space-y-5 px-3 font-rubik text-[15px]">
              {/* Effective Date */}
              <section id="elementor-toc__heading-anchor-0">
                <p>
                  At Logic Viper, our Managed Security Services (MSS) provide
                  continuous oversight and protection for your critical IT
                  infrastructure, ensuring round-the-clock security management
                  that helps businesses stay ahead of cyber threats. With a
                  proactive and operational approach, our services integrate
                  seamlessly with your business to offer scalable, adaptive
                  protection.
                </p>
              </section>

              {/* Scope */}
              <section id="elementor-toc__heading-anchor-1">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  24/7 Security Monitoring
                </h2>
                <p>
                  Our 24/7 Security Monitoring service ensures that your systems
                  are constantly monitored by our Security Operations Center
                  (SOC) experts. We provide real-time surveillance and analysis
                  of network traffic, system logs, and critical data points to
                  detect and respond to potential security incidents.
                </p>
                <div className="w-full  mx-auto mt-5">
                  {securityAccordionData
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
              </section>

              <section className="mt-5" id="elementor-toc__heading-anchor-2">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Security Information and Event Management (SIEM)
                </h2>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {securityAccordionData.slice(3, 6).map((item, index) => (
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
                  Endpoint Protection and Management
                </h2>
                <p>
                  With the increasing reliance on mobile and remote work,
                  endpoint security has never been more critical. Our Endpoint
                  Protection and Management service ensures that all devices
                  connected to your network remain secure, whether on-site or
                  remote.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {securityAccordionData.slice(6, 9).map((item, index) => (
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
                  Firewall and Network Security Management
                </h2>
                <p>
                  Our Firewall and Network Security Management services offer
                  continuous protection for your network perimeter by managing
                  firewalls, intrusion detection/prevention systems (IDS/IPS),
                  and network access controls.
                </p>

                <div className="w-full mt-5 mb-3 mx-auto">
                  {securityAccordionData.slice(9, 12).map((item, index) => (
                    <div key={index} className=" border-gray-300 ">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full border font-serif-display text-[10px] flex justify-between items-center py-2 px-3 focus:outline-none transition-colors"
                        aria-expanded={openIndex === index}
                      >
                        <span className="text-lg font-semibold">
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
                        <p className="text-gray-700">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* How We Use Your Information */}
              <section id="elementor-toc__heading-anchor-5">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Threat Intelligence and Security Analytics
                </h2>
                <p>
                  Our Threat Intelligence and Security Analytics service
                  leverages global threat intelligence feeds to provide
                  proactive protection against new and emerging cyber threats.
                  By integrating this intelligence into our security operations,
                  we can anticipate and prevent sophisticated attacks.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {securityAccordionData.slice(12, 15).map((item, index) => (
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
                  Vulnerability and Patch Management
                </h2>
                <p>
                  With Vulnerability and Patch Management, we ensure that your
                  systems are continuously updated and protected against known
                  vulnerabilities, reducing the risk of exploitation and
                  downtime.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {securityAccordionData.slice(15, 18).map((item, index) => (
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
                  Managed Intrusion Detection and Prevention (IDPS)
                </h2>
                <p>
                  Our Managed IDPS service ensures continuous surveillance of
                  your network for intrusion attempts and cyberattacks. By
                  providing real-time detection and automatic response, we
                  protect your systems from both known and unknown threats.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {securityAccordionData.slice(18, 21).map((item, index) => (
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

              <section id="elementor-toc__heading-anchor-8">
                <h2 className="text-[30px] font-bold font-serif my-4">
                  Managed Data Loss Prevention (DLP)
                </h2>
                <p>
                  With the growing importance of data protection and privacy,
                  our Managed DLP service provides comprehensive protection for
                  your sensitive information by preventing unauthorized access,
                  sharing, or leaks.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {securityAccordionData.slice(21, 24).map((item, index) => (
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
                  Managed Cloud Security
                </h2>
                <p>
                  As cloud adoption continues to grow, our Managed Cloud
                  Security service ensures that your cloud environments remain
                  secure and compliant. We help you protect your data and
                  applications in public, private, and hybrid cloud
                  infrastructures.
                </p>
                <div className="w-full mt-5 mb-3 mx-auto">
                  {securityAccordionData.slice(24, 27).map((item, index) => (
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
                  Compliance Monitoring and Reporting
                </h2>
                <p>
                  Our Compliance Monitoring and Reporting service helps
                  businesses meet industry-specific regulations and standards
                  such as PCI-DSS, HIPAA, and ISO 27001. We provide ongoing
                  monitoring, reporting, and auditing to ensure that your
                  security practices remain compliant with the latest regulatory
                  requirements.
                </p>

                <div className="w-full mt-5 mb-3 mx-auto">
                  {securityAccordionData.slice(27, 30).map((item, index) => (
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
              <TableOfContents tocData={ManageSecurityTocData} />
            </div>
          </div>
          <section id="elementor-toc__heading-anchor-11">
            <h2 className="text-[40px] text-center font-bold font-serif my-4">
              Managed Security Services Resources
            </h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CybersecuritySolution;
