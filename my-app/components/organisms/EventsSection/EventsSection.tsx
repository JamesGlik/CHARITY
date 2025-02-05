import Button from "@/components/atoms/GalleryButton/GalleryButton";
import EventsCard from "@/components/molecules/EventsCard/EventsCard";
import FutureEventsLine from "@/public/FutureEventsLine";
import FutureEventsOval from "@/public/FutureEventsOval";
import React from "react";

const EventsSection = () => {
  return (
    <div className="relative px-[50px] lg:px-[23px] flex flex-col items-center">
      <h3 className="text-[#E29F72] text-center font-rowdies font-light leading-[32px] tracking-[3px] uppercase pb-[17px] pt-[122px] md:pb-[15px]">
        future events
      </h3>
      <p className="text-[#3A1700] text-center font-rowdies text-[56px] font-light leading-[64px] tracking-[-2px] pb-[69px] sm:text-[40px] md:pb-[55px]">
        Explore Events
      </p>

      <div className="absolute top-[40%] left-[10%] z-[-1] md:hidden">
        <FutureEventsLine/>
      </div>
      <div className="absolute top-[570px] left-[250px] z-[-1] md:hidden">
        <FutureEventsOval/>
      </div>

      <div className="flex flex-col gap-y-[32px] pb-[48px]">
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

      <div className="flex justify-center pb-[112px]">
        <Button label="Explore All" />
      </div>
    </div>
  );
};

export default EventsSection;
