import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
type Props = {};

const TravelSector = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/travel.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Travel & Hospitality</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                  Ensuring Seamless and Secure Guest Experiences
                </h2>
                <p>
                  The travel and hospitality industry is increasingly digital,
                  with online booking systems, reservation platforms, and mobile
                  check-ins becoming standard. However, this digital shift also
                  opens the door to cyber threats, with attackers targeting
                  payment systems, guest data, and loyalty programs. A single
                  breach can compromise the personal data of thousands of
                  guests, damage brand reputation, and lead to financial loss.
                </p>
                <p>
                  <strong>
                    Logic Viper&apos;s tailored solutions for travel and
                    hospitality companies
                  </strong>{" "}
                  focus on protecting guest data, securing payment systems, and
                  preventing fraud. We ensure that hotels, airlines, and travel
                  platforms can operate securely, providing seamless experiences
                  for customers without the risk of cyberattacks. Our solutions
                  also include compliance management with industry regulations
                  such as PCI DSS, ensuring that guest payment information is
                  always protected.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/guest.webp"
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
                  src="/images/travel-solutions.webp"
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
                  <p>Securing online booking and reservation systems</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>Protection of guest data and loyalty programs</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>PCI DSS compliance for payment processing systems</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>Fraud detection and prevention for travel platforms</p>
                </div>

                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Why It Matters:
                </h2>
                <p>
                  The trust that guests place in travel and hospitality
                  providers can be shattered by a cyberattack. Ensuring secure
                  operations not only protects your guests but also helps
                  preserve your brand’s reputation.
                </p>
                <div className="mt-6 border-2 border-black w-10"></div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[50px] font-bold mt-25 text-center">
          Travel & Hospitality Resources
        </h3>
      </div>
    </div>
  );
};

export default TravelSector;
