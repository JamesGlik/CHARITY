import Button from "@/components/atoms/Button/Button";
import GalleryButton from "@/components/atoms/GalleryButton/GalleryButton";
import VolunteersCard from "@/components/molecules/VolunteersCard/VolunteersCard";
import React from "react";

const VolunteersSection = () => {
  return (
    <div className="bg-[#f3f2e7] pt-[90px] pb-[138px] px-[135px]">
      <p className="text-[#E29F72] font-rowdies font-light leading-[32px] tracking-[3px] uppercase mb-[17px]">
        Volunteers
      </p>
      <h3 className="text-[#3A1700] font-rowdies text-[56px] font-light leading-[64px] tracking-[-2px] mb-[69px]">
        Our Volunteers
      </h3>

      <div className="flex flex-col gap-y-[48px]">
        <div className="flex gap-x-[30px] justify-center">
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

        <div className="flex justify-center">
          <GalleryButton label="ALL TEAM" />
        </div>
      </div>
    </div>
  );
};

export default VolunteersSection;
