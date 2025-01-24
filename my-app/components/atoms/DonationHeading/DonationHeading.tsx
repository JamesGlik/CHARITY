import { DonationHeadingProps } from '../../../types/DonationHeadingProps/DonationHeadingProps';

function DonationHeading({ text, className = '' }: DonationHeadingProps) {
  return <h2 className={`text-[56px] ${className}`}>{text}</h2>;
}

export default DonationHeading;