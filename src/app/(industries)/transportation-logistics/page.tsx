import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
type Props = {};

const AutomotiveSector = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/transport.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-center text-white text-[35px] md:text-[50px] lg:text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Transportation & Logistics</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-10 lg:py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                  Protecting the Arteries of Global Trade
                </h2>
                <p>
                  The transportation and logistics industry underpins the global
                  economy, moving goods and people efficiently across borders.
                  However, as these operations become increasingly digital with
                  automated warehouses, connected fleets, and smart logistics
                  systems cybersecurity risks have escalated. Hackers can
                  disrupt operations by targeting fleet management systems,
                  inventory tracking, and even the global positioning systems
                  (GPS) that guide shipments.
                </p>
                <p>
                  <strong>
                    Logic Viper&apos;s cybersecurity solutions for the
                    transportation sector
                  </strong>{" "}
                  focus on protecting critical infrastructure. We safeguard
                  fleet management systems, ensuring that IoT-enabled vehicles
                  and connected devices operate securely. Our solutions also
                  protect transportation networks from ransomware and DDoS
                  attacks, minimizing the risk of disruptions to logistics and
                  supply chains. Additionally, we offer real-time monitoring and
                  incident response to ensure that your operations are always
                  protected.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/trade.webp"
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
                  src="/images/transport-solutions.webp"
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
                  <p>
                    Securing fleet management and IoT devices in transportation
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Real-time threat monitoring and response for logistics
                    networks
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Data encryption for shipment tracking and cross-border
                    operations
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Cyber defense for automated warehouses and inventory systems
                  </p>
                </div>

                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Why It Matters:
                </h2>
                <p>
                  Cyberattacks that disrupt transportation networks can halt
                  global trade, causing cascading economic damage. Ensuring
                  secure, uninterrupted operations is critical to keeping the
                  world moving.
                </p>
                <div className="mt-6 border-2 border-black w-10"></div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[50px] font-bold mt-25 text-center">
          Transportation & Logistics Resources
        </h3>
      </div>
    </div>
  );
};

export default AutomotiveSector;
