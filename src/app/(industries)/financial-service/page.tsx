import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
type Props = {};

const FinanceSector = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/finance.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-center text-white text-[35px] md:text-[50px] lg:text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Financial Services</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-10 lg:py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                  Strengthening Defenses Against Sophisticated Cyber Threats
                </h2>
                <p>
                  The financial sector has always been a prime target for
                  cybercriminals due to the wealth of sensitive data it handles.
                  With the rise of digital banking, fintech, and blockchain, the
                  attack surface has expanded, increasing the risk of
                  cyberattacks. Banks and financial institutions must protect
                  their systems from fraud, data breaches, and ransomware, while
                  also complying with strict regulatory requirements.
                </p>
                <p>
                  <strong>
                    Logic Viper offers robust cybersecurity solutions for the
                    financial services sector,
                  </strong>{" "}
                  designed to protect sensitive financial data, secure
                  transactions, and ensure compliance with regulatory standards
                  like PCI DSS and GDPR. Our solutions include advanced
                  encryption for secure transactions, fraud detection systems,
                  and continuous network monitoring to detect and prevent
                  attacks in real time.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/defence.webp"
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
                  src="/images/finance-solutions.webp"
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
                  <p>Advanced encryption for secure banking transactions</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Fraud detection and prevention systems for financial
                    institutions
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>Regulatory compliance management for PCI DSS and GDPR</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>Real-time threat monitoring for banking networks</p>
                </div>

                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Why It Matters:
                </h2>
                <p>
                  In a sector where trust and security are paramount, a single
                  cyberattack can cause widespread damage, both financially and
                  reputationally. With Logic Viper’s olutions, financial
                  institutions can stay ahead of cyber threats while maintaining
                  the highest standards of security.
                </p>
                <div className="mt-6 border-2 border-black w-10"></div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[50px] font-bold mt-25 text-center">
          Financial Services Resources
        </h3>
      </div>
    </div>
  );
};

export default FinanceSector;
