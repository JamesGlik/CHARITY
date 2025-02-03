import React from 'react';
import Example from '../components/organisms/Example/Example';
import AboutSection from '@/components/organisms/AboutSection/AboutSection';
import Header from '@/components/molecules/Header/Header';
import GallerySection from '@/components/organisms/GallerySection/GallerySection';
import FeaturesSection from '@/components/organisms/FeaturesSection/FeaturesSection';
import DonationSectionWrapper from '@/components/organisms/DonationSectionWrapper/DonationSectionWrapper';
import ServicesSection from '@/components/organisms/ServicesSection/ServicesSection';
import CharitySection from '@/components/organisms/CharitySection/CharitySection';
import FooterWrapper from '@/components/organisms/FooterWrapper/FooterWrapper';
import EventsSection from '@/components/organisms/EventsSection/EventsSection';
import ContactInfoSection from '@/components/organisms/ContactInfoSection/ContactInfoSection';
import VolunteersSection from '@/components/organisms/VolunteersSection/VolunteersSection';
import LatestArticles from '@/components/organisms/LatestArticles/LatestArticles';
import QuoteSlider from '@/components/molecules/QuoteSwiper/QuoteSwiper';
import StoriesSection from '@/components/organisms/StoriesSection/StoriesSection';

const index = () => {
  return (
    <div className="m-auto w-full font-rowdies">
      <Header />
      <FeaturesSection />
      <Example />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <DonationSectionWrapper />
      <EventsSection />
      <VolunteersSection/>
      <StoriesSection/>
      <LatestArticles/>
      <CharitySection />
      <ContactInfoSection />
      <FooterWrapper />
    </div>
  );
};

export default index;