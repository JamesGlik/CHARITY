import Button from "@/components/atoms/GalleryButton/GalleryButton";
import ServicesCard from "@/components/molecules/ServicesCard/ServicesCard";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="py-[138px] px-[135px] flex flex-col justify-center xl:px-[40px] lg:px-[23px]">
      <p className="uppercase text-[#E29F72] font-light leading-[32px] tracking-[3px] font-rowdies mb-[17px]">
        our services
      </p>
      <h3 className="text-[#3A1700] font-rowdies text-[56px] leading-[64px] tracking-[-2px] font-light mb-[69px]">
        Services We Provide
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-1 gap-x-[30px] gap-y-[16px] pb-[30px]">
        <ServicesCard
          iconSrc="/services_image1.svg"
          cardHeader="Charity"
          cardText="A charity must have one or more of the purposes which have been defined in law."
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

      <motion.div
        initial={false}
        animate={{ height: showMore ? "auto" : 0, opacity: showMore ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="grid grid-cols-3 md:grid-cols-1 gap-x-[30px] gap-y-[16px]">
          <ServicesCard
            iconSrc="/services_image1.svg"
            cardHeader="Charity"
            cardText="A charity must have one or more of the purposes which have been defined in law."
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
      </motion.div>

      <div className="flex justify-center items-center pt-[48px]">
        <Button
          label={showMore ? "Show Less" : "Explore All"}
          onClick={() => setShowMore(!showMore)}
        />
      </div>
    </div>
  );
};

export default ServicesSection;
