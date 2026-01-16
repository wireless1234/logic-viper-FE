import React from "react";
import { testimonialData } from "../../../lib/testimonialData";
import {
  BiSolidQuoteAltRight,
  BiSolidQuoteAltLeft,
  BiSolidStar,
} from "react-icons/bi";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="py-25 bg-white">
      <div className=" max-w-330 mx-auto py-25">
        <div className="p-2.5">
          <div className="max-w-165 mx-auto text-center mb-25">
            <h2 className="mb-3.75 text-black leading-12 text-[40px] font-bold  font-serif">
              What Client&apos;s Say About Us
            </h2>
            <p className="text-[15px] text-black  font-rubik">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus quam neque quibusdam corrupti aspernatur corporis alias
              nisi dolorum expedita veritatis voluptates minima sapiente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
            {testimonialData.map((item, index) => (
              <div key={index} className="relative w-full h-full  ">
                <div
                  className={`bg-[#FEF4F8] p-7.5   transition-colors ease-in-out duration-75 rounded w-full relative flex flex-col justify-center`}
                >
                  <div
                    className={`rounded-full transition-colors ease-in-out duration-75 p-4 absolute left-[43%] -top-7.5 shadow-[0_0_20px_3px_rgba(0,0,0,0.05)] bg-white`}
                  >
                    <BiSolidQuoteAltLeft className="size-7.5 text-[#75bda7]" />
                  </div>
                  <p
                    className={`text-[15px] font-rubik transition-colors ease-in-out duration-75 text-black mb-3.75 mt-6 text-center`}
                  >
                    {item.quote}
                  </p>
                  <ul className=" flex items-center gap-2 my-3  w-fit mx-auto">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <li key={index}>
                        <BiSolidStar
                          className={`size-6  text-[#75BDA7] transition-colors ease-in-out duration-75 `}
                        />
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`
                absolute
                -bottom-3
                left-[43%]
                w-0
                h-0
                border-l-70
                border-l-transparent
                border-t-56
              border-[#FEF4F8]
                transition-colors ease-in-out duration-75
                rotate-140
                z-10
              `}
                  />
                </div>
                <div className="mx-auto mt-9 w-fit">
                  <div className="size-17.5 relative rounded-md">
                    <Image
                      src={item.image}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      alt=""
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="font-bold font-serif text-center text-xl text-black">
                    {item.name}
                  </h3>
                  <p className="font-semibold text-[13px] text-[#75bda7] text-center">
                    {item.role}
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

export default Testimonials;
