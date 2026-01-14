import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
type Props = {};

const InsuranceSector = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/insurance.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Insurance</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                  Protecting Policyholders and Company Data
                </h2>
                <p>
                  Insurance companies handle vast amounts of sensitive personal
                  and financial data, making them attractive targets for
                  cybercriminals. Data breaches, ransomware attacks, and fraud
                  can compromise customer trust and lead to significant
                  financial losses. In addition, insurance companies must comply
                  with stringent regulations designed to protect customer data
                  and ensure the integrity of their operations.
                </p>
                <p>
                  <strong>
                    Logic Viper&apos;s cybersecurity solutions for insurance
                    providers
                  </strong>{" "}
                  include advanced threat detection, secure data storage, and
                  fraud prevention systems. We ensure that customer data is
                  protected at every stage, from policy issuance to claims
                  processing, and we help insurance companies stay compliant
                  with regulations such as GDPR and PCI DSS. Our real-time
                  monitoring and incident response solutions ensure that any
                  potential threats are detected and mitigated before they can
                  cause harm.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/policy.webp"
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
                  src="/images/insurance-solutions.webp"
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
                    Secure data storage and access controls for customer
                    information
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>Advanced threat detection and fraud prevention systems</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Compliance management for GDPR, PCI DSS, and other
                    regulations
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Real-time monitoring and incident response for insurance
                    networks
                  </p>
                </div>

                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Why It Matters:
                </h2>
                <p>
                  Cyberattacks on insurance companies can result in the loss of
                  sensitive customer data and significant financial penalties.
                  By prioritizing cybersecurity, insurance companies can protect
                  their policyholders and their reputations.
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

export default InsuranceSector;
