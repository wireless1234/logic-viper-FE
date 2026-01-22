import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
type Props = {};

const GovernmentSector = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/gov.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-center text-white text-[35px] md:text-[50px] lg:text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Government & Social Sector (MDAs)</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-10 lg:py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                  Safeguarding Critical Public Services
                </h2>
                <p>
                  Government agencies and social sector organizations manage
                  sensitive citizen data and critical infrastructure, making
                  them high-value targets for cybercriminals. Cyberattacks on
                  government entities can disrupt essential services, from
                  healthcare to social security, and compromise personal data.
                  Additionally, government agencies must comply with stringent
                  cybersecurity regulations, ensuring that public data is
                  secure.
                </p>
                <p>
                  <strong>Logic Viper partners with government agencies</strong>{" "}
                  to provide tailored cybersecurity solutions that protect
                  critical services, safeguard citizen data, and ensure
                  compliance with government regulations. Our solutions include
                  incident response planning, ransomware prevention, and
                  continuous monitoring to protect public sector networks from
                  sophisticated attacks. We work to secure everything from
                  municipal services to national defense systems, ensuring that
                  the public&apos;s trust is maintained.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/safeguard.webp"
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
                  src="/images/solutions.webp"
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
                  <p>Data encryption and access controls for citizen records</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>Cyber defense for critical public infrastructure</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Compliance with government cybersecurity regulations (NIST,
                    FISMA)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Incident response and disaster recovery planning for MDAs
                  </p>
                </div>

                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Why It Matters:
                </h2>
                <p>
                  Cyberattacks on government systems can jeopardize national
                  security, disrupt public services, and erode citizen trust.
                  Strong cybersecurity is critical to maintaining the safety and
                  efficiency of public services.
                </p>
                <div className="mt-6 border-2 border-black w-10"></div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[50px] font-bold mt-25 text-center">
          Government & Social Sector Resources
        </h3>
      </div>
    </div>
  );
};

export default GovernmentSector;
