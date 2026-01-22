import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMoneyBillWave,
  FaUserTie,
  FaHeartbeat,
  FaDotCircle,
} from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { GiProgression, GiCaduceus } from "react-icons/gi";
import { CiTimer } from "react-icons/ci";
import { IoShirtOutline } from "react-icons/io5";

const benefitsGroupOne = [
  {
    title: "Make a Real Impact",
    description:
      "At Logic Viper, your work goes beyond the day-to-day. You’ll contribute to meaningful projects that empower businesses, protect data, and help clients thrive. Whatever your role, you’ll be making a difference.",
  },
  {
    title: "Empowering Our Clients",
    description:
      "We’re dedicated to delivering excellence, and each person here plays a part in providing our clients with secure, efficient, and reliable solutions.",
  },
];

const benefitsGroupTwo = [
  {
    title: "Team-Centric Approach",
    description:
      "We’re stronger together. At Logic Viper, collaboration is at the heart of what we do, and every team member’s input is valued. You’ll find a supportive environment where diverse perspectives are celebrated, and teamwork is essential to our success.",
  },
  {
    title: "Inclusive Atmosphere",
    description:
      "We respect each individual’s contribution, recognizing that our collective strengths make us better. Here, everyone has a voice and the freedom to share ideas openly.",
  },
  {
    title: "Encouragement to Innovate",
    description:
      "Creativity is at the core of our culture. We welcome new ideas and innovative approaches, providing an environment where experimentation and forward-thinking are embraced.",
  },
  {
    title: "Commitment to Integrity",
    description:
      "Our company is built on trust, transparency, and respect. We maintain high ethical standards, creating a work environment where honesty and integrity are key.",
  },
];

const benefits = [
  {
    title: "Competitive Pay & Bonuses",
    description:
      "We value your hard work with market-aligned salaries and performance bonuses.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Flexible Work Options",
    description:
      "Choose remote or hybrid setups with flexible hours to suit your lifestyle.",
    icon: <IoShirtOutline />,
  },
  {
    title: "Health & Wellness",
    description:
      "Access comprehensive medical coverage, mental health resources, and wellness programs.",
    icon: <GiCaduceus />,
  },
  {
    title: "Generous Time Off",
    description:
      "Enjoy ample vacation, paid holidays, and sick leave to recharge.",
    icon: <CiTimer />,
  },
  {
    title: "Professional Growth",
    description:
      "Advance with career development, mentorship, and structured pathways for progression.",
    icon: <GiProgression />,
  },
  {
    title: "Team Culture",
    description:
      "Connect through team events, recognition programs, and a collaborative workplace.",
    icon: <RiTeamLine />,
  },
];

const Careers = () => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/careers.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-center text-white text-[35px] md:text-[50px] lg:text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Careers</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-10 lg:py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                  Why Work with Logic Viper?
                </h2>
                <p>
                  At <strong>Logic Viper</strong>, we believe every team member
                  plays a vital role in driving our mission forward. We&apos;re
                  a community of passionate professionals, each contributing
                  unique skills to create an impactful and innovative workplace.
                  Here&apos;s why Logic Viper could be the perfect place for
                  your next career move:
                </p>
                <div className="my-7">
                  <Link
                    href="/jobs"
                    className="hover:bg-[#75BDA7] text-white px-7.5 py-[13px] bg-black my-4 rounded text-[13px] font-bold "
                  >
                    Explore Job Openings
                  </Link>
                </div>
                {[benefitsGroupOne, benefitsGroupTwo].map((group, idx) => (
                  <ul key={idx} className="space-y-2 text-[15px]">
                    {group.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FaDotCircle className="mt-1 text-gray-800 shrink-0" />
                        <span className="text-gray-700">
                          <strong className="text-gray-900">
                            {item.title}:
                          </strong>{" "}
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/work.webp"
                  alt="gov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 505px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
            <h3 className="md:col-span-2 lg:col-span-3 text-[50px] mt-16 mb-5 text-center font-serif font-extrabold">
              Perks & Benefits at Logic Viper
            </h3>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 items-start gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-[50px] text-[#75bda7] shrink-0">
                  {benefit.icon}
                </div>

                <div>
                  <h3 className="text-[25px] font-semibold font-serif text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] font-rubik leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
