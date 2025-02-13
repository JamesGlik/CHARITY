import { PrimaryButtonProps } from '../../../types/PrimaryButtonProps/PrimaryButtonProps';

const PrimaryButton = ({ text, onClick, className = '' }: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-[47px] py-[15px] font-rowdies text-[#7E8AB8] border border-[#7E8AB8] rounded-[24px] hover:bg-[#7E8AB8] hover:text-white transition-all duration-300 ease-in-out ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;