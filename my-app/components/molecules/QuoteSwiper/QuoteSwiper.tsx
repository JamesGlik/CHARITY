"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import SwiperCore from "swiper";
import LeftIcon from "@/public/LeftIcon";
import RightIcon from "@/public/RightIcon";
import Image from "next/image";
import { motion } from "framer-motion";

const QuoteSlider = () => {
  const quotes = [
    {
      text: "Charity is the act of giving help to those in need of it. It is a humanitarian act. It involves giving money, goods or time and effort to those who need it. It is done without expecting something in return.",
      author: "Neville Griffin",
      imgSrc: "/storiesImage.png",
    },
    {
      text: "Charity is the act of giving help to those in need of it. It is a humanitarian act. It involves giving money, goods or time and effort to those who need it. It is done without expecting something in return.",
      author: "Neville Griffin",
      imgSrc: "/storiesImage.png",
    },
    {
      text: "Charity is the act of giving help to those in need of it. It is a humanitarian act. It involves giving money, goods or time and effort to those who need it. It is done without expecting something in return.",
      author: "Neville Griffin",
      imgSrc: "/storiesImage.png",
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () =>
        setActiveIndex(swiperInstance.activeIndex)
      );
    }
  }, [swiperInstance]);

  const marqueeVariants = {
    animate: {
      x: ["100%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const images = [
    "/digitalside.png",
    "/vortex.png",
    "/travelexplorer.png",
    "/fuzion.png",
    "/mediafury.png",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={setSwiperInstance}
        className="w-full max-w-[770px]"
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#FFF] py-[40px] px-[48px] flex flex-col items-center rounded-[12px]">
              <p className="text-[#3A1700] text-center font-rowdies text-[24px] font-light leading-[32px] pb-[38px]">
                "{quote.text}"
              </p>
              <div className="w-full flex items-center justify-center flex-col pb-[29px]">
                <div className="w-full h-[1px] bg-[#DEDDCD]"></div>
                <div className="w-[64px] h-[3px] bg-[#333]"></div>
              </div>
              <Image
                src={quote.imgSrc}
                width={64}
                height={64}
                alt="image"
                className="rounded-full pb-[7px]"
              />
              <h4 className="text-[#3A1700] text-[24px] font-rowdies font-light leading-[32px]">
                {quote.author}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center gap-x-[8px] pb-[132px] pt-[32px]">
        <button
          className={`cursor-pointer border border-[#7E8AB84E] w-[48px] h-[48px] flex justify-center items-center rounded-full ${
            activeIndex === 0 ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => swiperInstance?.slidePrev()}
        >
          <LeftIcon />
        </button>

        <button
          className={`cursor-pointer border border-[#7E8AB84E] w-[48px] h-[48px] flex justify-center items-center rounded-full ${
            activeIndex === quotes.length - 1
              ? "opacity-50 pointer-events-none"
              : ""
          }`}
          onClick={() => swiperInstance?.slideNext()}
        >
          <RightIcon />
        </button>
      </div>
      <div className="relative pb-[93px] sm:w-[90%]">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex items-center gap-[96px]"
            variants={marqueeVariants}
            animate="animate"
          >
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={140}
                height={60}
                alt="image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSlider;
