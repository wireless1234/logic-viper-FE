import React from "react";
import { servicesData } from "@/lib/serviceData";
import ServiceCard from "./servicecard";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className=" bg-white">
      <div className="max-w-330 mx-auto py-25 px-2.5">
        <div className="p-2.5">
          <div className="max-w-165 mx-auto text-center mb-15">
            <h2 className="mb-3.75 text-[#0e0129] text-[40px] font-bold font-serif">
              High-Performance Services
            </h2>
            <p className="text-[15px] font-rubik">
              In today's hyper connected world, digital threats lurk around
              every corner, leaving businesses vulnerable and exposed. At Logic
              Viper Tech, we understand the anxieties that keep you up at night.
              That's why we exist to be your trusted guardian, standing watch
              over your digital assets and empowering you to thrive in a
              landscape fraught with risk.
            </p>
          </div>
          <div className="grid md:grid-col-2 lg:grid-cols-3 gap-5">
            {servicesData.map((item, i) => (
              <div
                key={i}
                className="py-8.75 pl-5 pr-6 flex gap-5 hover:border hover:border-[#75bda7] group cursor-pointer"
              >
                <div className="text-[40px] pt-2 group-hover:text-[#75bda7]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-[#0f0e1b] text-[23px] font-semibold font-serif group-hover:text-[#75bda7]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#565656] font-rubik">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-2.5">
          <div className="pt-25">
            <div className="max-w-165 mx-auto text-center mb-15">
              <h2 className="mb-3.75 text-[#0e0129] text-[40px] font-bold">
                Our Experience
              </h2>
              <p className="text-[15px]">
                At Logic Viper Tech, experience isn't just a number; it's the
                bedrock of your security. Our team is not a collection of fresh
                faces, but a carefully assembled cohort of seasoned veterans,
                each battle-tested in the treacherous terrain of cybersecurity
                and IT.
              </p>
            </div>
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
