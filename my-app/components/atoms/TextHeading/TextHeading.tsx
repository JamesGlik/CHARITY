import React from 'react';

type TextHeadingProps = {
  text: string;
};

const TextHeading = ({ text }: TextHeadingProps) => {
  return <h2 className="text-[56px] text-[#3A1700] mb-[31px] tracking-[-2px]">{text}</h2>;
};

export default TextHeading;