import VolunteersCard from "@/components/molecules/VolunteersCard/VolunteersCard";
import GalleryButton from "@/components/atoms/GalleryButton/GalleryButton";
import React, { useState } from "react";
import { motion } from "framer-motion";

const VolunteersSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#f3f2e7] pt-[90px] pb-[138px] px-[135px] lg:px-[50px] md:px-[23px]">
      <p className="text-[#E29F72] font-rowdies font-light leading-[32px] tracking-[3px] uppercase pb-[17px] md:pb-[15px]">
        Volunteers
      </p>
      <h3 className="text-[#3A1700] font-rowdies text-[56px] font-light leading-[64px] tracking-[-2px] pb-[69px] md:text-[40px] md:leading-[48px] md:tracking-[-1px] md:pb-[55px]">
        Our Volunteers
      </h3>

      <div className="grid grid-cols-4 lg:grid-cols-2 md:flex md:flex-col gap-x-[30px] gap-y-[32px] pb-[32px]">
        <VolunteersCard imagesrc="/volunteers_image.jpg" name="Benito Noboa" />
        <VolunteersCard
          imagesrc="/volunteers_image.jpg"
          name="Gabriel Moreira"
        />
        <VolunteersCard
          imagesrc="/volunteers_image.jpg"
          name="Lumir Sacharov"
        />
        <VolunteersCard
          imagesrc="/volunteers_image.jpg"
          name="Cvita Doleschall"
        />
      </div>

      <motion.div
        initial={false}
        animate={{ height: showMore ? "auto" : 0, opacity: showMore ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="grid grid-cols-4 lg:grid-cols-2 md:flex md:flex-col gap-x-[30px] gap-y-[32px]">
          <VolunteersCard
            imagesrc="/volunteers_image.jpg"
            name="Benito Noboa"
          />
          <VolunteersCard
            imagesrc="/volunteers_image.jpg"
            name="Gabriel Moreira"
          />
          <VolunteersCard
            imagesrc="/volunteers_image.jpg"
            name="Lumir Sacharov"
          />
          <VolunteersCard
            imagesrc="/volunteers_image.jpg"
            name="Cvita Doleschall"
          />
        </div>
      </motion.div>

      <div className="flex justify-center pt-8">
        <GalleryButton
          label={showMore ? "SHOW LESS" : "ALL TEAM"}
          onClick={() => setShowMore(!showMore)}
        />
      </div>
    </div>
  );
};

export default VolunteersSection;
