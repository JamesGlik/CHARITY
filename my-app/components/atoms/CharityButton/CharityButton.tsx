import React from 'react';

type CharityButtonProps = {
  text: string;
};

const CharityButton = ({ text }: CharityButtonProps) => {
  return (
    <button
      className="px-[28px] py-[13px] w-[202px] text-[#7E8AB8] text-[14px] font-semibold rounded-[24px] transition-all duration-300 ease-in-out hover:text-[#FFFFFF] hover:bg-[#7E8AB8] border border-[#7E8AB8] "
    >
      {text}
    </button>
  );
};

export default CharityButton;