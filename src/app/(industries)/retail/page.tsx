import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
type Props = {};

const RetailSector = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/retail.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Retail</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                  Safeguarding the Future of Shopping
                </h2>
                <p>
                  The retail sector has undergone a massive digital
                  transformation, with e-commerce, mobile payments, and
                  personalized shopping experiences becoming the new norm.
                  However, this shift has made retailers prime targets for
                  cyberattacks, with payment systems, customer data, and loyalty
                  programs all vulnerable to breaches. Retailers need to protect
                  their digital ecosystems while ensuring that customer trust is
                  maintained.
                </p>
                <p>
                  <strong>
                    Logic Viper&apo;s cybersecurity solutions for retail
                  </strong>{" "}
                  ensure that your customers&apos; data is secure, your
                  e-commerce platforms are protected, and your payment systems
                  are compliant with industry standards. We provide real-time
                  monitoring to detect and prevent fraud, data encryption for
                  secure transactions, and comprehensive protection for customer
                  loyalty programs. Our solutions help retailers maintain
                  customer trust while staying compliant with data protection
                  regulations.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/shopping.webp"
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
                  src="/images/retail-solutions.webp"
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
                    Securing e-commerce platforms and mobile payment systems
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Data encryption for secure online and in-store transactions
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>PCI DSS compliance for payment processing</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>Fraud detection and prevention for online retail</p>
                </div>

                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Why It Matters:
                </h2>
                <p>
                  Retailers face the dual challenge of protecting customer data
                  while delivering seamless shopping experiences. With Logic
                  Viper’s solutions, retailers can safeguard their operations
                  and maintain customer trust.
                </p>
                <div className="mt-6 border-2 border-black w-10"></div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[50px] font-bold mt-25 text-center">
          Retail Resources
        </h3>
      </div>
    </div>
  );
};

export default RetailSector;
