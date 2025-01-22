import React from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      className={`px-[28px] py-[13px] w-[202px] bg-[#7E8AB8] text-white text-[14px] font-semibold rounded-[24px] hover:text-[#7E8AB8] hover:bg-white ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}