import React from 'react';
import FooterSection from '../../molecules/FooterSection/FooterSection';
import SocialImage from '../../atoms/SocialImage/SocialImage';

interface FooterProps {
  menuLinks: { href: string; text: string }[];
  serviceLinks: { href: string; text: string }[];
  socialImage: { src: string; alt: string; href: string };
  copyright: string;
  termsLinks: { href: string; text: string }[];
}

function Footer({
  menuLinks,
  serviceLinks,
  socialImage,
  copyright,
  termsLinks,
}: FooterProps) {
  return (
    <footer className="bg-[#D58E5E] px-[135px] mt-[100px]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        <div>
          <h2 className="text-white text-[40px] tracking-[-1px] font-light mt-[74px]">CHA</h2>
        </div>
        <FooterSection title="Menu" links={menuLinks} />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <FooterSection title="Service" links={serviceLinks} />
          <div className="top-[96px] ">
            <SocialImage {...socialImage} />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 border-t border-white pt-4">
        <p className="text-sm text-white">{copyright}</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
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