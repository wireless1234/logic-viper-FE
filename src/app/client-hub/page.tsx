"use client";

import React from "react";
import { FaComments } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { RiMailOpenLine } from "react-icons/ri";
import Image from "next/image";

const ClientHub: React.FC = () => {
  const links = [
    {
      text: "LOG-IN TO CLIENT PORTAL",
      href: "#",
    },
    {
      text: "OPEN SUPPORT ASSISTANT",
      href: "#",
    },
    {
      text: "CALL OUR SUPPORT LINE (+1 347-707-4385)",
      href: "tel:+13477074385",
    },
    {
      text: "EMAIL SUPPORT",
      href: "mailto:support@logicviper.com",
    },
  ];

  return (
    <div className="w-full relative overflow-x-hidden scroll-smooth">
      {/* Background Section */}
      <section
        className="h-[50vh] md:h-[60vh] bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: "url('/images/client.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-start justify-center px-6 md:px-20 text-white ">
          <div className="max-w-330 w-full mx-auto space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-[74px] font-serif font-medium">
              Client Hub
            </h2>
            <p className="text-lg md:text-xl lg:text-[44px] font-medium font-serif">
              Please use the following links to reach our support team.
            </p>

            {/* Links */}
            <ul className="mt-6 space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center text-[#75bda7] font-serif-display font-semibold space-x-3 hover:text-white  transition"
                  >
                    <FaArrowRightLong className="flex-shrink-0" />
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Filler Section: Technical Support & Exceptional Support */}
      <div className="bg-white px-6 md:px-20 py-16 space-y-20">
        {/* Technical Support Contact Options */}
        <div className="max-w-330 w-full mx-auto">
          <h2 className="text-[44px] text-center font-medium font-serif mb-8 text-gray-900">
            Our Technical Support Contact Options
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Support Assistant */}
            <div className="flex flex-col text-center space-y-4">
              <div className="text-[#75bda7] flex items-center justify-center text-7xl flex-shrink-0">
                <FaComments />
              </div>
              <div>
                <h3 className=" text-[25px] font-semibold font-serif">
                  Connect with Our Support Assistant
                </h3>
                <p className="text-gray-600 text-sm font-rubik">
                  Use our virtual support assistant to submit and track your
                  technical concerns—available 24/7 for fast and easy help.
                </p>
              </div>
            </div>

            {/* Speak with Us */}
            <div className="flex flex-col text-center space-y-4">
              <div className="text-[#75bda7] flex items-center justify-center text-7xl flex-shrink-0">
                <FiPhoneCall />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <a
                    href="tel:+13477074385"
                    className=" text-[25px] font-semibold font-serif"
                  >
                    Speak with Us
                    <br />
                    Call: 1 347-707-4385
                  </a>
                </h3>
                <p className="text-gray-600 text-sm font-rubik">
                  Reach out directly to our support team with your concerns
                </p>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex flex-col text-center space-y-4">
              <div className="text-[#75bda7] flex items-center justify-center text-7xl flex-shrink-0">
                <RiMailOpenLine />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <a
                    href="mailto:support@logicviper.com"
                    className="text-[25px] font-semibold font-serif"
                  >
                    Email Support
                    <br />
                    Email: support@logicviper.com
                  </a>
                </h3>
                <p className="text-gray-600 text-sm font-rubik">
                  Send us a message describing your technical issue, and one of
                  our IT specialists will follow up with a resolution.
                </p>
              </div>
            </div>
          </div>
          {/* Exceptional Support Section */}
          <div className=" mx-auto grid md:grid-cols-2 mt-25 gap-12 items-center">
            <div>
              <h2 className="text-[40px] font-serif font-bold mb-6 text-gray-900">
                Exceptional Support, Every Step of the Way
              </h2>
              <p className="text-gray-700 space-y-6 text-sm md:text-base">
                <strong>• 24/7/365 Availability</strong>
                <br />
                Access support anytime, across all channels—ensuring we’re
                always there when you need us.
                <br />
                <strong>• Skilled Technicians, Focused on Your Success</strong>
                <br />
                Our expert team is dedicated to resolving issues quickly and
                helping your business thrive.
                <br />
                <strong>• Guaranteed Uptime</strong>
                <br />
                We ensure reliable service and guaranteed uptime, so your
                business stays operational without interruptions.
                <br />
                <strong>• Proactive Monitoring & Rapid Response</strong>
                <br />
                We detect and address issues before they become problems,
                ensuring minimal disruption.
                <br />
                <strong>• Tailored Solutions</strong>
                <br />
                Personalized support and custom solutions designed to meet the
                unique needs of your business.
              </p>
            </div>

            <div className="relative aspect-620/489 w-full max-w-155">
              <Image
                src="/images/hub.webp"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="A cheerful man wearing a headset and holding a clipboard at a modern office workspace."
                className="rounded bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHub;
