import React from 'react';

interface FooterSectionProps {
  title: string;
  links: { href: string; text: string }[];
}

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-white tracking-[3px] font-light mb-[9px] mt-[90px]">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-white text-sm hover:underline"
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