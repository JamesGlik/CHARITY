import React from 'react';
import { FooterSectionProps } from '../../../types/FooterSectionProps/FooterSectionProps';

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-white tracking-[3px] font-light pb-[9px] lg:pt-0 font-rowdies">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-white text-sm hover:underline font-manrope"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSection;