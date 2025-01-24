import React from 'react';
import Example from '../components/organisms/Example/Example';
import AboutSection from '@/components/organisms/AboutSection/AboutSection';
import Header from '@/components/molecules/Header/Header';
import GallerySection from '@/components/organisms/GallerySection/GallerySection';
import FeaturesSection from '@/components/organisms/FeaturesSection/FeaturesSection';
import DonationSectionWrapper from '@/components/organisms/DonationSectionWrapper/DonationSectionWrapper';

const index = () => {
  return (
    <div className="m-auto w-full">
      <Header />
      <FeaturesSection />
      <Example />
      <AboutSection />
      <GallerySection />
      <DonationSectionWrapper/>
    </div>
  );
};

export default index;