import { StatItem, StatsSectionProps } from '../../../types/StatsSectionProps/StatsSectionProps';

const StatsSection = ({ stats, title }: StatsSectionProps) => {
  return (
    <div className="mt-[327px]">
      <h2 className="text-[24px] font-semibold text-[#3A1700] text-center mb-8 mx-auto w-[55%]">{title}</h2>

      <div className="flex justify-between gap-8 mt-[42px]">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center flex items-center w-[370px]">
            <h3 className="text-[56px] font-bold text-gray-800">{stat.number}</h3>
            <div className="flex flex-col text-left ml-[31px]">
              <p className="text-[#3A1700] text-[20px]">{stat.label1}</p>
              <p className="text-[#3A170080]">{stat.label2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;