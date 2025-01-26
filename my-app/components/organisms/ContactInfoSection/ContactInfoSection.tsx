import React from 'react';
import IconCard from '../../atoms/IconCard/IconCard';

const ContactInfoSection = () => {
  return (
    <section className="w-full flex">
      <IconCard
        iconSrc="/phone.svg"
        title="Phone"
        content="+1 (234) 567-89-00"
        bgColor="#EAE9DA"
      />
      <IconCard
        iconSrc="/mail.svg"
        title="Mail"
        content="charity@info.com"
        bgColor="#E3E1CB"
      />
      <IconCard
        iconSrc="/address.svg"
        title="Address"
        content={"4 N. Border Street  Los Banos, CA 93635"}
        bgColor="#CBC8AD"
      />
    </section>
  );
};

export default ContactInfoSection;