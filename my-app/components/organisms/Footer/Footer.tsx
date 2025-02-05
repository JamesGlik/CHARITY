import React from "react";
import FooterSection from "../../molecules/FooterSection/FooterSection";
import SocialImage from "../../atoms/SocialImage/SocialImage";
import { FooterProps } from "../../../types/FooterProps/FooterProps";

function Footer({
  menuLinks,
  serviceLinks,
  socialImage,
  copyright,
  termsLinks,
}: FooterProps) {
  return (
    <footer className="bg-[#D58E5E] px-[135px] pt-[74px] pb-[54px] lg:px-[50px] md:px-[23px]">
      <div className="flex justify-between items-start lg:flex-col lg:items-center gap-y-[48px]">
        <div className="sm:mb-4 sm:flex sm:justify-center sm:items-center">
          <h2 className="text-white text-[40px] tracking-[-1px] font-light  font-rowdies sm:text-center lg:pb-[0]">
            CHA
          </h2>
        </div>
        <div className="sm:mb-4 sm:flex sm:justify-center sm:items-center lg:text-center">
          <FooterSection title="Menu" links={menuLinks} />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center max-sm:flex-col sm:pb-4 sm:ml-0 lg:text-center">
          <div className="sm:ml-0">
            <FooterSection title="Service" links={serviceLinks} />
          </div>
        </div>
        <div className="lg:pb-[64px]">
          <SocialImage {...socialImage} />
        </div>
      </div>

      <div className="pt-[70px] pb-[41px]">
        <div className="w-full h-[1px] bg-[#FFF] opacity-[50%]"></div>
      </div>

      <div className="flex justify-between items-center lg:flex-col ">
        <span className="text-sm text-white opacity-[50%] pb-[16px] md:text-center">{copyright}</span>
        <div className="flex gap-x-[73px] items-center md:justify-between">
          {termsLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-manrope text-[#FFF] leading-[32px] md:leading-[20px] md:text-center"
            >   
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
