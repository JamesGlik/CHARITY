import React from 'react';

interface LatestButtonProps {
  text: string;
  variant?: 'outline' | 'solid';
}

function LatestButton({ text, variant = 'solid' }: LatestButtonProps) {
  return (
    <button
      className={`px-[42px] py-[15px] font-bold rounded-[24px] font-rowdies transition-all duration-300 ${
        variant === 'outline'
          ? ' px-[46px] py-[15px] border border-[#7E8AB84E] text-[#7E8AB8] text-[14px] bg-[#FFFFFF] hover:bg-[#7E8AB8] hover:text-white mt-[64px]'
          : 'text-[#FFFFFF] text-[14px] h-[48px] bg-[#7E8AB8] hover:bg-[#FFFFFF] hover:text-[#7E8AB8] sm:px-[100px]'
      }`}
    >
      {text}
    </button>
  );
}

export default LatestButton;