import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
type Props = {};

const AutomotiveSector = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/automotive.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-center text-white text-[35px] md:text-[50px] lg:text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Automotive Industry</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-10 lg:py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                  Driving Innovation Safely
                </h2>
                <p>
                  The automotive sector is one of the most rapidly transforming
                  industries, with advancements in autonomous driving, electric
                  vehicles, and connected car ecosystems revolutionizing the
                  market. However, this digital leap has created new
                  vulnerabilities cyberattacks targeting connected cars,
                  manufacturing processes, and supply chains are on the rise.
                  Hackers can exploit weaknesses in vehicle software,
                  telematics, and communication systems to take control of cars,
                  steal data, or disrupt entire fleets.
                </p>
                <p>
                  <strong>
                    Logic Viper&apos;s automotive cybersecurity solutions
                  </strong>{" "}
                  are designed to safeguard this future of mobility. Our
                  comprehensive approach secures vehicle communication systems,
                  including vehicle-to-vehicle (V2V) and
                  vehicle-to-infrastructure (V2I) connections. We protect the
                  software development lifecycle for automotive manufacturers,
                  ensuring that vulnerabilities are identified and addressed
                  before products hit the road. Moreover, we help secure
                  sensitive customer data in connected car ecosystems, ensuring
                  compliance with GDPR and other data protection regulations.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/innovation.webp"
                  alt="gov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 505px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full  aspect-video rounded overflow-hidden">
                <Image
                  src="/images/automotive-solutions.webp"
                  alt="gov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 505px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik pl-12">
                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Key Solutions:
                </h2>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>End-to-end encryption for in-vehicle communications</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Securing over-the-air (OTA) software updates for vehicles
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Protecting automotive supply chains from cyber disruptions
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Robust threat detection for connected and autonomous
                    vehicles
                  </p>
                </div>

                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Why It Matters:
                </h2>
                <p>
                  Protecting both passenger safety and the massive amounts of
                  data generated by connected vehicles is critical in this
                  sector. Automotive companies that fail to address
                  cybersecurity risks can face regulatory penalties, brand
                  damage, and legal action.
                </p>
                <div className="mt-6 border-2 border-black w-10"></div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[50px] font-bold mt-25 text-center">
          Insurance Resources
        </h3>
      </div>
    </div>
  );
};

export default AutomotiveSector;
