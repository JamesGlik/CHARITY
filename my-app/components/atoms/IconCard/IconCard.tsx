import React from 'react';

type IconCardProps = {
  iconSrc: string;
  title: string;
  content: string;
  bgColor: string;
};

const IconCard = ({ iconSrc, title, content, bgColor }: IconCardProps) => {
  return (
    <div
      className={`flex items-center h-[192px] w-full px-8`} 
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center mr-6">
        <img src={iconSrc} alt="Icon" className="w-8 h-8" />
      </div>
      <div>
        <p className="text-[#3A170080]">{title}</p>
        <p className="text-[20px] text-[#3A1700]">{content}</p>
      </div>
    </div>
  );
};

export default IconCard;