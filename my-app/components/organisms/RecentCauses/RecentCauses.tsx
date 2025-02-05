import React, { useState } from "react";
import CauseCard from "../../molecules/CauseCard/CauseCard";
import { RecentCausesProps } from "../../../types/RecentCausesProps/RecentCausesProps";
import { motion } from "framer-motion";

export default function RecentCauses({ causes }: RecentCausesProps) {
  const [visibleCauses, setVisibleCauses] = useState(causes);
  const [showAll, setShowAll] = useState(false);

  const handleExploreAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <section className="pt-[138px] pb-[112px] bg-white">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-[16px] font-rowdies font-semibold text-[#E29F72] tracking-[3px]">OUR CASES</h2>
        <h3 className="pt-[17px] font-rowdies text-[56px] font-bold text-[#3A1700] sm:text-[40px]">
          Our Recent Causes
        </h3>
      </div>
      <div className="pt-[64px] flex flex-wrap sm:flex-wrap lg:flex-wrap xl:flex-wrap gap-[30px] justify-center px-[135px] justify-items-center">
        {visibleCauses.map((cause, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            className="pt-8"
          >
            <CauseCard {...cause} />
          </motion.div>
        ))}

        {showAll &&
          causes.map((cause, index) => (
            <motion.div
              key={`extra-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="pt-8"
            >
              <CauseCard {...cause} />
            </motion.div>
          ))}
      </div>
      <div className="pt-[64px] text-center">
        {!showAll ? (
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            className="inline-block"
          >
            <button
              onClick={handleExploreAll}
              className="px-[40px] py-[15px] font-rowdies text-[#7E8AB8] border border-[#7E8AB8] rounded-[24px] hover:bg-[#7E8AB8] hover:text-white transition-all duration-300 ease-in-out"
            >
              Explore All
            </button>
          </motion.div>
        ) : (
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            className="inline-block"
          >
            <button
              onClick={handleShowLess}
              className="px-[40px] py-[15px] font-rowdies text-[#7E8AB8] border border-[#7E8AB8] rounded-[24px] hover:bg-[#7E8AB8] hover:text-white transition-all duration-300 ease-in-out"
            >
              Show Less
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}