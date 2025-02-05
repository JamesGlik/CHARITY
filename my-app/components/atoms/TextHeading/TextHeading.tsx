import React from 'react';
import { TextHeadingProps } from '../../../types/TextHeadingProps/TextHeadingProps';

const TextHeading = ({ text }: TextHeadingProps) => {
  return <h2 className="text-[56px] sm:text-[40px] text-[#3A1700] pb-[31px] tracking-[-2px] font-rowdies w-[110%]">{text}</h2>;
};

export default TextHeading;