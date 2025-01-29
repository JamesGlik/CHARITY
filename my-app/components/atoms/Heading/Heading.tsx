import { HeadingProps } from '../../../types/HeadingProps/HeadingProps';

const Heading = ({ title, subtitle, className = '' }: HeadingProps) => {
  return (
    <div className={` ${className}`}>
      <h2 className="text-[56px] font-bold text-[#3A1700] mt-[17px] w-[70%]">{title}</h2>
      <p className="text-[20px;] text-[#3A1700] mt-[29px] w-[68%]">{subtitle}</p>
    </div>
  );
};

export default Heading;