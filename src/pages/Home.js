import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import ServicesSection from '../components/ServicesSection';
import WebProjectSection from '../components/WebProjectSection';
import BrandsSection from '../components/BrandsSection';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BrandsSection />
      <ProjectSection />
      <WebProjectSection />
      <TestimonialsSection />
      <ContactBanner />
    </div>
  );
}
