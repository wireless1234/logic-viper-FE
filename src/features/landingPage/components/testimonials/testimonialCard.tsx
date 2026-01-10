import React from "react";
import {
  BiSolidQuoteAltRight,
  BiSolidQuoteAltLeft,
  BiSolidStar,
} from "react-icons/bi";
import Image from "next/image";
import { TestimonialType } from "@/types/testimonialTypes";

type Props = {
  item: TestimonialType;
  index: number;
  isCenter: boolean;
};

const TestimonialCard = ({ item, index, isCenter }: Props) => {
  return (
    <div key={index} className="relative w-full h-full  ">
      <div
        className={`${
          isCenter ? "bg-[#75bda7]" : "bg-white"
        } p-7.5   transition-colors ease-in-out duration-75 rounded w-full relative flex flex-col justify-center`}
      >
        <div
          className={`rounded-full transition-colors ease-in-out duration-75 p-4 absolute left-[43%] -top-7.5 shadow-[0_0_20px_3px_rgba(0,0,0,0.05)] ${
            isCenter ? "bg-[#75bda7]" : "bg-white"
          }`}
        >
          {isCenter ? (
            <BiSolidQuoteAltRight className="size-7.5 text-white" />
          ) : (
            <BiSolidQuoteAltLeft className="size-7.5 text-[#75bda7]" />
          )}
        </div>
        <p
          className={`text-[15px] font-rubik transition-colors ease-in-out duration-75 ${
            isCenter ? "text-white" : "text-[#212121]"
          } mb-3.75 mt-6 text-center`}
        >
          {item.quote}
        </p>
        <ul className=" flex items-center gap-2 my-3  w-fit mx-auto">
          {Array.from({ length: item.rating }).map((_, index) => (
            <li key={index}>
              <BiSolidStar
                className={`size-6   transition-colors ease-in-out duration-75 ${
                  isCenter ? "text-white" : "text-[#75bda7]"
                }`}
              />
            </li>
          ))}
        </ul>
        <span
          className={`
    absolute
    -bottom-6
    -left-1.25
    w-0
    h-0
    border-l-70
    border-l-transparent
    border-t-56
    ${isCenter ? "border-t-[#75bda7]" : "border-t-white"}
    transition-colors ease-in-out duration-75
    rotate-8
    z-10
  `}
        />
      </div>
      <div className="ml-5 mt-9 w-fit">
        <div className="size-17.5 relative rounded-md">
          <Image
            src={item.image}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt=""
            className="object-cover rounded-md"
          />
        </div>
        <h3 className="font-bold font-serif text-center text-xl text-white">
          {item.name}
        </h3>
        <p className="font-semibold text-[13px] text-[#75bda7] text-center">
          {item.role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
