import React from 'react';

type ImageCardProps = {
  image: string;
  alt: string;
  children?: React.ReactNode;
};

const ImageCard = ({ image, alt, children }: ImageCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg top-[70px]">
      <img src={image} alt={alt} className="w-full h-auto" />
      {children}
    </div>
  );
};

export default ImageCard;