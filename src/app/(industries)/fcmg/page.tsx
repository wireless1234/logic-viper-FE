import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
type Props = {};

const AutomotiveSector = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/fcmg.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-center text-white text-[35px] md:text-[50px] lg:text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">FMCG (Fast-Moving Consumer Goods)</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-10 lg:py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                  Securing Global Supply Chains
                </h2>
                <p>
                  The FMCG industry thrives on rapid production, distribution,
                  and sales cycles, making efficient supply chains and digital
                  transactions the backbone of the sector. However, these global
                  operations are exposed to significant cyber risks, including
                  fraud, data breaches, and ransomware attacks that can severely
                  disrupt production and delivery. FMCG companies must not only
                  protect their supply chains but also secure sensitive customer
                  and vendor data across digital platforms.
                </p>
                <p>
                  <strong>
                    Logic Viper helps FMCG companies safeguard their supply
                    chains
                  </strong>{" "}
                  by implementing advanced cyber protection strategies. We
                  secure digital supply chain data, ensuring the integrity of
                  inventory management systems and preventing disruptions caused
                  by cyberattacks. We also ensure that customer payment data
                  remains secure across e-commerce platforms, and we help FMCG
                  companies stay compliant with regulatory standards like PCI
                  DSS.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/goods.webp"
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
                  src="/images/fcmg.webp"
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
                    Cybersecurity for digital supply chains and vendor networks
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Securing online transactions and payment processing systems
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>Threat detection for logistics and warehouse management</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Data protection for customer loyalty programs and digital
                    marketing
                  </p>
                </div>

                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Why It Matters:
                </h2>
                <p>
                  Cyberattacks that disrupt supply chains can cause massive
                  delays, financial losses, and reputational damage. With
                  comprehensive cybersecurity, FMCG companies can ensure the
                  smooth, secure flow of goods from production to customer
                  delivery.
                </p>
                <div className="mt-6 border-2 border-black w-10"></div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[50px] font-bold mt-25 text-center">
          Healthcare Resources
        </h3>
      </div>
    </div>
  );
};

export default AutomotiveSector;
