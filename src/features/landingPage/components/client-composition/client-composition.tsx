import React from "react";
import { industryData } from "@/lib/industryData";
import Image from "next/image";

type Props = {};

const ClientComposition = (props: Props) => {
  return (
    <section className="p-2.5">
      <div className="p-2.5">
        <div className="py-25  max-w-330 mx-auto ">
          <div className="px-3 grid lg:grid-cols-2">
            <div className="px-3">
              <h2 className="text-[#0f0e1b] text-[40px] mb-5 font-serif font-bold">
                Our Client Composition
              </h2>
              <p className="mb-7.5 font-rubik text-[15px]">
                <strong>Logic Viper Tech</strong> understands that no two
                businesses are alike. Each one faces unique challenges and
                vulnerabilities within the digital landscape. That's why we
                don't believe in one-size-fits-all solutions. We cater to a
                diverse range of clients, each benefiting from our tailored
                approach and comprehensive suite of services
              </p>
              <div className="grid md:grid-cols-2">
                {industryData.map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 mb-7.5 flex gap-2 text-xl cursor-pointer text-[#75bda7] bg-[#f2fbf8] mx-3 h-fit hover:text-black"
                  >
                    {item.icon}
                    <p className="font-normal font-serif-display text-[15px] ">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-3 relative w-full aspect-square">
              <Image
                src="/images/composition.webp"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="clients"
              />
            </div>
          </div>
          <h2 className="text-[#0f0e1b] text-[40px] text-center mt-25 font-serif font-bold">
            Featured Resources
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ClientComposition;
