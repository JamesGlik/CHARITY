import { HeadingProps } from '../../../types/HeadingProps/HeadingProps';

const Heading = ({ title, subtitle, className = '' }: HeadingProps) => {
  return (
    <div className={` ${className}`}>
      <h2 className="text-[56px] sm:text-[40px] font-bold text-[#3A1700] pt-[17px] w-[70%] font-rowdies">{title}</h2>
      <p className="text-[20px] sm:w-[100%] sm:pr-[23px] text-[#3A1700] pt-[29px] w-[68%] font-manrope pb-[35px]">{subtitle}</p>
    </div>
  );
};

export default Heading;