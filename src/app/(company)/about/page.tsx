import React from "react";
import Image from "next/image";
import Testimonials from "@/features/landingPage/components/testimonials/testimonials";
import ServiceCard from "@/features/aboutPage/serviceCard";
import Mission from "@/features/aboutPage/mission";
import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import ServicesAccordion from "@/features/aboutPage/services";
import LogoCarousel from "@/features/landingPage/components/aboutus/carousel";

const AutomotiveSector = () => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/aboutHeader.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">About Us</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-7">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[45px] leading-13 font-serif font-extrabold">
                  Who we are
                </h2>
                <p>
                  Logic Viper is a premier Managed Security Service Provider
                  (MSSP) specializing in delivering top-tier cybersecurity
                  solutions to organizations of all sizes. With a team of
                  seasoned cybersecurity experts and state-of-the-art
                  technology, we are committed to offering proactive,
                  customized, and fully managed security services. Our approach
                  combines deep industry knowledge with a relentless focus on
                  innovation, ensuring that our clients remain one step ahead of
                  even the most sophisticated cyber threats.
                </p>
                <h2 className="text-[45px] mt-5 leading-13 font-serif font-extrabold">
                  Your Trusted Partner in Advanced Cybersecurity Solutions
                </h2>
                <p>
                  In an era where digital threats are evolving at an
                  unprecedented rate, safeguarding your business&apos;s a
                  necessity. Logic Viper stands at the forefront of this battle,
                  providing comprehensive cybersecurity solutions that empower
                  businesses to operate with confidence, free from the fear of
                  cyber threats.
                </p>
                <div className="py-2.5 flex items-center gap-8">
                  <div className="text-sm text-black flex items-center">
                    <Link
                      href="https://web.facebook.com/logicviper?mibextid=LQQJ4d&_rdc=1&_rdr#"
                      className="rounded-full hover:bg-black p-3 group"
                    >
                      <FaFacebookF className="group-hover:text-[#75bda7]" />
                    </Link>
                    <Link
                      href="https://x.com/logicviper_inc"
                      className="rounded-full hover:bg-black p-3 group"
                    >
                      <FaTwitter className="group-hover:text-[#75bda7]" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/logic-viper"
                      className="rounded-full hover:bg-black p-3 group"
                    >
                      <FaLinkedinIn className="group-hover:text-[#75bda7]" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/logicviper/profilecard/?igsh=b2dwOHp6aTBiMjRn"
                      className="rounded-full hover:bg-black p-3 group"
                    >
                      <FaInstagram className="group-hover:text-[#75bda7]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-square rounded overflow-hidden">
                <Image
                  src="/images/about-choose.webp"
                  alt="gov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 505px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <Mission />
            </div>

            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Our Services
                </h2>
                <p className="mb-5">
                  At Logic Viper, we offer a broad spectrum of services designed
                  to protect your business from every angle:
                </p>
                <ServicesAccordion />
              </div>
            </div>
            <div className="flex justify-end ">
              <div className="relative w-full max-w-[631px] aspect-621/539 rounded overflow-hidden">
                <Image
                  src="/images/about-service.webp"
                  alt="gov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 505px"
                  className="object-fit"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <LogoCarousel />
            </div>
            <div className="flex items-center">
              <div className="space-y-2.5 -mt-10 text-[15px] font-rubik">
                <h2 className="text-[45px] leading-13 font-serif font-extrabold">
                  Why Choose Us
                </h2>
                <p>
                  Logic Viper stands as the unparalleled choice for clients
                  seeking a dynamic blend of cybersecurity and IT excellence.
                  With a proven track record in delivering cutting-edge
                  solutions, we offer advanced Cybersecurity Services, ensuring
                  a robust defense against evolving threats.
                </p>
                <p>
                  Our commitment to meticulous Project Management guarantees the
                  efficient execution of projects, from detailed planning to
                  risk management. The integration of Managed Security Services,
                  IT Consulting, Software Development, and Project Management
                  under one roof presents clients with a holistic and
                  streamlined approach to their technological needs.
                </p>
                <p>
                  At Logic Viper, our dedication to innovation, quality
                  assurance, and client satisfaction positions us as the premier
                  partner for those aiming to fortify their digital resilience
                  and elevate their technological landscape. Together, we
                  navigate the complexities of the digital landscape, guided by
                  a shared vision of providing unparalleled service excellence
                  to our clients.
                </p>
                <p>
                  Choose Logic Viper for transformative solutions that transcend
                  expectations and propel your business toward a secure and
                  innovative future.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-square rounded overflow-hidden">
                <Image
                  src="/images/chooseUs.webp"
                  alt="gov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 505px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <ServiceCard />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default AutomotiveSector;
