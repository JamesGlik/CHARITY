import React from 'react';
import ContentBlock from '../../molecules/ContentBlock/ContentBlock';

const CharitySection = () => {
  return (
    <section
      className="w-full h-[840px] bg-cover bg-center flex items-center justify-between px-[135px]"
      style={{ backgroundImage: `url('/charity_bg_image.svg')` }}
    >
      <ContentBlock
        heading="Giving help to those who need it"
        body="Charity is the act of giving help to those in need of it. It is a humanitarian act."
        buttonText="Make a Donation"
      />
      <img
        src="/charity_image.svg"
        alt="Right Side Image"
        className="object-contain rounded-lg"
      />
    </section>
  );
};

export default CharitySection;