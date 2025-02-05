import { StatItem, StatsSectionProps } from '../../../types/StatsSectionProps/StatsSectionProps';

const StatsSection = ({ stats, title }: StatsSectionProps) => {
  return (
    <div className="pt-[327px] sm:pt-[151px]">
      <h2 className="text-[24px] font-semibold text-[#3A1700] text-center pb-8 mx-auto w-[55%] sm:w-[85%] font-rowdies ">{title}</h2>

      <div className="flex sm:flex-wrap lg:flex-wrap xl:flex-wrap lg:justify-center justify-between gap-8 pt-[42px] sm:justify-center">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center flex items-center w-[370px] sm:w-[329px]">
            <h3 className="text-[56px] font-bold text-gray-800 font-rowdies">{stat.number}</h3>
            <div className="flex flex-col text-left pl-[31px]">
              <p className="text-[#3A1700] text-[20px] font-manrope">{stat.label1}</p>
              <p className="text-[#3A170080] font-manrope">{stat.label2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;