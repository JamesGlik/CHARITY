import React from 'react';

type TextBodyProps = {
  text: string;
};

const TextBody = ({ text }: TextBodyProps) => {
  return <p className="text-[#3A170080] mb-[35px]">{text}</p>;
};

export default TextBody;