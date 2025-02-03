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
    <footer className="bg-[#D58E5E] px-[135px] sm:h-[1300px]">
      <div className="mx-auto grid grid-cols-3 sm:grid-cols-1 max-sm:grid-cols-1">
        <div className="sm:mb-4 sm:flex sm:justify-center sm:items-center">
          <h2 className="text-white text-[40px] tracking-[-1px] font-light mt-[74px] sm:text-center">
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
        <div className="absolute top-[40px] right-[-20px] sm:w-[160px] sm:h-[48px]">
          <SocialImage {...socialImage} />
        </div>
      </div>

      <div className="flex flex-row justify-between items-center mt-[70px] pb-[54px] border-t border-white sm:mt-[150px] pt-4 opacity-[50%] max-sm:flex-col sm:justify-center sm:items-center sm:text-center sm:w-full sm:border-t-2">
        <div className="flex flex-col sm:w-[300%] sm:items-center sm:mb-4">
          <p className="text-sm text-white mt-[41px] opacity-[50%] sm:text-center sm:mb-[10px]">
            {copyright}
          </p>
          <div className="flex space-x-4 sm:flex-row sm:justify-center sm:items-center sm:text-center sm:w-[200%]">
            {termsLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white text-sm hover:underline sm:mb-2 sm:mr-4"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;