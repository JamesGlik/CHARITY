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
    <footer className="bg-[#D58E5E] px-[135px] sm:h-[1100px]">
      <div className="mx-auto grid grid-cols-3 sm:grid-cols-1 max-sm:grid-cols-1">
        <div className="sm:mb-4 sm:flex sm:justify-center sm:items-center">
          <h2 className="text-white text-[40px] tracking-[-1px] font-light mt-[74px] font-rowdies sm:text-center">
            CHA
          </h2>
        </div>
        <div className="sm:mb-4 sm:flex sm:justify-center sm:items-center sm:ml-0 sm:text-center">
          <FooterSection title="Menu" links={menuLinks} />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center max-sm:flex-col sm:mb-4 sm:ml-0 sm:text-center">
          <div className="sm:ml-0">
            <FooterSection title="Service" links={serviceLinks} />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute sm:top-[40px] top-[-130px] right-[-20px] sm:w-[160px] sm:h-[48px]">
          <SocialImage {...socialImage} />
        </div>
      </div>

      <div className="flex justify-between font-manrope items-center mt-[70px] pb-[54px] border-t border-white opacity-[50%] sm:flex-col sm:justify-center sm:items-center sm:text-center sm:w-full sm:mt-[150px]">
        <p className="text-sm text-white mt-[41px] sm:w-[150%] opacity-[50%] sm:mt-4 sm:mb-2">
          {copyright}
        </p>
        <div className="flex space-x-4 sm:flex sm:flex-row sm:justify-center pt-[40px] sm:w-[300%] sm:items-center">
          {termsLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white text-sm hover:underline"
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