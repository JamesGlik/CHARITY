import React, { useState } from 'react';
import CauseCard from '../../molecules/CauseCard/CauseCard';
import { RecentCausesProps } from '../../../types/RecentCausesProps/RecentCausesProps';

export default function RecentCauses({ causes }: RecentCausesProps) {
  const [visibleCauses, setVisibleCauses] = useState(causes);
  const [showAll, setShowAll] = useState(false);

  const handleExploreAll = () => {
    setShowAll(true);
  };

  return (
    <section className="pt-[138px] pb-[112px] bg-white">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-[16px] font-semibold text-[#E29F72]">OUR CASES</h2>
        <h3 className="mt-[17px] text-[56px] font-bold text-[#3A1700]">Our Recent Causes</h3>
      </div>
      <div className="mt-[64px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[135px] justify-items-center">
        {visibleCauses.map((cause, index) => (
          <CauseCard key={index} {...cause} />
        ))}

        {showAll &&
          causes.map((cause, index) => (
            <div key={index} className="mt-8">
              <CauseCard {...cause} />
            </div>
          ))}
      </div>
      {!showAll && (
        <div className="mt-[64px] text-center">
          <button
            onClick={handleExploreAll}
            className="px-6 py-2 w-[170px] text-[#7E8AB8] border border-[#7E8AB8] rounded-[24px] hover:bg-[#7E8AB8] hover:text-white transition-all duration-300 ease-in-out "
          >
            Explore All
          </button>
        </div>
      )}
    </section>
  );
} 