import React from "react";
import { EventsProps } from "@/types/EventsProps/EventsProps";
import Image from "next/image";

const EventsCard = ({ imageSrc, cardHeader, date }: EventsProps) => {
  return (
    <div className="relative">
      <span className="absolute top-[16px] left-[20px] px-[12px] py-[8px] text-[12px] font-bold text-white font-manrope bg-[#E29F72] rounded-full md:top-4 md:left-4">
        WATER
      </span>
      <div className="flex md:flex-col">
        <Image
          src={imageSrc}
          width={256}
          height={208}
          alt="event image"
          className="rounded-l-[12px] md:w-auto h:auto md:rounded-t-[12px] md:rounded-bl-none"
        />

        <div className="pt-[39px] pr-[32px] pb-[24px] pl-[36px] bg-[#F3F2E7] rounded-r-[12px] w-[514px] md:w-auto md:pt-[23px] md:px-[28px] md:pb-[32px] md:rounded-tr-none md:rounded-bl-[12px]">
          <h3 className="text-[#3A1700] font-rowdies text-[24px] leading-[32px] font-light pb-[25px]">
            {cardHeader}
          </h3>

          <div className="w-[290px] h-[1px] bg-[#DEDDCD] md:w-full"></div>
          <div className="w-[64px] h-[3px] bg-[#333]"></div>

          <div className="flex justify-between items-center pt-[21px]">
            <p className="text-[#3A1700] font-manrope text-[20px] leading-[32px]">
              {date}
            </p>
            <button className="text-[#FFF] font-rowdies text-[14px] uppercase rounded-[24px] bg-[#7E8AB8] px-[35px] py-[15px]">
              explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
