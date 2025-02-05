import QuoteSlider from "@/components/molecules/QuoteSwiper/QuoteSwiper";
import StoriesIcon from "@/public/StoriesIcon";
import React from "react";

const StoriesSection = () => {
  return (
    <div className="bg-[#f3f2e7]">
      <div className="flex flex-col gap-y-[69px] px-[50px] md:px-[23px]">
        <div className="flex flex-col gap-y-[17px] justify-center items-center">
          <p className="text-[#E29F72] font-rowdies font-light leading-[32px] tracking-[3px] uppercase">
            child stories
          </p>
          <h3 className="text-[#3A1700] font-rowdies text-[56px] font-light leading-[64px] tracking-[-2px] md:text-[40px] md:leading-[32px] md:tracking-[-1px]">
            Read Stories
          </h3>
        </div>
        <div className="relative z-[0]">
          <QuoteSlider />
          <div className="absolute left-1/2 -top-7 transform -translate-x-1/2 z-[1]">
            <StoriesIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;
