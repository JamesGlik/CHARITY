import React from 'react';
import Image from 'next/image';
import Button from '../../atoms/Button/Button';
import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import { CauseCardProps } from '../../../types/CauseCardProps/CauseCardProps';

export default function CauseCard({ category, title, raised, goal, imageSrc }: CauseCardProps) {
  return (
    <div className="w-[370px] sm:w-[329px] h-[560px] bg-[#F3F2E7] rounded-lg shadow-md">
      <div className="relative w-full h-[240px]">
        <Image src={imageSrc} alt={title} layout="fill" className="rounded-t-lg object-cover" />
        <span className="absolute top-4 left-4 px-3 py-1 text-[12px] font-semibold text-white bg-[#E29F72] rounded-full">
          {category}
        </span>
      </div>
      <div className="p-8">
        <h3 className="mt-4 text-[24px] font-rowdies font-bold text-[#3A1700] sm:text-[22px]">{title}</h3>
        <div className="mt-[33px] text-gray-600">
          <div className="flex justify-between">
            <p className="text-[#3A1700] font-manrope text-[20px] font-bold">${raised.toLocaleString()}</p>
            <p className=" text-[#3A170080] font-manrope">${goal.toLocaleString()} Goal</p>
          </div>
        </div>
        <div className="mt-[24px]">
          <ProgressBar progress={raised} goal={goal} />
        </div>
        <div className="mt-[40px] font-rowdies">
          <Button text="Make a Donation" className="" />
        </div>
      </div>
    </div>
  );
}