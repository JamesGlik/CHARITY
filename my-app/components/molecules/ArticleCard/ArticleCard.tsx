import React from 'react';
import Badge from '@/components/atoms/Badge/Badge';

interface ArticleCardProps {
  title: string;
  date: string;
  category: string;
  imageSrc: string;
  raised: number;  
  goal: number;   
}

function ArticleCard({
  title,
  date,
  category,
  imageSrc,
  raised,
  goal,
}: ArticleCardProps) {
  const progress = (raised / goal) * 100; 

  return (
    <div className="bg-[#F3F2E7] rounded-lg shadow-md overflow-hidden min-w-[329px] max-w-[370px] sm:w-[329px] h-[464px] mt-8 ">
      <div className="relative w-full h-[240px]">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2">
          <Badge text={category} />
        </div>
      </div>
      <div className="h-[224px] pl-[32px] pb-[40px]">
        <h3 className="text-[24px] font-bold text-[#3A1700] pt-[39px] font-rowdies">{title}</h3>
        <div className="w-[85%] h-1 bg-[#DEDDCD] mt-[25px] rounded-full">
          <div
            className="h-full bg-[#3A1700] rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }} 
          ></div>
        </div>
        <p className="text-[20px] text-[#3A1700] pt-[21px] font-manrope">{date}</p>
      </div>
    </div>
  );
}

export default ArticleCard;