import React from 'react';
import { TextBodyProps } from '../../../types/TextBodyProps/TextBodyProps';

const TextBody = ({ text }: TextBodyProps) => {
  return <p className="text-[#3A170080] mb-[35px] w-[90%]">{text}</p>;
};

export default TextBody;