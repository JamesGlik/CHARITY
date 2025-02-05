import React from "react";
import ContentBlock from "../../molecules/ContentBlock/ContentBlock";

const CharitySection = () => {
  return (
    <section
      className="w-full h-[840px] bg-cover bg-center flex items-center justify-between px-[135px] sm:flex-cols sm:flex-col-reverse sm:h-auto sm:px-[40px] 
                 bg-[url('/charity_bg_image.svg')] sm:bg-[url('/charity_media.svg')]"
    >
      
      <ContentBlock
        heading="Giving help to those who need it"
        body="Charity is the act of giving help to those in need of it. It is a humanitarian act."
        buttonText="Make a Donation"
      />
      <img
        src="/charity_image.svg"
        alt="Charity Image"
        className="object-contain rounded-lg sm:h-[720px] sm:mt-[-150px] sm:w-full"
      />
    </section>
  );
};

export default CharitySection;