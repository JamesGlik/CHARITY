import React from 'react';
import { ContentBlockProps } from '../../../types/ContentBlockProps/ContentBlockProps'; 
import TextHeading from '../../atoms/TextHeading/TextHeading';
import TextBody from '../../atoms/TextBody/TextBody';
import CharityButton from '../../atoms/CharityButton/CharityButton';

const ContentBlock = ({ heading, body, buttonText }: ContentBlockProps) => {
  return (
    <div className="max-w-md sm:mt-[-180px] sm:pb-[48px] ">
      <h1 className="text-[#E29F72] mb-[17px] tracking-[3px] font-rowdies">CHARITY</h1>
      <TextHeading text={heading} />
      <TextBody text={body} />
      <CharityButton text={buttonText} />
    </div>
  );
};

export default ContentBlock;
