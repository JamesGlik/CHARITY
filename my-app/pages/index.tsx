import React from 'react'
import Example from '../components/organisms/Example/Example'
import AboutSection from '@/components/organisms/AboutSection/AboutSection';
import Header from '@/components/molecules/Header/Header';

const index = () => {
  return (
    <div className="m-auto w-full ">
      <Header/>
      <Example/>
      <AboutSection/>
    </div>
  );
};

export default index;
