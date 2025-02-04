import { GalleryHeadingProps } from '../../../types/GalleryHeadingProps/GalleryHeadingProps';

export default function GalleryHeading({ text, subtext }: GalleryHeadingProps) {
  return (
    <div className="text-center">
      <p className=" text-[#E29F72] uppercase">{subtext}</p>
      <h2 className="mt-[17px] text-[#3A1700] text-[56px] sm:text-[40px] font-bold text-brown-700">{text}</h2>
    </div>
  );
}