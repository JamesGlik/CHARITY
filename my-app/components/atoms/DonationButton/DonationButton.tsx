import { DonationButtonProps } from '../../../types/DonationButtonProps/DonationButtonProps';

function DonationButton({ label, variant = 'primary' }: DonationButtonProps) {
  return (
    <button
      className={`rounded-full text-[14px] font-rowdies ${
        variant === 'primary'
          ? 'px-[40px] py-[15px] sm:px-[20px] sm:py-[15px]   text-[#FFFFFF] border border-[#FFFFFF] rounded-[24px] hover:bg-[#FFB200] hover:text-white hover:border-[#FFB200] transition-all duration-300 ease-in-out'
          : 'px-[40px] py-[15px] sm:px-[20px] sm:py-[15px] text-[#FFFFFF] border border-[#FFFFFF] rounded-[24px] hover:bg-[#FFB200] hover:text-white hover:border-[#FFB200] transition-all duration-300 ease-in-out'
      }`}
    >
      {label}
    </button>
  );
}

export default DonationButton;