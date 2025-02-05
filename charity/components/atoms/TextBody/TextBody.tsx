import React from 'react';
import { TextBodyProps } from '../../../types/TextBodyProps/TextBodyProps';

const TextBody = ({ text }: TextBodyProps) => {
  return <p className="text-[#3A170080] font-medium pb-[35px] w-[90%] font-manrope">{text}</p>;
};

export default TextBody;