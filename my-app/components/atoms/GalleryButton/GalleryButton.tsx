import { GalleryButtonProps } from '../../../types/GalleryButtonProps/GalleryButtonProps';

export default function GalleryButton({ label, onClick }: GalleryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 w-[170px] text-[#7E8AB8] border border-[#7E8AB8] rounded-[24px] hover:bg-[#7E8AB8] hover:text-white transition-all duration-300 ease-in-out"
    >
      {label}
    </button>
  );
}