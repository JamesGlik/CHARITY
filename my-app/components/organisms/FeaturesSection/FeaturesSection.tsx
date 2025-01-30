import FeaturesCard from "@/components/molecules/FeaturesCard/FeaturesCard";
import FeaturesLine from "@/public/FeaturesLine";
import FeaturesOval from "@/public/FeaturesOval";
import React from "react";

const FeaturesSection = () => {
  return (
    <div className="pt-[122px] px-[215px] flex flex-col justify-center">
      <p className="mb-[15px] text-center text-[#E29F72] font-rowdies font-light leading-[32px] uppercase tracking-[3px]">
        our features
      </p>
      <p className="text-center text-[#3A1700] font-rowdies text-[40px] font-light leading-[48px] tracking-[-1px]">
        Whatever it is that you care about, there will <br /> be a charity
        working on it. Charities help in <br />
        lots of different ways.
      </p>

      <div className="grid grid-cols-2 gap-x-[30px] gap-y-[30px] mb-[30px] mt-[66px] justify-center relative">
        <div className="absolute bottom-[140px] -left-[40px] z-[-2]">
          <FeaturesLine />
        </div>
        <div className="absolute z-[-1] top-[70px] -left-[35px]">
          <FeaturesOval/>
        </div>
        <FeaturesCard
          iconSvg="/features_image1.svg"
          cardHeader="Direct Help"
          cardText="Charities bring together people who care about a cause so that they can make a difference."
          width={64}
          height={62}
        />
        <FeaturesCard
          iconSvg="/features_image2.svg"
          cardHeader="Giving Information"
          cardText="People who care about a cause so that they can make a difference it is that you care about."
          width={64}
          height={64}
        />
        <FeaturesCard
          iconSvg="/features_image3.svg"
          cardHeader="Raising Awareness"
          cardText="Whatever it is that you care about, there will be a charity working on it."
          width={64}
          height={59}
        />
        <FeaturesCard
          iconSvg="/features_image4.svg"
          cardHeader="Relieving Poverty"
          cardText="Charities help in lots of different ways, but the main ways are by providing direct help."
          width={41}
          height={64}
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
