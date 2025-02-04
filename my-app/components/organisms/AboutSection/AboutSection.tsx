import React from "react";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import Heading from "../../atoms/Heading/Heading";
import StatsSection from "../../molecules/StatsSection/StatsSection";
import ImageCard from "../../atoms/ImageCard/ImageCard";

const AboutSection = () => {
  return (
    <div className="bg-[#F3F2E7] h-auto py-20">
      <div className="mx-auto px-[155px] sm:px-6">

        <div className="flex sm:flex-wrap items-center gap-8 sm:flex-col lg:flex-col xl:flex-col">
          <div className="w-1/2 sm:w-full lg:w-full xl:w-full">
            <ImageCard image="/about_us_image.svg" alt="About us image" />
          </div>
          <div className="w-1/2 sm:w-full sm:pl-[30px] sm:pt-[48px]">
            <h1 className="font-medium text-[#E29F72] mt-[202px] sm:mt-5 tracking-[3px]">
              About Us
            </h1>
            <Heading
              title="Highest form of love"
              subtitle="The practice of charity means the voluntary giving of help to those in need, as a humanitarian act. There are a number of philosophies."
            />
            <PrimaryButton text="About Us" className="mt-[35px]" />
          </div>
        </div>

        <div className="flex sm:flex-wrap justify-center gap-8 mt-16">
          <StatsSection
            title="Whatever it is that you care about, there will be a charity working on it."
            stats={[
              { number: 42, label1: "People", label2: "Prevention of Cruelty" },
              { number: 73, label1: "Society", label2: "Direct Need" },
              { number: 9, label1: "Project", label2: "Research Support" },
            ]}
          />
        </div>

        <div className="flex sm:flex-wrap items-center gap-8 sm:flex-col lg:flex-col xl:flex-col">
          <div className="w-1/2 sm:w-full lg:w-full xl:w-full sm:pl-[30px] sm:pt-[138px]">
            <h1 className="font-medium text-[#E29F72] mt-[298px] sm:mt-5 tracking-[3px]">
              Volunteer
            </h1>
            <Heading
              title="Unselfish love of one’s fellow men"
              subtitle="Charity is the act of giving help to those in need of it. It is a humanitarian act. It involves giving money, goods or time and effort to those who need it."
            />
            <PrimaryButton text="Be a Volunteer" className="mt-[35px]" />
          </div>
          <div className="w-1/2 sm:w-full sm:pb-[90px]">
            <ImageCard image="/volunteer_image.svg" alt="Volunteer image" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;