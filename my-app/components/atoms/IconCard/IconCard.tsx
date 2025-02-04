import React from 'react';

type IconCardProps = {
  iconSrc: string;
  title: string;
  content: string;
  bgColor: string;
  iconWidth: string;  
  iconHeight: string; 
};

const IconCard = ({
  iconSrc,
  title,
  content,
  bgColor,
  iconWidth,
  iconHeight
}: IconCardProps) => {
  return (
    <div
      className={`flex items-center h-[192px] w-full px-8`} 
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center mr-6">
        <img
          src={iconSrc}
          alt="Icon"
          style={{ width: iconWidth, height: iconHeight }}  
        />
      </div>
      <div>
        <p className="text-[#3A170080] font-manrope">{title}</p>
        <p className="text-[20px] text-[#3A1700] font-manrope">{content}</p>
      </div>
    </div>
  );
};

export default IconCard;