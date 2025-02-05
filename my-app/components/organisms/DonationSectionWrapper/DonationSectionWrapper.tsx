import React from 'react';
import DonationSection from '@/components/organisms/DonationSection/DonationSection';

const DonationSectionWrapper = () => {
  const props = {
    backgroundImage: 'make_a_donation_image.svg',
    heading: 'Make A Donation',
    subtext:
      'A charity must have one or more of the purposes which have been defined in law.',
  };

  return <DonationSection {...props} />;
};

export default DonationSectionWrapper;