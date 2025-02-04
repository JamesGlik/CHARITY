import React from 'react';
import { CharityButtonProps } from '../../../types/CharityButtonProps/CharityButtonProps';

const CharityButton = ({ text }: CharityButtonProps) => {
  return (
    <button
      className="px-[40px] py-[15px] text-[#7E8AB8] font-rowdies text-[14px] font-semibold rounded-[24px] transition-all duration-300 ease-in-out hover:text-[#FFFFFF] hover:bg-[#7E8AB8] border border-[#7E8AB8] "
    >
      {text}
    </button>
  );
};

export default CharityButton;