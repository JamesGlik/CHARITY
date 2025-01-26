import Button from "@/components/atoms/GalleryButton/GalleryButton";
import EventsCard from "@/components/molecules/EventsCard/EventsCard";
import React from "react";

const EventsSection = () => {
  return (
    <div>
      <h3 className="text-[#E29F72] text-center font-rowdies font-light leading-[32px] tracking-[3px] uppercase mb-[17px]">
        future events
      </h3>
      <p className="text-[#3A1700] text-center font-rowdies text-[56px] font-light leading-[64px] tracking-[-2px] mb-[69px]">
        Explore Events
      </p>

      <div className="flex flex-col gap-y-[32px] mb-[48px]">
        <EventsCard
          imageSrc="/events_image.jpeg"
          cardHeader={
            <>
              Bring together people who <br /> care about a cause
            </>
          }
          date="16 Feb, 2020"
        />

        <EventsCard
          imageSrc="/events_image.jpeg"
          cardHeader={
            <>
              Together people who care <br /> about a cause
            </>
          }
          date="16 Feb, 2020"
        />

        <EventsCard
          imageSrc="/events_image.jpeg"
          cardHeader={
            <>
              People who care <br /> about a cause
            </>
          }
          date="16 Feb, 2020"
        />
      </div>

      <div className="flex justify-center mb-[112px]">
        <Button label="Explore All" />
      </div>
    </div>
  );
};

export default EventsSection;
