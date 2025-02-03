import React from "react";
import { FeaturesProps } from "@/types/FeaturesProps/FeaturesProps";
import Image from "next/image";

const FeaturesCard = ({ iconSvg, cardHeader, cardText, width, height}: FeaturesProps) => {
  return (
    <div className="pt-[57px] pb-[48px] px-[52px] bg-[#F3F2E7] rounded-[12px] flex flex-col gap-y-[23px] md:px-[28px]">
      <div className="flex items-center gap-x-[32px]">
        <Image src={iconSvg} width={width} height={height} alt="Features Card Icon" />
        <p className="text-[#3A1700] font-rowdies text-[24px] font-light leading-[32px]">
          {cardHeader}
        </p>
      </div>

      <div>
        <div className="bg-[#DEDDCD] w-full h-[1px]"></div>
        <div className="bg-[#333] w-[64px] h-[3px]"></div>
      </div>

      <p className="text-[#3A1700] text-opacity-50 font-manrope leading-[32px]">
        {cardText}
      </p>
    </div>
  );
};

export default FeaturesCard;
