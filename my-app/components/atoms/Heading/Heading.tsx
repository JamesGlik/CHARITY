import React from 'react';

type HeadingProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const Heading = ({ title, subtitle, className = '' }: HeadingProps) => {
  return (
    <div className={` ${className}`}>
      <h2 className="text-[56px] font-bold text-[#3A1700] mt-[17px]">{title}</h2>
      <p className="text-[20px;] text-[#3A1700] mt-[29px]">{subtitle}</p>
    </div>
  );
};

export default Heading;