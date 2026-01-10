import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegUser, FaChevronRight } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";

import { TiLocationArrowOutline } from "react-icons/ti";
import { TfiInstagram } from "react-icons/tfi";
import { LiaLinkedin, LiaFacebookSquare } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="pt-17.5 bg-[#0F0E1B]">
      <div className="p-2.5 max-w-330 mx-auto">
        <div className="p-2.5 grid md:grid-cols-3 lg:grid-cols-5">
          <div className="p-2.5">
            <div className=" max-w-50 w-full mb-3.75 ">
              <Link href="/">
                <Image
                  src="/images/logo.webp"
                  alt="Vercel Logo"
                  width={180}
                  height={80}
                  className="object-cover "
                />
              </Link>
            </div>
            <h3 className="mb-4.5 text-white font-semibold font-serif text-[25px]">
              Why You Need Us
            </h3>
            <p className="text-white text-[15px] font-rubik">
              You need Logic Viper to protect your business from rising cyber
              threats and avoid costly compliance risks. Secure your future
              before it's too late. Our solutions are not just beneficial,
              they&apos;re essential for the safety and success of your
              business.
            </p>
          </div>
          <div className="p-2.5 text-white space-y-4">
            <h2 className="text-2xl font-semibold font-serif ">Quick Links</h2>
            <ul className="font-rubik text-base flex flex-col gap-2 mb-3.75">
              <li>
                <Link href="/about" className="hover:text-[#7cc0ab]">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#7cc0ab]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#7cc0ab]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#7cc0ab]">
                  Shop
                </Link>
              </li>
            </ul>
            <div className="text-sm text-black flex items-center gap-3">
              <Link
                href="https://web.facebook.com/logicviper?mibextid=LQQJ4d&_rdc=1&_rdr#"
                className="rounded-full bg-[#75bda7] p-1 hover:scale-105 group"
              >
                <LiaFacebookSquare className="group-hover:text-black text-white size-7" />
              </Link>
              <Link
                href="https://x.com/logicviper_inc"
                className="rounded-full bg-[#75bda7] p-2 hover:scale-105 group"
              >
                <BsTwitterX className="group-hover:text-black text-white size-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/logic-viper"
                className="rounded-full bg-[#75bda7] p-1 hover:scale-105  group"
              >
                <LiaLinkedin className="group-hover:text-black text-white size-7" />
              </Link>
              <Link
                href="https://www.instagram.com/logicviper/profilecard/?igsh=b2dwOHp6aTBiMjRn"
                className="rounded-full bg-[#75bda7] p-2 hover:scale-105 group"
              >
                <TfiInstagram className="group-hover:text-black text-white size-5" />
              </Link>
            </div>
          </div>
          <div className="p-2.5 text-white space-y-4">
            <h2 className="text-2xl font-semibold font-serif ">Contact Us</h2>
            <ul className="font-rubik text-base flex flex-col gap-2">
              <li>
                <Link
                  href="tel:+13477074385"
                  className="flex hover:text-[#7cc0ab] items-center gap-3"
                >
                  <FiPhoneCall /> +1 347-707-4385
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:support@vicez-oz.com"
                  className="flex hover:text-[#7cc0ab] items-center gap-3"
                >
                  <LuMailOpen />
                  support@vicez-oz.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps/place/Ascomnet/@9.0619018,7.4801268,1168m/data=!3m2!1e3!4b1!4m6!3m5!1s0x104e0b076b5eaaab:0xab45f5e8a625a1d!8m2!3d9.0619018!4d7.4801268!16s%2Fg%2F11q1qjzz4g?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                  className="flex hover:text-[#7cc0ab] items-start gap-3"
                >
                  <TiLocationArrowOutline />
                  1125 Close Ave, Bronx, NY 10472
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-2.5 text-white space-y-4">
            <Link
              href="https://clients.vicez-oz.com/"
              className="flex items-center gap-1.5 hover:text-[#7cc0ab]"
            >
              <span>
                <FaRegUser />
              </span>
              Client Hub
            </Link>
          </div>
          <div className="p-2.5 text-white space-y-4 flex justify-end">
            <button
              type="button"
              className="border-[#7cc0ab] font-semibold px-5 py-2 border flex items-center gap-3 rounded hover:scale-110 hover:bg-[#7cc0ab] transition-transform duration-250 ease-out text-[#7cc0ab] hover:text-white h-fit"
            >
              Get Started
              <FaChevronRight />
            </button>
          </div>
        </div>
        <hr className="my-3.75 border-[#75bda7]" />
        <div className="px-6.25 pt-10 pb-9 ">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <p className="text-[15px] text-white">
              Copyright © 2024 Logic Viper Tech
            </p>
            <ul className="flex flex-wrap md:flex-nowrap text-center md:items-center ">
              {/* First row */}
              <li className="w-full flex justify-center gap-0.5 lg:gap-2">
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#75bda7] text-white text-[15px] px-2  whitespace-nowrap"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-[#75bda7] text-white text-[15px] px-2 whitespace-nowrap"
                >
                  Terms and Conditions
                </Link>
              </li>

              {/* Second row */}
              <li className="w-full flex justify-center mt-1 md:mt-0">
                <Link
                  href="/refund-and-return-policy"
                  className="hover:text-[#75bda7] text-white text-[15px] px-2 whitespace-nowrap"
                >
                  Refund and Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
