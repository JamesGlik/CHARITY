import React from 'react';
import FooterSection from '../../molecules/FooterSection/FooterSection';
import SocialImage from '../../atoms/SocialImage/SocialImage';
import { FooterProps } from '../../../types/FooterProps/FooterProps';

function Footer({
    menuLinks,
    serviceLinks,
    socialImage,
    copyright,
    termsLinks,
  }: FooterProps) {
    return (
      <footer className="bg-[#D58E5E] px-[135px]">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-3 sm:text-left">
          <div>
            <h2 className="text-white text-[40px] tracking-[-1px] font-light mt-[74px]">CHA</h2>
          </div>
          <div className="ml-[-80px]"> 
            <FooterSection title="Menu" links={menuLinks} />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="ml-[-150px]"> 
              <FooterSection title="Service" links={serviceLinks} />
            </div>
            <div className="top-[96px]">
              <SocialImage {...socialImage} />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-[70px] pb-[54px] border-t border-white pt-4 opacity-[50%]">
          <p className="text-sm text-white mt-[41px] opacity-[50%]">{copyright}</p>
          <div className="flex space-x-4  ">
            {termsLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white text-sm hover:underline mr-[20px] "
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