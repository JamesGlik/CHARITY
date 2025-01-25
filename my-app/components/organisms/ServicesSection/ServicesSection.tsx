import ServicesCard from "@/components/molecules/ServicesCard/ServicesCard";
import React from "react";

const ServicesSection = () => {
  return (
    <div className="py-[138px] px-[135px]">
      <p className="uppercase text-[#E29F72] font-light leading-[32px] tracking-[3px] font-rowdies mb-[17px]">
        our services
      </p>
      <h3 className="text-[#3A1700] font-rowdies text-[56px] leading-[64px] tracking-[-2px] font-light mb-[69px]">
        Servies We Provide
      </h3>

      <div className="flex gap-x-[30px] mb-[48px]">
        <ServicesCard
          iconSrc="/services_image1.svg"
          cardHeader="Charity"
          cardText="A charity must have one or more of the purposes which have been defined in law. "
          width={56}
          height={64}
        />
        <ServicesCard
          iconSrc="/services_image2.svg"
          cardHeader="Food"
          cardText="These include things like: relieving poverty, education, religion, protecting the environment."
          width={64}
          height={64}
        />
        <ServicesCard
          iconSrc="/services_image3.svg"
          cardHeader="Water"
          cardText="Education, environment, animal welfare, human rights and community development."
          width={59}
          height={64}
        />
      </div>

      <button className="uppercase font-rowdies text-[14px] text-[#7E8AB8] border border-[rgba(126,138,184,0.30)] rounded-[24px] px-[35px] py-[15px] mx-auto block">
        explore all
      </button>
    </div>
  );
};

export default ServicesSection;
