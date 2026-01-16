"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCaretDown, BsCaretRight } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import CompanyDropdown from "./nav-dropdown/company-dropdown";
import InsightsDropdown from "./nav-dropdown/insights-dropdown";
import ServicesDropdown from "./nav-dropdown/services_dropdown";
import IndustriesDropdown from "./nav-dropdown/industries_dropdown";
import { useCartDrawer } from "../../context/cartDrawerContext";
import { useCart } from "../../context/cartContext";

type Props = {};

const NavBar = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { openCart } = useCartDrawer();
  const { totalItems } = useCart();
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null
  );

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <div className="bg-[#0f0e1b] py-1.5 lg:py-2.5 fixed w-full z-100 ">
      <div className="relative cursor-pointer ">
        <div className="p-2.5 flex items-center justify-between max-w-330 mx-auto">
          <Link href="/" className="p-2.5 max-w-50 w-full ">
            {/* <img
            src="/images/logo.webp"
            alt="Vercel Logo"
            className="object-contain"
          /> */}
            <Image
              src="/images/logo.webp"
              alt="Vercel Logo"
              width={135}
              height={80}
              className="object-cover w-full"
            />
          </Link>
          <ul className="xl:flex items-center text-white gap-12 justify-between p-2.5 hidden">
            <li className=" group flex items-center gap-1.5">
              Company
              <span>
                <BsCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
              </span>
              <CompanyDropdown />
            </li>
            <li className="flex items-center gap-1.5 group">
              Insights
              <span>
                <BsCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
              </span>
              <InsightsDropdown />
            </li>
            <li className="flex items-center gap-1.5 group">
              Services
              <span>
                <BsCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
              </span>
              <ServicesDropdown />
            </li>
            <li className="flex items-center gap-1.5 group">
              Industries
              <span>
                <BsCaretDown className="transition-transform duration-200 group-hover:rotate-180" />
              </span>
              <IndustriesDropdown />
            </li>
            <li className="flex items-center gap-1">
              <Link href="/shop"> Shop</Link>
            </li>
            <li className="flex items-center gap-1.5">
              <span>
                <FaRegUser />
              </span>
              Client Hub
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="xl:hidden flex ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="transition-transform duration-250 ease-out"
                type="button"
              >
                {!isOpen && (
                  <div className="flex flex-col justify-end gap-0.75">
                    <div className="bg-[#7cc0ab] h-0.75 w-5 self-end"></div>
                    <div className="bg-[#7cc0ab] h-0.75 w-7"></div>
                    <div className="bg-[#7cc0ab] h-0.75 w-4 self-end"></div>
                  </div>
                )}
                {isOpen && <IoClose className="size-10 text-[#7cc0ab]" />}
              </button>
              {isOpen && (
                <ul className="absolute w-full flex flex-col gap-4 text-white justify-between py-2.5 px-5 bg-[#0f0e1b] left-0 top-20 pb-7">
                  {/* Company */}
                  <li
                    onClick={() => toggleDropdown("Company")}
                    className="group"
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      <span>Company</span>
                      <BsCaretRight
                        className={`transition-transform duration-200 ${
                          activeDropdown === "Company" ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    {activeDropdown === "Company" && (
                      <div className="w-full bg-[#0f0e1b] overflow-hidden mt-2 transition-all duration-300">
                        <CompanyDropdown />
                      </div>
                    )}
                  </li>

                  {/* Insights */}
                  <li
                    onClick={() => toggleDropdown("Insights")}
                    className="group"
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      <span>Insights</span>
                      <BsCaretRight
                        className={`transition-transform duration-200 ${
                          activeDropdown === "Insights" ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    {activeDropdown === "Insights" && (
                      <div className="w-full bg-[#0f0e1b] overflow-hidden mt-2 transition-all duration-300">
                        <InsightsDropdown />
                      </div>
                    )}
                  </li>

                  {/* Services */}
                  <li
                    onClick={() => toggleDropdown("Services")}
                    className="group"
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      <span>Services</span>
                      <BsCaretRight
                        className={`transition-transform duration-200 ${
                          activeDropdown === "Services" ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    {activeDropdown === "Services" && (
                      <div className="w-full bg-[#0f0e1b] overflow-hidden mt-2 transition-all duration-300">
                        <ServicesDropdown />
                      </div>
                    )}
                  </li>

                  {/* Industries */}
                  <li
                    onClick={() => toggleDropdown("Industries")}
                    className="group"
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      <span>Industries</span>
                      <BsCaretRight
                        className={`transition-transform duration-200 ${
                          activeDropdown === "Industries" ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    {activeDropdown === "Industries" && (
                      <div className="w-full bg-[#0f0e1b] overflow-hidden mt-2 transition-all duration-300">
                        <IndustriesDropdown />
                      </div>
                    )}
                  </li>

                  {/* Shop */}
                  <li className="flex items-center cursor-pointer">
                    <Link href="/shop"> Shop</Link>
                  </li>

                  {/* Client Hub */}
                  <li className="flex items-center justify-between cursor-pointer">
                    Client Hub
                    <FaRegUser />
                  </li>
                </ul>
              )}
            </div>
            <div className="md:flex hidden items-center gap-3">
              <button
                type="button"
                onClick={openCart}
                className="hover:bg-[#7cc0ab] group bg-white rounded px-5 py-3"
              >
                <span className="relative">
                  <FaCartShopping className="text-[#7cc0ab] group-hover:text-white size-5" />
                  <span className="absolute bg-red-600 py-0.5 px-1.5 rounded-full text-white text-[0.5rem] -top-2 -right-2">
                    {totalItems}
                  </span>
                </span>
              </button>
              <button
                type="button"
                className="border-[#7cc0ab] font-semibold px-5 py-2 border rounded hover:scale-110 hover:bg-[#7cc0ab] transition-transform duration-250 ease-out text-white"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
