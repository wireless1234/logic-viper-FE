import React from "react";
import SecurityCard from "./securitycards";
type Props = {};

const WebSecurity = (props: Props) => {
  return (
    <div className="pt-7.5">
      <div className="p-2.5 flex flex-col justify-center">
        <div className="mx-auto px-3 mb-15 flex flex-col justify-center max-w-165 text-center">
          <h2 className="mb-3.75 text-[40px] font-bold text-[#0e0129] font-serif">
            Complete Website Security
          </h2>
          <p className="text-[#212121] font-normal text-[15px] font-rubik">
            In today&apos;s digital era, your website is more than just a
            virtual presence—it&apos;s a vital asset that demands top-tier
            protection. Logic Viper&apos;s advanced website security solutions
            ensure your digital gateway is not only fortified but also resilient
            against the most sophisticated cyber threats.
          </p>
        </div>
        <SecurityCard />
      </div>
    </div>
  );
};

export default WebSecurity;
