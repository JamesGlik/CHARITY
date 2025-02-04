import React from 'react';

interface InputProps {
  placeholder: string;
}

function Input({ placeholder }: InputProps) {
  return (
    <input
      type="email"
      placeholder={placeholder}
      className="px-[24px] py-[9px] font-manrope sm:w-[274px] sm:mt-[22px] h-[48px] border border-[#DADADA] rounded-[24px] text-[#3A170080] focus:ring-[#3A1700]"
    />
  );
}

export default Input;