import { DonationTextProps } from '../../../types/DonationTextProps/DonationTextProps';

function Text({ content, className = '' }: DonationTextProps) {
  return <p className={`text-[#FFF] opacity-50 ${className}`}>{content}</p>;
}

export default Text;
