import React from 'react'
import Example from '../components/organisms/Example/Example'
import AboutSection from '@/components/organisms/AboutSection/AboutSection';
import Header from '@/components/molecules/Header/Header';
import FeaturesSection from '@/components/organisms/FeaturesSection/FeaturesSection';

const index = () => {
  return (
    <div className="m-auto w-full ">
      <Header/>
      <FeaturesSection/>
      <Example/>
      <AboutSection/>
    </div>
  );
};

export default index;
