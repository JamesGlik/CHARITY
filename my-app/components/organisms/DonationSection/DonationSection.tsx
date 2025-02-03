import { DonationSectionProps } from '../../../types/DonationSectionProps/DonationSectionProps';
import DonationCTA from '../../molecules/DonationCTA/DonationCTA';

function DonationSection({ backgroundImage, heading, subtext }: DonationSectionProps) {
  return (
    <div
      className="relative h-[304px] sm:h-[352px] w-full bg-cover bg-center mb-[122px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <DonationCTA heading={heading} subtext={subtext} />
      </div>
    </div>
  );
}

export default DonationSection;
