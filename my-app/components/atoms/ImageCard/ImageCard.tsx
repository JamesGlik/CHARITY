import { ImageCardProps } from '../../../types/ImageCardProps/ImageCardProps';

const ImageCard = ({ image, alt, children }: ImageCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg top-[70px]">
      <img src={image} alt={alt} className="w-full h-auto" />
      {children}
    </div>
  );
};

export default ImageCard;