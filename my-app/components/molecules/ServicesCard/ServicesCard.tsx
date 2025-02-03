import React from "react";
import Image from "next/image";
import { ServicesProps } from "@/types/ServicesProps/ServicesProps";

const ServicesCard = ({
  iconSrc,
  cardHeader,
  cardText,
  width,
  height,
}: ServicesProps) => {
  return (
    <div className="flex flex-col h-full px-[48px] pt-[40px] pb-[64px] bg-[#F3F2E7] rounded-[12px] lg:px-[27px]">
      <div className="flex gap-x-[40px] pb-[24px] items-center">
        <Image
          src={iconSrc}
          alt="services section icon"
          width={width}
          height={height}
        />
        <p className="text-[#3A1700] font-rowdies text-[24px] font-light leading-[32px]">
          {cardHeader}
        </p>
      </div>

      <div className="w-full h-[1px] bg-[#DEDDCD]"></div>
      <div className="w-[64px] h-[3px] bg-[#333]"></div>

      <p className="text-[#3A1700] text-opacity-50 font-manrope leading-[32px] pt-[39px] pb-[33px] flex-grow">
        {cardText}
      </p>

      <div className="flex justify-center">
        <button className="uppercase text-[#FFF] font-rowdies text-[14px] py-[16px] px-[36px] bg-[#7E8AB8] rounded-[24px] hover:text-[#7E8AB8] hover:bg-[#FFF] transition-all duration-300 ease-in-out">
          learn more
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
