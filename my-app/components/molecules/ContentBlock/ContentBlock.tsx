import React from 'react';
import TextHeading from '../../atoms/TextHeading/TextHeading';
import TextBody from '../../atoms/TextBody/TextBody';
import CharityButton from '../../atoms/CharityButton/CharityButton';

type ContentBlockProps = {
  heading: string;
  body: string;
  buttonText: string;
};

const ContentBlock = ({ heading, body, buttonText }: ContentBlockProps) => {
  return (
    <div className="max-w-md">
      <h1 className="text-[#E29F72] mb-[17px] tracking-[3px]">CHARITY</h1>
      <TextHeading text={heading} />
      <TextBody text={body} />
      <CharityButton text={buttonText} />
    </div>
  );
};

export default ContentBlock;
