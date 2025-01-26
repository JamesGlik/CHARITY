import React from "react";
import { EventsProps } from "@/types/EventsProps/EventsProps";
import Image from "next/image";

const EventsCard = ({ imageSrc, cardHeader, date }: EventsProps) => {
  return (
    <div>
      <div className="flex justify-center">
          <Image
            src={imageSrc}
            width={256}
            height={208}
            alt="event image"
            className="rounded-l-[12px]"
          />
        <div className="pt-[39px] pr-[32px] pb-[24px] pl-[36px] bg-[#F3F2E7] rounded-r-[12px] w-[514px]">
          <h3 className="text-[#3A1700] font-rowdies text-[24px] leading-[32px] font-light mb-[25px]">
            {cardHeader}
          </h3>

          <div className="w-[290px] h-[1px] bg-[#DEDDCD]"></div>
          <div className="w-[64px] h-[3px] bg-[#333] mb-[21px]"></div>

          <div className="flex justify-between items-center">
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
