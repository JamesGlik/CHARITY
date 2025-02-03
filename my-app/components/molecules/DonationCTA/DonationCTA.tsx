import { DonationCTAProps } from '../../../types/DonationCTAProps/DonationCTAProps';
import DonationHeading from '../../atoms/DonationHeading/DonationHeading';
import Text from '../../atoms/Text/Text';
import DonationButton from '../../atoms/DonationButton/DonationButton';

function DonationCTA({ heading, subtext }: DonationCTAProps) {
  return (
    <div className="flex justify-between items-center w-full px-[165px] sm:px-[20px] sm:flex-col ">
      <div className="flex flex-col mr-8">
        <DonationHeading text={heading} className="text-white mb-4" />
        <Text content={subtext} className="text-white" />
      </div>

      <div className=" sm:mt-[33px]">
        <DonationButton label="Contact Us" variant="secondary" />
        <DonationButton label="Make a Donation" variant="primary" />
      </div>
    </div>
  );
}

export default DonationCTA;