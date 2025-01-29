import React from 'react';
import { TextHeadingProps } from '../../../types/TextHeadingProps/TextHeadingProps';

const TextHeading = ({ text }: TextHeadingProps) => {
  return <h2 className="text-[56px] text-[#3A1700] mb-[31px] tracking-[-2px]">{text}</h2>;
};

export default TextHeading;