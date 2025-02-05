import React from "react";
import Image from "next/image";
import { VolunteersProps } from "@/types/VolunteersProps/VolunteersProps";

const VolunteersCard = ({ imagesrc, name }: VolunteersProps) => {
  return (
    <div>
      <div className="flex flex-col">
        <Image
          src={imagesrc}
          width={270}
          height={208}
          alt="volunteers image"
          className="rounded-tl-[12px] rounded-tr-[12px] w-full h-auto"
        />
        <div className="flex flex-col gap-y-[25px] px-[32px] py-[23px] bg-[#FFF] rounded-bl-[12px] rounded-br-[12px] h-[200px]">
          <p className="text-[#3A1700] font-rowdies text-[24px] font-light leading-[32px] w-full">
            {name}
          </p>
          <div>
            <div className="w-full h-[1px] bg-[#DEDDCD]"></div>
            <div className="w-[64px] h-[3px] bg-[#333]"></div>
          </div>

          <p className="text-[rgba(58,23,0,0.5)] font-manrope leading-[32px]">
            Volunteer
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteersCard;
