import React from "react";
import ContentBlock from "../../molecules/ContentBlock/ContentBlock";

const CharitySection = () => {
  return (
    <section
      className="w-full  bg-cover bg-center flex items-center justify-between sm:px-[20px] px-[135px] py-[40px] lg:flex-col-reverse sm:flex-col-reverse bg-[url('/charity_bg_image.svg')] sm:bg-[url('/charity_media.svg')]"
    >
      <ContentBlock
        heading="Giving help to those who need it"
        body="Charity is the act of giving help to those in need of it. It is a humanitarian act."
        buttonText="Make a Donation"
      />
      <img
        src="/charity_image.svg"
        alt="Charity Image"
        className="object-contain rounded-lg sm:h-[351px] sm:w-full"
      />
    </section>
  );
};

export default CharitySection;