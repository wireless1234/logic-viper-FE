import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import LogoCarousel from "./carousel";
import WebSecurity from "./webSecurity";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about-us" className="bg-white">
      <div className=" max-w-330 mx-auto pb-17.5">
        <div className="grid lg:grid-cols-2 items-stretch gap-5 pt-20 pb-2.5">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center  h-full">
            <div className=" p-2.5">
              <p className="text-sm text-[#75bda7] font-medium uppercase font-serif">
                Our History
              </p>
              <h2 className=" pb-3.75 text-[#0f0e1b] font-extrabold text-[50px] font-serif">
                About Us
              </h2>
              <p className="pb-3.75 text-[#0e0129] font-normal text-base font-rubik">
                Logic Viper is a premier Managed Security Service Provider
                (MSSP) specializing in delivering top-tier cybersecurity
                solutions to organizations of all sizes. With a team of seasoned
                cybersecurity experts and state-of-the-art technology, we are
                committed to offering proactive, customized, and fully managed
                security services. Our approach combines deep industry knowledge
                with a relentless focus on innovation, ensuring that our clients
                remain one step ahead of even the most sophisticated cyber
                threats.
              </p>
              <div className="py-2.5 flex items-center gap-8">
                <Link
                  href="/about"
                  className="px-6 py-3 text-white bg-[#75bda7] rounded hover:bg-black transition-colors duration-300 ease-in-out font-rubik"
                >
                  Read More
                </Link>
                <div className="text-sm text-black flex items-center">
                  <Link
                    href="https://web.facebook.com/logicviper?mibextid=LQQJ4d&_rdc=1&_rdr#"
                    className="rounded-full hover:bg-[#75bda711] p-3 group"
                  >
                    <FaFacebookF className="group-hover:text-[#75bda7]" />
                  </Link>
                  <Link
                    href="https://x.com/logicviper_inc"
                    className="rounded-full hover:bg-[#75bda711] p-3 group"
                  >
                    <FaTwitter className="group-hover:text-[#75bda7]" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/logic-viper"
                    className="rounded-full hover:bg-[#75bda711] p-3 group"
                  >
                    <FaLinkedinIn className="group-hover:text-[#75bda7]" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/logicviper/profilecard/?igsh=b2dwOHp6aTBiMjRn"
                    className="rounded-full hover:bg-[#75bda711] p-3 group"
                  >
                    <FaInstagram className="group-hover:text-[#75bda7]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="p-2.5 ">
            <div className="pl-7 lg:pl-7">
              <div className="w-full aspect-video overflow-hidden relative mb-3.5  ">
                <Image
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src="/images/about.webp"
                  alt="about us"
                  className="rounded object-cover"
                />
              </div>
            </div>
            <div className="border-l-4 font-normal text-base border-black pl-6 text-[#0000008a] font-rubik italic">
              At Logic Viper Tech, we believe in going beyond simply providing
              cybersecurity and IT services. We're your trusted partner in
              building a resilient and secure digital future, adding value to
              your business in ways that transcend the technical.
            </div>
          </div>
        </div>
        <LogoCarousel />
        <WebSecurity />
      </div>
    </section>
  );
};

export default About;
