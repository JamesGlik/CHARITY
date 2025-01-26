import React from 'react';

interface SocialImageProps {
  src: string;
  alt: string;
  href: string;
}

function SocialImage({ src, alt, href }: SocialImageProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <img src={src} alt={alt} className="w-[160px] h-auto" />
    </a>
  );
}

export default SocialImage;