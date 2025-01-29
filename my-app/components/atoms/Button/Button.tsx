import React from 'react';
import { ButtonProps } from '../../../types/ButtonProps/ButtonProps';

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      className={`px-[40px] py-[15px] bg-[#7E8AB8] text-white text-[14px] font-semibold rounded-[24px] transition-all duration-300 ease-in-out hover:text-[#7E8AB8] hover:bg-white ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}